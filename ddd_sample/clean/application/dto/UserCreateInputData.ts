export class UserCreateInputData {
  private readonly name: string;
  private readonly email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}