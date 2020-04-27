CREATE DATABASE BD_FACTURACION;
USE BD_FACTURACION;

--Tabla Cliente
CREATE TABLE IF NOT EXISTS CLIENTE(
id_cliente int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria',
nombre varchar(50) NOT NULL COMMENT 'Nombre del cliente',
apellido varchar (50) NOT NULL COMMENT 'Apellido del cliente',
direccion varchar (70) NOT NULL COMMENT 'Direcion del cliente',
telefono int (10) NOT NULL COMMENT 'Telefono del cliente',
email varchar(80) DEFAULT NULL COMMENT 'Email del cliente',
categoria varchar(50) DEFAULT NULL COMMENT 'Categoria del cliente o podria ser categorizacion de algo',
fecha_registro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Es la fecha en la que se esta registrando el cliente' ,
usuario_registro varchar(100) NOT NULL COMMENT 'Guardara el Usuario que registro al cliente',
fecha_modificacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'La fecha que el usuario modifico datos del cliente',
usuario_modificacion varchar(100) DEFAULT NULL COMMENT 'Guardara el Usuario que modifico al cliente',
activo tinyint(1) NOT NULL COMMENT 'Tendra el campo activo o inactivo para cuando se requiera dicho campo',
PRIMARY KEY (id_cliente)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla de CLIENTE' ;

--Creacion de la tbala FACTURA
CREATE TABLE IF NOT EXISTS FACTURA(
num_factura int(11) NOT NULL AUTO_INCREMENT COMMENT 'Clave primaria de la FACTURA',
id_cliente int(11) NOT NULL COMMENT 'Clave primaria de CLIENTE',
fecha timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Es la fecha de realizada la factura' ,
fecha_registro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Es la fecha en la que se esta registrando de la FACTURA' ,
usuario_registro varchar(100) NOT NULL COMMENT 'Guardara el Usuario que registro al FACTURA',
fecha_modificacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'La fecha que el usuario modifico datos de la FACTIRA',
usuario_modificacion varchar(100) DEFAULT NULL COMMENT 'Guardara el Usuario que modifico al FACTURA',
activo tinyint(1) NOT NULL COMMENT 'Tendra el campo activo o inactivo de borrado logico',
PRIMARY KEY (num_factura),
INDEX(id_cliente),
FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id_cliente)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla FACTURA' ;

--Creacion de la tbala PRODUCTO
CREATE TABLE IF NOT EXISTS PRODUCTO(
id_producto int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID de la tabla PRODUCTO',
nombre varchar(50) NOT NULL COMMENT 'Nombre del PRODUCTO',
precio float(7,2) NOT NULL DEFAULT 0.00,
stock int(11) NOT NULL COMMENT 'Cuantos items se encuentran en STOCK',
fecha_registro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Es la fecha en la que se esta registrando del PRODUCTO' ,
usuario_registro varchar(100) NOT NULL COMMENT 'Guardara el Usuario que registro del PRODUCTO',
fecha_modificacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'La fecha que el usuario modifico datos de la PRODUCTO',
usuario_modificacion varchar(100) DEFAULT NULL COMMENT 'Guardara el Usuario que modifico el PRUDUCTO',
activo tinyint(1) NOT NULL COMMENT 'Tendra el campo activo o inactivo de borrado logico',
PRIMARY KEY (id_producto)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla PRODUCTO' ;

--Creacion de la tabla DETALLE
CREATE TABLE IF NOT EXISTS DETALLE(
num_detalle int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID de la tabla detalle', 
id_factura int(11) NOT NULL COMMENT 'Llave foranea de la tabla FACTURA',
id_producto int(11) NOT NULL COMMENT 'Llave foranea de la PRODUCTO',
cantidad int(10) NOT NULL COMMENT 'Cantidad de los productos' ,
precio float(7,2) NOT NULL DEFAULT 0.00,
fecha_registro timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Es la fecha en la que se esta registrando del DETALLE' ,
usuario_registro varchar(100) NOT NULL COMMENT 'Guardara el Usuario que registro del DETALLE',
fecha_modificacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'La fecha que el usuario modifico datos de la DETALLE',
usuario_modificacion varchar(100) DEFAULT NULL COMMENT 'Guardara el Usuario que modifico el DETALLE',
activo tinyint(1) NOT NULL COMMENT 'Tendra el campo activo o inactivo de borrado logico',
PRIMARY KEY (num_detalle),
INDEX(id_factura),
INDEX(id_producto),
FOREIGN KEY (id_factura) REFERENCES FACTURA(num_factura),
FOREIGN KEY (id_producto) REFERENCES PRODUCTO(id_producto)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla DETALLE' ;










