// UserRepository.ts

import { User } from "../domain/User";
import mysql from "mysql";

export class UserRepository {
  private readonly connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "mydb",
    });
  }

  async save(user: User): Promise<void> {
    try {
      await this.connection.query(
        "INSERT INTO (name, email) VALUES (?, ?)",
        [user.getName(), user.getEmail()]
      );
      console.log("success insert");
      return;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      this.connection.release();
    }
  }
}
