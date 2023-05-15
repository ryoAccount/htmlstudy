import { UserCreateOutputData } from "../application/dto/UserCreateOutputData";
import { IUserCreatePresenter } from "./interface/IUserCreatePresenter";
import { UserCreateViewModel } from "./../view/model/UserCreateViewModel";
import { UserCreateView } from "./../view/UserCreateView";

export class UserCreatePresenter implements IUserCreatePresenter {
  output(outputData: UserCreateOutputData) {
    const userId = outputData.getUserId();
    const viewModel = new UserCreateViewModel(userId);
    new UserCreateView().showUserId(viewModel);
  }
}