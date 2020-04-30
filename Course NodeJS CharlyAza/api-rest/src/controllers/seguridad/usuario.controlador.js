module.exports = (router, servicios, modelos, validator) => {

    router.get('/usuario', (req, res, next) => {
        return modelos.Usuario.findAll({
            where: {activo: true},
            include: [
            {model: modelos.Persona, as: 'persona'},
            ]
        }).then(usuariosList => {
            let resultado = usuariosList.map(usuario => {
                return Object.assign(
                  {},
                  {
                    id: usuario.id,
                    idPersona: usuario.idPersona,
                    username: usuario.username,
                    password: usuario.password,
                    estado: usuario.estado,
                    activo: usuario.activo,
                    primerApellido: usuario.persona.primerApellido,
                    segundoApellido: usuario.persona.segundoApellido,
                    nombres: usuario.persona.nombres,
                    nombreCompleto: `${usuario.persona.nombres} ${usuario.persona.primerApellido} ${usuario.persona.segundoApellido}`,
                }
                )
            });
            return res.status(200).json(resultado);
        });
    });

    router.post('/usuario', (req, res, next) => {

        let val = new validator(req.body, {
            primerApellido:'required',
            segundoApellido: 'required',
            nombres:'required',
            username:'required',
            password:'required'});

        val.check().then(function (matched) {
            if (!matched) {
                return res.status(201).json({
                    success: false,
                    message: val.errors
                });
            } else {
                return servicios.Persona.crear(req.body)
                .then((persona) => {
                    req.body.idPersona = persona.id;
                    req.body.password = require('crypto').createHash('sha256')
                    .update(req.body.password, 'utf-8').digest('hex');
                    return servicios.Usuario.crear(req.body)
                    .then((usuario) => {
                        return res.status(201).json({
                            success: true,
                            data: usuario
                        });
                    })
                })
                .catch(next);
            }
        });

    });

    router.get('/usuario/:id', (req, res, next) => {
        return modelos.Usuario.findOne({
            where: {id: req.params.id},
            include: [
                {model: modelos.Persona, as: 'persona'},
            ]
        }).then(usuario => {
            let resultado = {
                id: usuario.id,
                idPersona: usuario.idPersona,
                username: usuario.username,
                password: usuario.password,
                estado: usuario.estado,
                activo: usuario.activo,
                primerApellido: usuario.persona.primerApellido,
                segundoApellido: usuario.persona.segundoApellido,
                nombres: usuario.persona.nombres,
                nombreCompleto: `${usuario.persona.nombres} ${usuario.persona.primerApellido} ${usuario.persona.segundoApellido}`,
            };
            return res.status(200).json(resultado);
        });
    });


    router.put('/usuario/:id', (req, res, next) => {
        let val;
        if(req.body.checkPassword === 'true') {
           val = new validator(req.body, {
            primerApellido:'required',
            segundoApellido: 'required',
            nombres:'required',
            username:'required',
            password:'required'});
       } else {
            val = new validator(req.body, {
            primerApellido:'required',
            segundoApellido: 'required',
            nombres:'required',
            username:'required'});
        }

        val.check().then(function (matched) {
            if (!matched) {
                return res.status(201).json({
                    success: false,
                    message: val.errors
                });
            } else {
                return servicios.Usuario.actualizar(req.params.id, req.body)
                .then((usuario) => {
                 return servicios.Persona.actualizar(usuario.idPersona, req.body)
                 .then((persona) => {
                    return res.status(201).json({
                            success: true,
                            data: persona
                        });
                })
             })
                .catch(next);
            }
        });

    });

    router.delete('/usuario/:id', (req, res, next) => {
        return servicios.Usuario.actualizar(req.params.id, req.body)
        .then((usuario) => {
            return servicios.Persona.actualizar(usuario.idPersona,req.body)
            .then((persona)=>{
                return res.status(201).json({
                    success:true,
                    data:persona
                });
            })
        })
    });

};
