module.exports = (sequelize, DataTypes) => {

    const UsuarioPermiso = sequelize.define('UsuarioPermiso', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_usuario'
        },
        modulo: DataTypes.STRING,
        posicionModulo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'posicion_modulo'
        },
        recurso: DataTypes.STRING,
        posicionRecurso: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'posicion_recurso'
        },
        titulo: DataTypes.STRING,
        esMenu: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'es_menu'
        },
        lectura: DataTypes.BOOLEAN,
        creacion: DataTypes.BOOLEAN,
        modificacion: DataTypes.BOOLEAN,
        eliminacion: DataTypes.BOOLEAN,
    }, {
        tableName: 'seg_usuario_permiso',
        timestamps: false
    });

    UsuarioPermiso.asociar = (modelos) => {

        modelos.UsuarioPermiso.belongsTo(modelos.Usuario, {
          as: 'usuario',
          foreignKey: {
            name: 'idUsuario',
            field: 'id_usuario',
            allowNull: false}
        });

    };

    return UsuarioPermiso;

};