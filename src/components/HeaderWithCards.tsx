"use client";

import { useEffect, useState, useRef } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark") ||
        localStorage.getItem("theme") === "dark"
      : false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (err) {
      void err;
    }
  }, [isDark]);

  // Read CSS token values at runtime so we can apply them where Tailwind
  // utilities can't (e.g., divide color using CSS vars). Recompute when
  // `isDark` toggles so values reflect the active palette.
  const [headerColor, setHeaderColor] = useState<string | undefined>();
  const [accentRgb, setAccentRgb] = useState<string | undefined>();
  const divideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getToken = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const hexToRgb = (hexRaw: string) => {
      let hex = hexRaw.trim();
      if (!hex) return undefined;
      if (hex.startsWith("rgb")) return undefined;
      if (!hex.startsWith("#")) hex = `#${hex}`;
      if (hex.length === 4) {
        // shorthand #abc -> #aabbcc
        hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
      }
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r} ${g} ${b}`;
    };

    try {
      const header = getToken("--color-header");
      const accent = getToken("--color-accent");
      setHeaderColor(header || undefined);
      const rgb = hexToRgb(accent || "");
      setAccentRgb(rgb);
    } catch (e) {
      void e;
    }
  }, [isDark]);

  useEffect(() => {
    if (!divideRef.current) return;
    const el = divideRef.current;
    if (accentRgb) {
      el.style.setProperty("--tw-divide", accentRgb);
      el.style.setProperty("--tw-divide-opacity", "0.1");
    } else {
      el.style.removeProperty("--tw-divide");
      el.style.removeProperty("--tw-divide-opacity");
    }
  }, [accentRgb]);

  return (
    <header
      className="bg-header sticky top-0 z-50 w-screen left-0"
      style={headerColor ? { backgroundColor: headerColor } : undefined}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-text">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-text">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-text">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            aria-pressed={isDark}
            className="text-sm/6 font-semibold text-text hover:opacity-80"
          >
            {isDark ? "☀️" : "🌙"}
            <span className="sr-only">Toggle theme</span>
          </button>
          <a href="#" className="text-sm/6 font-semibold text-text">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-header p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-muted"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y" ref={divideRef}>
              <div className="space-y-4 py-6">
                {products.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group -mx-3 flex items-start gap-x-4 rounded-lg p-3 text-base/7 hover:bg-accent/10"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-header/50 group-hover:bg-header">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-muted group-hover:text-text"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-text">{item.name}</p>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="mt-2 grid grid-cols-1 gap-3">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-text hover:bg-accent/10"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          aria-hidden="true"
                          className="h-5 w-5 text-muted"
                        />
                        <span>{item.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
