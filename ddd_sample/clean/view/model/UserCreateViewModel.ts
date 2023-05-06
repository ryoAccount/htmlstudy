export class UserCreateViewModel {
  private readonly userId: number;

  constructor(userId: number) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}