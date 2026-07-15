// Placeholder for pages a teammate will build out. Delete this usage once the
// real page exists. Shows a consistent "claim me" canvas in the meantime.
export function StubPage({
  title,
  owner,
  description,
}: {
  title: string;
  owner?: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="mb-1 text-2xl font-bold text-slate-900">{title}</h1>
      <p className="mb-6 text-slate-500">{description}</p>
      <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white/50 p-10 text-center">
        <p className="text-slate-400">
          🚧 This page is a stub{owner ? ` — ${owner} owns it` : ""}.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Follow the pattern in{" "}
          <code className="rounded bg-slate-100 px-1">pages/ExpertsPage.tsx</code>{" "}
          to wire it to the backend.
        </p>
      </div>
    </div>
  );
}
