import { where } from "sequelize/dist";
import { historia_academica, asignatura } from "../../models/entities";

export const GetAsignaturas = async (id: string, periodo: string) => {
  
  asignatura.hasMany(historia_academica, { foreignKey: 'codigo' })
  historia_academica.belongsTo(asignatura, { foreignKey: 'codigo_asignatura' })

  const asignaturasHistoria = await historia_academica.findAll({
    attributes: ['codigo_asignatura', 'calificacion', 'estado_asignatura'],
    where: { id_estudiante: id, periodo: periodo },
    include: [{
      attributes: ['nombre'],
      model: asignatura,
      required: true
    }]
  });
  return asignaturasHistoria;
}