import { sesion } from "../../models/entities";

export const GetSession = async (id: number) => {
  const session = await sesion.findOne({
    where: {
      usuario_id: id
    },
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