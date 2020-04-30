module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        primerApellido: {
            type: DataTypes.STRING,
            field: 'primer_apellido'
        },
        segundoApellido: {
            type: DataTypes.STRING,
            field: 'segundo_apellido'
        },
        nombres: DataTypes.STRING,
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_registro'
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'usuario_registro'
        },
        fechaModificacion: {
            type: DataTypes.DATE,
            field: 'fecha_modificacion'
        },
        usuarioModificacion: {
            type: DataTypes.STRING,
            field: 'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN

    }, {
        //schema:'oei',
        tableName: 'seg_persona',
        timestamp: false

    });

    Persona.asociar = (modelos) => {

        modelos.Persona.hasOne(modelos.Usuario, {
          as: 'usuario',
          foreignKey: 'idPersona',
        });

        modelos.Persona.hasOne(modelos.Locutor, {
            as: 'locutor',
            foreignKey: 'idPersona',
        });

    };

    return Persona;

};