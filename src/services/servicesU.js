import { hash } from "../helpers/hash";
import { modelRegister } from "../model/modelRegister";
import { modelLogin } from "../model/modelLogin";

export class serviceUser {
  static async hashRegister(user) {
    user.pass = await hash(user.pass);
    return modelRegister(user);
  }
  static async login(user) {
    return modelLogin(user);
  }
}
