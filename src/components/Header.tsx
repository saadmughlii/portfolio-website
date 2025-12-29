import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type NavItem = { label: string; to: string; external?: boolean };

interface HeaderProps {
  siteName?: string;
  navItems?: NavItem[];
  showResume?: boolean;
}

export default function Header({
  siteName = "Saad Mughal",
  navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
  ],
  showResume = true,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    try {
      const el = document.documentElement;
      if (isDark) {
        el.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        el.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // noop
    }
  }, [isDark]);

  return (
    <header className="bg-header backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-text">
          {siteName}
        </Link>

        <nav className="hidden md:flex space-x-6 items-center text-muted">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.to} className="hover:text-text">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.to} className="hover:text-text">
                {item.label}
              </Link>
            )
          )}

          {showResume && (
            <a
              href="/resume.pdf"
              className="ml-2 inline-flex items-center px-3 py-1.5 bg-accent text-onAccent rounded-md hover:opacity-90"
            >
              Resume
            </a>
          )}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() => setIsDark((v) => !v)}
          aria-label="Toggle theme"
          className="hidden md:inline-flex ml-3 p-2 rounded-md text-muted hover:bg-bg/50"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <button
          className="md:hidden p-2 rounded-md text-muted hover:bg-bg/50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t">
          <div className="w-full px-4 py-3 flex flex-col">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.to}
                  className="py-2 text-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="py-2 text-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            {showResume && (
              <a href="/resume.pdf" className="py-2 text-muted">
                Resume
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
