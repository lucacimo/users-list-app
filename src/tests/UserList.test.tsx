import { describe, test, expect } from "vitest";
import { filterUsers } from "../utils/utils.ts";
import { IFilters, IUser } from "../types/types";

describe("filterUsers", () => {
  const mockUsers: IUser[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      gender: "male",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
      gender: "female",
    },
    {
      id: "3",
      name: "Alice Johnson",
      email: "alice@example.com",
      status: "active",
      gender: "female",
    },
  ];

  test("returns all users when no filters are applied", () => {
    const filters: IFilters = {
      name: "",
      email: "",
      status: [],
      gender: [],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual(mockUsers);
  });

  test("filters users by name", () => {
    const filters: IFilters = {
      name: "Jane",
      email: "",
      status: [],
      gender: [],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1]]);
  });

  test("filters users by email", () => {
    const filters: IFilters = {
      name: "",
      email: "alice@example.com",
      status: [],
      gender: [],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[2]]);
  });

  test("filters users by status", () => {
    const filters: IFilters = {
      name: "",
      email: "",
      status: ["active"],
      gender: [],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[0], mockUsers[2]]);
  });

  test("filters users by gender", () => {
    const filters: IFilters = {
      name: "",
      email: "",
      status: [],
      gender: ["female"],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[1], mockUsers[2]]);
  });

  test("filters users by multiple criteria", () => {
    const filters: IFilters = {
      name: "",
      email: "",
      status: ["active"],
      gender: ["female"],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([mockUsers[2]]);
  });

  test("returns an empty array when no users match the filters", () => {
    const filters: IFilters = {
      name: "Nonexistent",
      email: "",
      status: [],
      gender: [],
    };

    const result = filterUsers(mockUsers, filters);
    expect(result).toEqual([]);
  });
});
