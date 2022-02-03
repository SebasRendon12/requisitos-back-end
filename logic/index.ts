import {
  GetUsers,
  GetUser,
  SaveUser,
  EditUser,
  DeleteUser
} from "./l-user";
import { DeleteSessions, GetSession, SaveSession } from "./g1/l_session";
import { GetAdmittedByUser, GetFunctionaryByUser, GetStudentByUser } from "./g1/l_usuario";
import { SignIn } from "./g1/l_login";

export {

  //---------------G1---------------------
  GetSession,
  SaveSession,
  DeleteSessions,

  GetStudentByUser,
  GetAdmittedByUser,
  GetFunctionaryByUser,

  SignIn,
  //---------------G1---------------------


  //---------------G2---------------------

  //---------------G2---------------------


  //---------------G3---------------------

  //---------------G3---------------------


  //---------------G6---------------------

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