import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database';

// 1. Atributos del modelo
interface BoletaAttributes {
  id: number;
  valor: bigint;
  iva: bigint;
  fecha: Date;
}

// 2. Atributos al crear (id lo genera MySQL automáticamente)
type BoletaCreationAttributes = Optional<BoletaAttributes, 'id'>;

// 3. Clase del modelo
class Boleta extends Model<BoletaAttributes, BoletaCreationAttributes> implements BoletaAttributes {
  public id!: number;
  public valor!: bigint;
  public iva!: bigint;
  public fecha!: Date;
}

// 4. Inicialización del modelo
Boleta.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    iva: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'boleta',
    modelName: 'Boleta',
    timestamps: false,
  }
);

export default Boleta;
