import { IFilters, IUser } from "../types/types.ts";

export const filterUsers = (users: IUser[], filters: IFilters): IUser[] => {
  return users.filter(
    (user) =>
      (!filters.name ||
        user.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.status.length === 0 || filters.status.includes(user.status)) &&
      (filters.gender.length === 0 || filters.gender.includes(user.gender)),
  );
};
