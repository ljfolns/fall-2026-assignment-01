type UserAccount = {
  id: string,
  createdAt: Date,
  email: string,
  passwordHash: string | undefined,
  profile: {
    bio: string,
    avatarUrl: string
  }
};

export class UserRegistry {
  private register: UserAccount[] = [];

  public registerUser(
    data: Omit<UserAccount, 'id' | 'createdAt'>,
  ): UserAccount {
    const user: UserAccount = {
      id: Date.now().toString(),
      createdAt: new Date(Date.now()),
      email: data.email,
      passwordHash: data.passwordHash,
      profile: data.profile
    };
    this.register.push(user);
    return user;
  }

  public getUserView(
    id: string,
  ): Readonly<Pick<UserAccount, 'id' | 'email' | 'profile'>> | undefined {
    const user: UserAccount = <UserAccount> this.register.find((u) => u.id == id);
    user.passwordHash = undefined;
    Object.freeze(user);
    return user;
  }
}
