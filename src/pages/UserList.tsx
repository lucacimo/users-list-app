import React from "react";
import { useUsers } from "../hooks/useUsers.ts";
import { useState } from "react";
import Filters from "../components/Filters.tsx";
import Page from "../components/Page.tsx";
import UserListItems from "../components/UserListItems.tsx";
import { IFilters } from "../types/types.ts";
import { filterUsers } from "../utils/utils.ts";

const UserList = () => {
  const { users, loading } = useUsers();
  const [filters, setFilters] = useState<IFilters>({
    name: "",
    email: "",
    status: [],
    gender: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prev) => {
        const arr = prev[name as "status" | "gender"];
        return {
          ...prev,
          [name]: checked
            ? [...arr, value]
            : arr.filter((val) => val !== value),
        };
      });
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredUsers = filterUsers(users, filters);
  return (
    <Page>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-64 mb-4 md:mb-0 md:mr-6">
          <Filters filters={filters} onChange={handleChange} />
        </div>
        <main className="w-full md:w-[600px] flex-shrink-0">
          <UserListItems users={filteredUsers} loading={loading} />
        </main>
      </div>
    </Page>
  );
};

export default UserList;
