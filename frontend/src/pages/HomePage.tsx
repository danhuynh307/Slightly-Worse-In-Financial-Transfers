import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";

// 🏠 Home dashboard. Pulls in real data (Popular Experts) plus placeholder
// panels teammates will fill in (Recent Praise, Latest Acronyms, ...).
export function HomePage() {
  const { users, loading, error } = useUsers();

  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-slate-900">
        Welcome to the New Worker Hub
      </h1>
      <p className="mb-6 text-slate-500">
        Everything you need to get up to speed, in one place.
      </p>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-800">
          Popular Experts
        </h2>
        {loading && <p className="text-slate-500">Loading…</p>}
        {error && (
          <p className="text-sm text-red-600">Backend offline: {error}</p>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.slice(0, 3).map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
