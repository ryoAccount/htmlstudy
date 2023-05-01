// UserRepository.ts

import { User } from "../domain/User";
import { IUserRepository } from "./interface/IUserRepository";
import { createClient } from "redis";

export class UserInMemoryDBRepository implements IUserRepository {
  private readonly client;

  constructor() {
    this.client = createClient();
  }

  async save(user: User): Promise<void> {
    try {
      await this.client.connect();
      await this.client.set("key", {
        "name": user.getName(),
        "email": user.getEmail()
      });
      console.log("success set");
      return;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      await this.client.disconnect();
    }
  }
}
