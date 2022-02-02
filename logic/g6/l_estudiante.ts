import { Op } from "sequelize";
import { estudiante } from "../../models/entities";


export const GetEstudiantes = async () => {
    const Estudiante = await estudiante.findAll();
    return Estudiante;
}

export const GetEstudiante = async (cedula: any) => {
    const Estudiante = await estudiante.findByPk(cedula);
    if (Estudiante) {
        return Estudiante;
    } else {
        return null;
    }
}

export const UpdateEstudianteFinanciera =async (cedula:number,datos:any,files:any) => {
    if (!files || Object.keys(files).length ===0) return null
    
    if (files.recibo){
        const uploadPathRecibo = __dirname+'/public/'+cedula.toString()+"/"+files.recibo.name;
        files.recibo.mv(uploadPathRecibo, function(err:Error) {
            if (err) return null;
        });
    } if (files.certificado){
        const uploadPathCertificado = __dirname+'/public/'+cedula.toString()+"/"+files.certificado.name
        files.certificado.mv(uploadPathCertificado, (err:Error) => {
            if (err) return null;
        });
    } if (files.declaracion){
        const uploadPathDeclaracion = __dirname+'/public/'+cedula.toString()+"/"+files.declaracion.name
        files.declaracion.mv(uploadPathDeclaracion, (err:Error) => {
            if (err) return null;
        });
    }
    
    const Estudiante = await estudiante.findByPk(cedula);
    if (Estudiante){
        await Estudiante.set(datos);
        await Estudiante.save();
        return Estudiante;
    }else{
        return null;
    }
}

export const UpdateEstudianteResidencia =async (cedula:number,datos:any) => {
    
    const Estudiante = await estudiante.findByPk(cedula);
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