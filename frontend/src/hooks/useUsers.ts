// Data-fetching hook for users. This is the reference pattern for the team:
// each feature gets a hook that owns loading/error/data state so components
// stay dumb. (Later you can swap this for React Query if you want caching.)

import { useEffect, useState } from "react";
import { usersApi } from "../api/users";
import type { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    usersApi
      .getAll()
      .then((data) => {
        if (active) setUsers(data);
      })
      .catch((err: unknown) => {
        if (active) setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return { users, loading, error };
}
