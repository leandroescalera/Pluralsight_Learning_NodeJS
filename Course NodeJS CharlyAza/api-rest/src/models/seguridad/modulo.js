module.exports = (sequelize, DataTypes) => {

    const Modulo = sequelize.define('Modulo', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idAplicacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_aplicacion'
        },
        posicion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
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
        tableName: 'seg_modulo',
        timestamps: false
    });

    Modulo.asociar = (modelos) => {

        modelos.Modulo.belongsTo(modelos.Aplicacion, {
          as: 'aplicacion',
          foreignKey: {
            name: 'idAplicacion',
            field: 'id_aplicacion',
            allowNull: false}
        });

        modelos.Modulo.hasMany(modelos.Recurso, {
          as: 'recursos',
          foreignKey: 'idModulo',
      });

    };

    return Modulo;

};