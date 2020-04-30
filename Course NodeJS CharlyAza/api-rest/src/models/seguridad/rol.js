module.exports = (sequelize, DataTypes) => {

    const Rol = sequelize.define('Rol', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idAplicacion: {
            type: DataTypes.INTEGER,
            field: 'id_aplicacion'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: DataTypes.STRING,
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
        tableName: 'seg_rol',
        timestamps: false
    });

    Rol.asociar = (modelos) => {

        modelos.Rol.belongsTo(modelos.Aplicacion, {
          as: 'aplicacion',
          foreignKey: {
            name: 'idAplicacion',
            field: 'id_aplicacion',
            allowNull: false}
        });

        modelos.Rol.belongsToMany(modelos.Recurso, {
            as: 'recursos',
            through: modelos.RolRecurso,
            foreignKey: 'idRol',
            otherKey: 'idRecurso'
        });

        modelos.Rol.belongsToMany(modelos.Usuario, {
            as: 'usuarios',
            through: modelos.UsuarioRol,
            foreignKey: 'idRol',
            otherKey: 'idUsuario'
        });

    };

    return Rol;

};
