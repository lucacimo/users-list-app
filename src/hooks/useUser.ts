import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types.ts";
export function useUser(id: string) {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get<IUser>(`https://gorest.co.in/public/v2/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError(err.message || "An error occurred while fetching user.");
        setLoading(false);
      });
  }, []);

  return { user, loading, error };
}
