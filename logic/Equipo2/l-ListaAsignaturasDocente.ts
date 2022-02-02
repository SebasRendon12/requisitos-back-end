import { grupo, asignatura } from "../../models/entities";

export const GetAsignaturas = async (id: string) => {
  
  asignatura.hasMany(grupo, { foreignKey: 'codigo' })
  grupo.belongsTo(asignatura, { foreignKey: 'codigo_asignatura' })

  const asignaturasDocente = await grupo.findAll({
    attributes: ['codigo_asignatura'],
    where: { id_docente: id },
    include: [{
      attributes: ['nombre'],
      model: asignatura,
      required: true
    }],
    group: 'codigo_asignatura',
  });
  return asignaturasDocente;
}