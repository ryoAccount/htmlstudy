// UserRepository.ts

import { User } from "../domain/User";
import { IUserRepository } from "./interface/IUserRepository";
import { createClient } from "redis";

export class UserInMemoryDBRepository implements IUserRepository {
  private readonly client;

  constructor() {
    this.client = createClient();
  }

  async save(user: User): Promise<number> {
    try {
      await this.client.connect();
      await this.client.set("dummy", {
        "id": 123,
        "name": user.getName(),
        "email": user.getEmail()
      });
      console.log("success set");
      return 123;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      await this.client.disconnect();
    }
  }
}
