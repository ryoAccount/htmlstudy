import { User } from "../domain/User";

export class UserCreateUseCase {
  constructor() {}

  async execute(name: string, email: string): Promise<number> {
    try {
      const user = new User(name, email);
      return await user.insert();
    } catch (error) {
      throw error;
    }
  }
}
