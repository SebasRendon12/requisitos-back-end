import { periodo_academico } from "../../models/entities";


export const EnableReceipts = async () => {
  var period = await periodo_academico.findOne({
    where: {
      anno: 2021,
      periodo: 2
    }
  });
  console.log(period);
  if (period) {
    const entity = {
      numero: 2,
      anno: 2021,
      periodo: 2,
      recibos_de_pago_habilitados: true
    }
    await period.update(entity);
  } else {
    const entity = {
      numero: 2,
      anno: 2021,
      periodo: 2,
      recibos_de_pago_habilitados: true
    }
    const res = periodo_academico.build(entity);
    await res.save();
  }
  period = await periodo_academico.findOne({
    where: {
      anno: 2021,
      periodo: 2
    }
  });
  return period;
}

export const GetPeriod = async () => {
  console.log('2');
  var period = await periodo_academico.findOne({
    where: {
      anno: 2021,
      periodo: 2
    }
  });
  if (period == null) {
    const entity = {
      numero: 2,
      anno: 2021,
      periodo: 2,
      recibos_de_pago_habilitados: false
    }
    const res = periodo_academico.build(entity);
    await res.save();
  }
  period = await periodo_academico.findOne({
    where: {
      anno: 2021,
      periodo: 2
    }
  });
  return period;
}