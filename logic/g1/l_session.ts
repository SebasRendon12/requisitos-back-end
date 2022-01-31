import { sesion, usuario } from "../../models/entities";

export const GetSession = async (id: number) => {

  usuario.hasMany(sesion, { foreignKey: 'usuario_id' });
  sesion.belongsTo(usuario, { foreignKey: 'usuario_id' });

  const session = await sesion.findOne({
    where: {
      usuario_id: id
    },
    include: [usuario],
    order: [
      ['fecha', 'DESC'],
    ],
  });
  if (session) {
    return session;
  } else {
    return null;
  }
}

export const SaveSession = async (body: any) => {
  try {
    await DeleteSessions(body.usuario_id);
    const entity = {
      fecha: body.fecha,
      usuario_id: body.usuario_id
    }
    const res = sesion.build(entity);
    await res.save();
    return res;
  } catch (error) {
    throw (error);
  }
}

export const DeleteSessions = async (usuario_id: number) => {
  try {
    const session = await sesion.destroy({
      where: {
        usuario_id: usuario_id
      }
    });
    if (session) {
      return session;
    } else {
      return null;
    }
  } catch (error) {
    return false;
  }
}

