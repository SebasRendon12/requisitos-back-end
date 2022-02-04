import { actividad } from "../../models/entities";

export const GetActividades = async (codigo_asignatura: string) => {

  const actividades = await actividad.findAll({
    attributes: ['id','nombre', 'porcentaje'],
    where: { codigo_asignatura: codigo_asignatura },
    group: 'nombre',
    order: [['id', 'ASC']]
  });
  return actividades;
}

/* export const GetCalificaciones = async (id_grupo: number) => {
  
    usuario.hasMany(calificacion, { foreignKey: 'identificacion' })
    actividad.hasMany(calificacion, { foreignKey: 'id' })

    calificacion.belongsTo(actividad, { foreignKey: 'id_actividad' })
    calificacion.belongsTo(usuario, { foreignKey: 'id_estudiante' })

  const asignaturasHistoria = await usuario.findAll({
    attributes: ['identificacion', 'nombre_completo'],
    where: { perfil: 'estudiante' },
    include: [{
      attributes: ['calificacion'],
      where: { id_grupo: id_grupo },
      model: calificacion,
      required: true,
      include: [{
        attributes: ['nombre', 'porcentaje'],
        model: actividad,
        required: true
        
      }]
    }]
  });
  return asignaturasHistoria;
} */

/* export var GetCalificaciones = async function(DB:any, response:any) {
    DB.connect(function (err:any) {
        if (err) {
            console.error('error connecting:' + err.stack)
        }
        console.log('connected as id ' + DB.threadId);
    })
    var query1 = 'SELECT usuario.identificacion, usuario.nombre_completo, calificacion.calificacion, actividad.nombre, actividad.porcentaje FROM usuario INNER JOIN calificacion ON usuario.identificacion = calificacion.id_estudiante INNER JOIN actividad ON calificacion.id_actividad = actividad.id WHERE calificacion.id_grupo = 1;'
    var query2 = "select usuario.identificacion, usuario.nombre_completo, GROUP_CONCAT(calificacion.calificacion SEPARATOR ', ') FROM usuario INNER JOIN calificacion ON usuario.identificacion = calificacion.id_estudiante WHERE calificacion.id_grupo = "+ id_" GROUP BY usuario.identificacion";
    DB.query(query2,
     function (error: any, results: any, fields: any) {
        if (error) throw error;
        console.log('The solution is:', results);
        response.end(JSON.stringify(results));
    });
    DB.end();
  }
 */