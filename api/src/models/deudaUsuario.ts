import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database';
import UserDetalle from './usuario'; // asegúrate que el archivo se llame correctamente

// Atributos
interface DeudaDetalleAttributes {
  id: number;
  producto: string;
  valorU: number;
  fecha: Date;
  id_usuario: number;
}

// Atributos opcionales
type DeudaDetalleCreation = Optional<DeudaDetalleAttributes, 'id'>;

// Modelo
class DeudaDetalle extends Model<DeudaDetalleAttributes, DeudaDetalleCreation> implements DeudaDetalleAttributes {
  public id!: number;
  public producto!: string;
  public valorU!: number;
  public fecha!: Date;
  public id_usuario!: number;
}

// Inicialización
DeudaDetalle.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    producto: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    valorU: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'deuda_usuario',
    modelName: 'DeudaDetalle',
    timestamps: false,
  }
);

// Asociaciones
DeudaDetalle.belongsTo(UserDetalle, { foreignKey: 'id_usuario', as: 'usuario' });
UserDetalle.hasMany(DeudaDetalle, { foreignKey: 'id_usuario', as: 'deudas' });

export default DeudaDetalle;
