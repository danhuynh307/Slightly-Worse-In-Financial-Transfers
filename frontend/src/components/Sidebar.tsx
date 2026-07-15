import { NavLink } from "react-router-dom";

// Nav items map 1:1 to the pages in src/pages. Each teammate owns one page.
const navItems = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/about", label: "About Me", icon: "👤" },
  { to: "/experts", label: "Experts", icon: "⭐" },
  { to: "/acronyms", label: "Acronyms", icon: "📚" },
  { to: "/qna", label: "Q&A", icon: "💬" },
  { to: "/prompts", label: "Prompt Library", icon: "🤖" },
  { to: "/badges", label: "Badges", icon: "🏆" },
];

export function Sidebar() {
  return (
    <aside className="flex w-60 flex-shrink-0 flex-col border-r border-slate-200 bg-white">
      <div className="px-6 py-5 text-xl font-bold text-indigo-600">
        New Worker Hub
      </div>
      <nav className="flex flex-col gap-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
