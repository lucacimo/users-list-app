import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types.ts";

export function useUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get<IUser[]>("https://gorest.co.in/public/v2/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(err.message || "An error occurred while fetching users.");
        setLoading(false);
      });
  }, []);

  return { users, loading, error };
}
