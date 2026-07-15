import type { User } from "../types";

// Presentational card for a single person. No data fetching here on purpose.
export function UserCard({ user }: { user: User }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-4">
        {user.photoUrl ? (
          <img
            src={user.photoUrl}
            alt={user.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            {initials}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-slate-900">{user.name}</h3>
          <p className="text-sm text-slate-500">
            {user.title} · {user.team}
          </p>
        </div>
      </div>
      {user.bio && <p className="mt-3 text-sm text-slate-600">{user.bio}</p>}
    </div>
  );
}
