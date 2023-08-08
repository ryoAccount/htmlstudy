// UserRepository.ts

import { User } from "../domain/User";
import { IUserRepository } from "./interface/IUserRepository";

export class MockUserRepository implements IUserRepository {
  async save(user: User): Promise<number> {
    return 123;
  }
}
