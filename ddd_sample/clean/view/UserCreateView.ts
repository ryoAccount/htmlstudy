import { UserCreateViewModel } from "./model/UserCreateViewModel";

export class UserCreateView {
  constructor() {}

  showUserId(viewModel: UserCreateViewModel) {
    console.log(viewModel.getUserId());
  }
}