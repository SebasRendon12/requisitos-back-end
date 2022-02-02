import {
  GetUsers,
  GetUser,
  SaveUser,
  EditUser,
  DeleteUser
} from "./l-user";
import { DeleteSessions, GetSession, SaveSession } from "./g1/l_session";

//Grupo 6
import { signinEstudiante,signinFuncionario } from "./g6/l_autenticacion";
import { GetEstudiante,GetEstudiantes,
  CreateEstudiante,UpdateEstudianteFinanciera,UpdateEstudianteResidencia } from "./g6/l_estudiante"
import { GetFucionario,GetFucionarios,UpdateFuncionario } from "./g6/l_funcionario";
import { GetApoyoSocioEconomico,GetApoyoSocioEconomicos,UpdateApoyoSocioEconomico,
    AsignarApoyoSocioEconomicoEstudiante,QuitarApoyoSocioEconomicoEstudiante
    ,CreateApoyoSocioEconomico } from "./g6/l_apoyo_socioeconomico"
//Grupo 6

export {

  //---------------G1---------------------
  GetSession,
  SaveSession,
  DeleteSessions,
  //---------------G1---------------------


  //---------------G2---------------------

  //---------------G2---------------------


  //---------------G3---------------------

  //---------------G3---------------------


  //---------------G6---------------------
  signinEstudiante,
  signinFuncionario,

  GetEstudiante,
  GetEstudiantes,
  UpdateEstudianteFinanciera,
  UpdateEstudianteResidencia,
  CreateEstudiante,

  GetFucionario,
  GetFucionarios,
  UpdateFuncionario,

  GetApoyoSocioEconomico,
  GetApoyoSocioEconomicos,
  CreateApoyoSocioEconomico,
  UpdateApoyoSocioEconomico,
  AsignarApoyoSocioEconomicoEstudiante,
  QuitarApoyoSocioEconomicoEstudiante,
  //---------------G6---------------------


  //---------------G7---------------------

  //---------------G7---------------------


  //---------------G8---------------------

  //---------------G8---------------------


  // User Method
  GetUsers,
  GetUser,
  SaveUser,
  EditUser,
  DeleteUser,

  // Other
};