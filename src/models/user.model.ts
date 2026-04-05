import { randomInt } from "node:crypto";

class UserModel {
  private _id: Number;

  constructor(
    private _name: string,
    private _login: string,
    private _password: string
  ) {}

  get id() {
    return this._id;
  }

  set id(id: Number) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) 
      throw new Error("The name must be longer than 3 characters.");

    if (name.length > 30) 
      throw new Error("The name must be lower than 30 characters.");

    this._name = name;
  }

  get login() {
    return this._login;
  }

  set login(login: string) {
    if (login.length < 3) 
      throw new Error("The login must be longer than 3 characters.");

    this._login = login;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}

export { UserModel };
