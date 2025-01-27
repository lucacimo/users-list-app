export interface IUser {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  gender: "male" | "female";
}

export interface IFilters {
  name: string;
  email: string;
  status: string[];
  gender: string[];
}
