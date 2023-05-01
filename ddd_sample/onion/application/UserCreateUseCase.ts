import { User } from "../domain/User";
import { IUserRepository } from "../infrastructure/interface/IUserRepository";

export class UserCreateUseCase {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(name: string, email: string): Promise<void> {
    try {
      const user = new User(name, email);
      await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }
}
