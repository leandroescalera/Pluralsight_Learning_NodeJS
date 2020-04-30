module.exports = (sequelize, DataTypes) => {

    const UsuarioRol = sequelize.define('UsuarioRol', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            field: 'id_usuario'
        },
        idRol: {
            type: DataTypes.INTEGER,
            field: 'id_rol'
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
        tableName: 'seg_usuario_rol',
        timestamps: false
    });

    return UsuarioRol;

};