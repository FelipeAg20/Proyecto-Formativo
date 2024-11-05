import { hash } from "../helpers/hash.js";
import { modelRegister } from "../model/modelRegister.js";
import { modelLogin } from "../model/modelLogin.js";

export class serviceUser {
  static async hashRegister(user) {
    console.log(user.contraseña);
    
    user.contraseña = await hash(user.contraseña);
    return modelRegister(user);
  }
  static async login(user) {
    return modelLogin(user);
  }
}
