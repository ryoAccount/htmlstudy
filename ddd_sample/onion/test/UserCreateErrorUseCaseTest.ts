import { test, expect } from "jest";
import { UserCreateUseCase } from "../application/UserCreateUseCase";
// import { MockUserRepository } from "../infrastructure/MockUserRepository";
import { User } from "../domain/User";
import { IUserRepository } from "../infrastructure/interface/IUserRepository";


class MockUserRepository implements IUserRepository {
  async save(user: User): Promise<number> {
    throw new Error("error");
  }
}
test("CaseXXX", () => {
  // prepare
  const userRepository = new MockUserRepository();
  const userCreateUseCase = new UserCreateUseCase(userRepository);
  // execute
  expect(() => {
    userCreateUseCase.execute("test", "xxx@leverages.jp");
  }).toThrow();
})