export class UserCreateOutputData {
  private readonly userId: number;

  constructor(userId) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}