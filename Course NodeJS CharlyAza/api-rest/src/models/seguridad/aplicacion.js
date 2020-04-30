module.exports = (sequelize, DataTypes) => {

    const Aplicacion = sequelize.define('Aplicacion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nombreCorto: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nombre_corto'
        },
        nombreCompleto: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nombre_completo'
        },
        alias: DataTypes.STRING,
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
        tableName: 'seg_aplicacion',
        timestamps: false
    });

    Aplicacion.asociar = (modelos) => {

        modelos.Aplicacion.hasMany(modelos.Rol, {
            as: 'roles',
            foreignKey: 'idAplicacion',
        });

        modelos.Aplicacion.hasMany(modelos.Modulo, {
            as: 'modulos',
            foreignKey: 'idAplicacion',
        });

        modelos.Aplicacion.hasMany(modelos.Palabra, {
            as: 'palabra',
            foreignKey: 'idAplicacion',
        });

    };

    return Aplicacion;

};
