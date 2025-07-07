import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database';
import Boleta from './boleta';

// Atributos de Boleta_detalle
interface BoletaDetalleAttributes {
  id: number;
  name_producto: string;
  valor_unitario: bigint;
  cantida: number;
  id_boleta: number;
}

// Atributos opcionales al crear
type BoletaDetalleCreation = Optional<BoletaDetalleAttributes, 'id'>;

// Clase del modelo
class BoletaDetalle extends Model<BoletaDetalleAttributes, BoletaDetalleCreation> implements BoletaDetalleAttributes {
  public id!: number;
  public name_producto!: string;
  public valor_unitario!: bigint;
  public cantida!: number;
  public id_boleta!: number;
}

// Inicialización
BoletaDetalle.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name_producto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    valor_unitario: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    cantida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_boleta: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'Boleta_detalle',
    modelName: 'BoletaDetalle',
    timestamps: false,
  }
);

// Relaciones
BoletaDetalle.belongsTo(Boleta, { foreignKey: 'id_boleta', as: 'boleta' });
Boleta.hasMany(BoletaDetalle, { foreignKey: 'id_boleta', as: 'detalles' });

export default BoletaDetalle;