import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Showcase", href: "#showcase" },
  { label: "Docs", href: "#docs" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2">
          <Image src="/images/logo.png" alt="ClipCash logo" width={140} height={36} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Global navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/signin" className="text-sm font-medium text-zinc-200 hover:text-white">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#00ff9d] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#7dffd0]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}