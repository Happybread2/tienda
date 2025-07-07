import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database';

// 1. Atributos del modelo
interface CompraAttributes {
  id        : number;
  fecha     : Date;
  total     : number;
  proveedor : string;
}

// 2. Atributos al crear (id lo genera MySQL automáticamente)
type CompraCreationAttributes = Optional<CompraAttributes, 'id'>;

// 3. Clase del modelo
class Compra extends Model<CompraAttributes, CompraCreationAttributes> implements CompraAttributes {
  public id!: number;
  public fecha!: Date;
  public total!: number;
  public proveedor!: string;
}

// 4. Inicialización del modelo
Compra.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    proveedor: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'compras',
    modelName: 'Compra',
    timestamps: false,
  }
);

export default Compra;
