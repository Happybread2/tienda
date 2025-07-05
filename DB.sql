CREATE TABLE `boleta`(
    `id` BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `valor` BIGINT NOT NULL,
    `iva` BIGINT NOT NULL,
    `fecha` DATETIME NOT NULL
);
CREATE TABLE `Boleta_detalle`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name_producto` VARCHAR(255) NOT NULL,
    `valor_unitario` BIGINT NOT NULL,
    `cantida` INT NOT NULL,
    `id_boleta` BIGINT NOT NULL
);
CREATE TABLE `usuario`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `apellido` VARCHAR(255) NOT NULL,
    `deuda` BIGINT NOT NULL
);
CREATE TABLE `deuda_usuario`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `producto` VARCHAR(255) NOT NULL,
    `valor_unitario` BIGINT NOT NULL,
    `fecha` DATE NOT NULL,
    `id_usuario` BIGINT NOT NULL
);
CREATE TABLE `compras`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `fecha` DATE NOT NULL,
    `total` BIGINT NOT NULL,
    `proveedor` VARCHAR(255) NOT NULL
);
CREATE TABLE `Productos`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `producto` VARCHAR(255) NOT NULL,
    `detalles` VARCHAR(255) NOT NULL,
    `stock` BIGINT NOT NULL,
    `precio_unitario` BIGINT NOT NULL,
    `descuento` INT NOT NULL
);
CREATE TABLE `pago_deuda`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_usuario` BIGINT NOT NULL,
    `pago` BIGINT NOT NULL,
    `fecha` DATETIME NOT NULL
);
CREATE TABLE `detalle_compra`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_compra` BIGINT NOT NULL,
    `id_producto` BIGINT NOT NULL,
    `cantidad` BIGINT NOT NULL,
    `precio_uni` BIGINT NOT NULL
);
ALTER TABLE
    `Boleta_detalle` ADD CONSTRAINT `boleta_detalle_id_boleta_foreign` FOREIGN KEY(`id_boleta`) REFERENCES `boleta`(`id`);
ALTER TABLE
    `detalle_compra` ADD CONSTRAINT `detalle_compra_id_producto_foreign` FOREIGN KEY(`id_producto`) REFERENCES `Productos`(`id`);
ALTER TABLE
    `detalle_compra` ADD CONSTRAINT `detalle_compra_id_compra_foreign` FOREIGN KEY(`id_compra`) REFERENCES `compras`(`id`);
ALTER TABLE
    `pago_deuda` ADD CONSTRAINT `pago_deuda_id_foreign` FOREIGN KEY(`id`) REFERENCES `usuario`(`id`);
ALTER TABLE
    `deuda_usuario` ADD CONSTRAINT `deuda_usuario_id_usuario_foreign` FOREIGN KEY(`id_usuario`) REFERENCES `usuario`(`id`);