import {
  getusers,
  getuser,
  saveuser,
  edituser,
  deleteuser
} from "./c-user";
import { signIn } from "./g1/c_login";
import { enableReceipts, getPeriod } from "./g1/c_receipts";
import { saveSessionController, getSesionController, deleteSesionController } from "./g1/c_session";
import { getAdmittedByUser, getFunctionaryByUser, getStudentByUser } from "./g1/c_usuario";

export {
  //---------------G1---------------------
  saveSessionController,
  getSesionController,
  deleteSesionController,

  getStudentByUser,
  getAdmittedByUser,
  getFunctionaryByUser,

  signIn,

  enableReceipts,
  getPeriod,
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


  // Controller Users
  getusers,
  getuser,
  saveuser,
  edituser,
  deleteuser
};