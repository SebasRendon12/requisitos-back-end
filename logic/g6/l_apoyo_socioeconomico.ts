import { apoyo_socioeconomico,apoyo_socioeconomico_estudiante,estudiante } from "../../models/entities";


export const GetApoyoSocioEconomicos = async () => {
    const apoyos = await apoyo_socioeconomico.findAll();
    return apoyos;
}

export const GetApoyoSocioEconomico = async (id_apoyo: number) => {
    const apoyo = await apoyo_socioeconomico.findByPk(id_apoyo)
    if (apoyo) {
        return apoyo;
    } else {
        return null;
    }
}

export const UpdateApoyoSocioEconomico =async (id_apoyo:number,datos:object) => {
    const apoyo = await apoyo_socioeconomico.findByPk(id_apoyo)
    if (apoyo){
        await apoyo.set(datos);
        await apoyo.save();
        return apoyo;
    }else{
        return null;
    }
}

export const CreateApoyoSocioEconomico =async (datos:any) => {
    const { nombre_apoyo } = datos
    const apoyo = await apoyo_socioeconomico.findAll({where:{apoyo_socioeconomico:nombre_apoyo}})
    if (apoyo){
        return null;
    }else{
        return await apoyo_socioeconomico.create({apoyo_socioeconomico:nombre_apoyo,estado:true})
    }
}

export const AsignarApoyoSocioEconomicoEstudiante =async (id_apoyo:number,cedula:number,id_funcionario:number) => {
    const apoyo_esdudiante = await apoyo_socioeconomico_estudiante.findAll(
        {where:{ id_apoyo,cedula }})
    if (apoyo_esdudiante) return null;
    var date = new Date().toLocaleDateString();
    return await apoyo_socioeconomico_estudiante.create(
        {id_apoyo,cedula,estado:true,id_funcionario,date}
    )
}

export const QuitarApoyoSocioEconomicoEstudiante =async (id_apoyo:number,cedula:number) => {
    const apoyo_esdudiante = await apoyo_socioeconomico_estudiante.findOne(
        {where:{ id_apoyo,cedula }})
    if (apoyo_esdudiante) {
        return await apoyo_esdudiante.destroy();
    };
    return null
}