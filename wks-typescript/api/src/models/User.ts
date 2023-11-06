import { Model, Column, Table, CreatedAt, UpdatedAt } from "sequelize-typescript";

// Definición del modelo de usuario
@Table
export class User extends Model<User> {
    // Columna "name" que almacenará el nombre del usuario
    @Column
    name!: string;

    // Columna "lastName" que almacenará el apellido del usuario
    @Column
    lastName!: string; 

    // Columna "createdAt" para registrar la fecha de creación del usuario
    @CreatedAt
    @Column
    createdAt!: Date;

    // Columna "updatedAt" para registrar la fecha de actualización del usuario
    @UpdatedAt
    @Column
    updatedAt!: Date;
}
