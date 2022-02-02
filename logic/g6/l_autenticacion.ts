import { Op } from "sequelize/dist";
import { funcionario,estudiante } from "../../models/entities";

export const signinEstudiante =async (usuario:string,contrasena:string) => {
    const Estudiante = await estudiante.findAll(
        {where:
            {[Op.or]:{usuario,correo:usuario} ,contrasena}})
    if (Estudiante) {
        return Estudiante;
    }else{
        return null;
    }
}

export const signinFuncionario =async (usuario:string,contrasena:string) => {
    const Funcionario = await funcionario.findAll({where:{usuario,contrasena}})
    if (Funcionario) {
        return Funcionario;
    }else{
        return null;
    }
}