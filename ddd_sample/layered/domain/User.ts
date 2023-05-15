import { UserRepository } from "../infrastructure/UserRepository";

export class User {
  private readonly id?: number;
  private readonly name: string;
  private readonly email: string;

  constructor(name: string, email: string) {
    if (!this.isValidName(name)) {
      throw new Error("Invalid name format");
    }

    if (!this.isValidEmail(email)) {
      throw new Error("Invalid email format");
    }

    this.name = name;
    this.email = email;
  }

  private isValidName(name: string): boolean {
    if (!name) {
      console.log("Invalid argument: name cannot be null or empty");
      return false;
    }
    if (name.length > 100) {
      console.log("Invalid name length");
      return false;
    }
    return true;
  }

  private isValidEmail(email: string): boolean {
    if (!email) {
      console.log("Invalid argument: email cannot be null or empty");
      return false;
    }

    // RFC5321に準拠する正規表現でバリデーションチェック
    const regexRFC5321 = new RegExp(
      /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    );
    if (!regexRFC5321.test(email)) {
      console.log("Invalid email address at RFC5321");
      return false;
    }

    // RFC5322に準拠する正規表現でバリデーションチェック
    const regexRFC5322 = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
    );
    if (!regexRFC5322.test(email)) {
      console.log("Invalid email address at RFC5322");
      return false;
    }

    return true;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public insert(): Promise<number> {
    return new UserRepository().save(this);
  }
}
