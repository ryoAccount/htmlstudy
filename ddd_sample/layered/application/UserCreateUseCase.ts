import { User } from "../domain/User";
import { UserRepository } from "../infrastructure/UserRepository";

export class UserCreateUseCase {
  constructor() {}

  async execute(name: string, email: string): Promise<number> {
    try {
      const user = new User(name, email);
      return await new UserRepository().save(user);
    } catch (error) {
      throw error;
    }
  }
}
