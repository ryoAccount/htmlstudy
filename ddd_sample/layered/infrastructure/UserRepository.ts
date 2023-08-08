// UserRepository.ts

import { User } from "../domain/User";
import mysql from "mysql";

export class UserRepository {
  private readonly connection: mysql.Connection;

  async save(user: User): Promise<number> {
    try {
      await this.connection.query(
        "INSERT INTO (name, email) VALUES (?, ?)",
        [user.getName(), user.getEmail()]
      );
      return await this.connection.query(
        "SELECT LAST_INSERT_ID()"
      );
    } catch (error) {
      throw error;
    }
  }
}
