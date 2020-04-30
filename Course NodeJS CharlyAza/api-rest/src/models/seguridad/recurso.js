module.exports = (sequelize, DataTypes) => {

    const Recurso = sequelize.define('Recurso', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idModulo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_modulo'
        },
        esMenu: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'es_menu'
        },
        posicion: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
        titulo: DataTypes.STRING,
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
        tableName: 'seg_recurso',
        timestamps: false
    });

    Recurso.asociar = (modelos) => {

        modelos.Recurso.belongsTo(modelos.Modulo, {
          as: 'modulo',
          foreignKey: {
            name: 'idModulo',
            field: 'id_modulo',
            allowNull: false}
        });

        modelos.Recurso.belongsToMany(modelos.Rol, {
            as: 'roles',
            through: modelos.RolRecurso,
            foreignKey: 'idRecurso',
            otherKey: 'idRol'
        });

    };

    return Recurso;

};