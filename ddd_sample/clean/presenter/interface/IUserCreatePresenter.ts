import { UserCreateOutputData } from "../../application/dto/UserCreateOutputData";

export interface IUserCreatePresenter {
  output(outputData: UserCreateOutputData): void
}