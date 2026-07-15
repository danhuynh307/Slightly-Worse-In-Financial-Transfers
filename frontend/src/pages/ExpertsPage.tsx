import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";

// ⭐ REFERENCE PAGE — fully wired to the backend (GET /users).
// This is the pattern for every feature: page → hook → api → client → backend.
// Copy this structure for Acronyms, Prompts, Praise, etc.
export function ExpertsPage() {
  const { users, loading, error } = useUsers();

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-slate-900">Expert Navigator</h1>
      <p className="mb-6 text-slate-500">
        Everyone in the hub. (Next: filter by expertise tag.)
      </p>

      {loading && <p className="text-slate-500">Loading experts…</p>}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Couldn't reach the backend: {error}
          <br />
          Is Spring Boot running on port 8080? Start it with{" "}
          <code className="rounded bg-red-100 px-1">./mvnw spring-boot:run</code>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
