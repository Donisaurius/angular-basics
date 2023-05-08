export interface User {
  id: number;
  password: string;
  email: string;
  name: string;
}

export interface CreateUserDTO extends Omit<User, 'id'> {}
