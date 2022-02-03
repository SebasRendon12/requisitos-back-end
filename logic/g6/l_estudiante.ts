import { Op } from "sequelize";
import { estudiante } from "../../models/entities";


export const GetEstudiantes = async () => {
    const Estudiante = await estudiante.findAll();
    return Estudiante;
}

export const GetEstudiante = async (id: any) => {
    const Estudiante = await estudiante.findByPk(id);
    if (Estudiante) {
        return Estudiante;
    } else {
        return null;
    }
}

export const UpdateEstudianteFinanciera =async (id:number,datos:any,files:any) => {
    if (!files || Object.keys(files).length ===0) return null
    console.log(files.recibo)
    if (files.recibo){
        datos.path_recibo = files.recibo[0].path
    } if (files.certificado){
        datos.path_certificado = files.certificado[0].path
    } if (files.declaracion){
        datos.path_declaracion = files.declaracion[0].path
    }
    
    const Estudiante = await estudiante.findOne({where:{id}});
    if (Estudiante){
        console.log(datos)
        await Estudiante.set(datos);
        await Estudiante.save();
        return Estudiante;
    }else{
        return null;
    }
}

export const UpdateEstudianteResidencia =async (id:number,datos:any) => {
    
    const Estudiante = await estudiante.findByPk(id);
    if (Estudiante){
        await Estudiante.set(datos);
        await Estudiante.save();
        return Estudiante;
    }else{
        return null;
    }
}

export const CreateEstudiante =async (datos:any) => {
    const { cedula,correo } = datos;
    const Estudiante = await estudiante.findOne({where:{cedula,[Op.or]:{correo}}})
    if (Estudiante){
        return null;
    }else{
        return await estudiante.create(datos);
    }
}