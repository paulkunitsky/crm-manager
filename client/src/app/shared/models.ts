export interface User {
  email: string;
  password: string;
  _id?: string;
}

export interface Category {
  name: string;
  imageSrc?: string;
  userId?: string;
  _id?: string;
}