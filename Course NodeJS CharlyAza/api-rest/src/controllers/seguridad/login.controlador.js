module.exports = (router, modelos) => {

    router.post('/login', (req, res, next) => {
        const hashPassword = require('crypto').createHash('sha256')
                .update(req.body.password, 'utf-8').digest('hex');
        return modelos.Usuario.findOne({
            where: {username: req.body.username, password: hashPassword, activo: true}
        }).then(usuario => {
            let resultado = {};
            if(usuario) {
                resultado.success = true;
                resultado.data = {
                    username: usuario.username,
                    idUsuario: usuario.id
                };
            } else {
                resultado = {
                    success: false,
                    message: 'Usuario y/o Contraseña no válidos.'
                };
            }
            return res.status(200).json(resultado);
        });

    });

    // obtiene todos los permisos del usuario (modulos y recursos)
    router.put('/login', (req, res, next) => {
        return modelos.Usuario.findOne({
            where: {id: req.body.idUsuario, activo: true},
            include: [
                {model: modelos.UsuarioPermiso, as: 'permisos'},
                {model: modelos.Persona, as: 'persona'},
            ]
        }).then(usuario => {

            let resultado = {};
            if(usuario) {
                resultado.success = true;
                resultado.data = {
                    username: usuario.username,
                    idUsuario: usuario.id,
                    idPersona: usuario.persona.id,
                    primerApellido: usuario.persona.primerApellido,
                    segundoApellido: usuario.persona.segundoApellido,
                    nombres: usuario.persona.nombres,
                    nombreCompleto: `${usuario.persona.nombres} ${usuario.persona.primerApellido} ${usuario.persona.segundoApellido ? usuario.persona.segundoApellido : ''}`,
                    modulos: usuario.permisos.map(permiso => {
                        return Object.assign(
                          {},
                          {
                            posicionModulo: permiso.posicionModulo,
                            modulo: permiso.modulo,
                            posicionRecurso: permiso.posicionRecurso,
                            recurso: permiso.recurso,
                            titulo: permiso.titulo,
                            esMenu: permiso.esMenu,
                            puedeCrear: permiso.creacion,
                            puedeModificar: permiso.modificacion,
                            puedeEliminar: permiso.eliminacion
                          }
                        )
                    })
                };
            } else {
                resultado = {
                    success: false,
                    message: 'Usuario no válido.'
                };
            }
            return res.status(200).json(resultado);
        });

    });

};