import { where } from "sequelize/dist";
import { historia_academica, asignatura } from "../../models/entities";

export const GetAsignaturas = async (id:string) => {
  const asignaturas = await historia_academica.findAll({
    where: {id_estudiante: id},
    include: [{
        model: asignatura,
        required: true
       }]
  });
  return asignaturas;
}