// UserRepository.ts

import { User } from "../domain/User";
import { IUserRepository } from "./interface/IUserRepository";
import mysql from "mysql";

export class UserRDBRepository implements IUserRepository {
  private readonly connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "mydb",
    });
  }

  async save(user: User): Promise<number> {
    try {
      await this.connection.query(
        "INSERT INTO (name, email) VALUES (?, ?)",
        [user.getName(), user.getEmail()]
      );
      console.log("success insert");
      const userId: number = await this.connection.query(
        "SELECT LAST_INSERT_ID()"
      )
      return userId;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      this.connection.release();
    }
  }
}
