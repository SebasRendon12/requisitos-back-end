import { funcionario } from "../../models/entities";


export const GetFucionarios = async () => {
    const funcionarios = await funcionario.findAll();
    return funcionarios;
}

export const GetFucionario = async (cedula: number) => {
    const Funcionario = await funcionario.findByPk(cedula)
    if (Funcionario) {
        return Funcionario;
    } else {
        return null;
    }
}

export const UpdateFuncionario =async (cedula:number,datos:object) => {
    const Funcionario = await funcionario.findByPk(cedula)
    if (Funcionario){
        await Funcionario.set(datos);
        await Funcionario.save();
        return Funcionario;
    }else{
        return null;
    }
}