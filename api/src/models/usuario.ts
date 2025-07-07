import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database';

// Atributos del modelo
interface UserDetalleAttributes {
  id           : number;
  name_user    : string;
  subname_user : string;
  deuda        : number;
}

// Atributos opcionales al crear
type UserDetalleCreation = Optional<UserDetalleAttributes, 'id'>;

// Clase del modelo
class UserDetalle extends Model<UserDetalleAttributes, UserDetalleCreation> implements UserDetalleAttributes {
  public id!: number;
  public name_user!: string;
  public subname_user!: string;
  public deuda!: number;
}

// Inicialización
UserDetalle.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name_user: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    subname_user: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    deuda: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'usuario',     // nombre de la tabla
    modelName: 'UserDetalle', // nombre del codigo
    timestamps: false,
  }
);

export default UserDetalle;
