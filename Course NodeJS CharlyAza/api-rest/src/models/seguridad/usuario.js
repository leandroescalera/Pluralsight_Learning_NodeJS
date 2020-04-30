module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idPersona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_persona'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: DataTypes.STRING,
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'estado'
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_registro'
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
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
        tableName: 'seg_usuario',
        timestamps: false
    });

    Usuario.asociar = (modelos) => {

        modelos.Usuario.belongsTo(modelos.Persona, {
          as: 'persona',
          foreignKey: {
            name: 'idPersona',
            field: 'id_persona',
            allowNull: false}
        });

        modelos.Usuario.belongsToMany(modelos.Rol, {
            as: 'roles',
            through: modelos.UsuarioRol,
            foreignKey: 'idUsuario',
            otherKey: 'idRol'
        });

        modelos.Usuario.hasMany(modelos.UsuarioPermiso, {
          as: 'permisos',
          foreignKey: 'idUsuario'
        });

    };

    return Usuario;

};