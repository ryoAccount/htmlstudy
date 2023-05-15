import { UserCreateInputData } from "./../dto/UserCreateInputData";

export interface IUserCreateUseCase {
  execute(inputData: UserCreateInputData): Promise<void>
}