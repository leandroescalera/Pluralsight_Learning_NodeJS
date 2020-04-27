module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {

        num_factura: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
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
        //schema:'oei',
        tableName: 'factura',
        timestamp: false

    });

    return Factura;
};