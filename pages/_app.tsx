import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";

const prod = process.env.NODE_ENV === "production";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "https://twitter.com/ferranbt", label: "Twitter", external: true },
  { href: "https://github.com/ferranbt", label: "Github", external: true },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {prod && (
          <script
            defer
            data-domain="ferranbt.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
      </Head>
      <div className="container">
        <header className="pt-10">
          <div className="mx-auto flex justify-between items-center">
            <nav>
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-gray-400 underline"
                    >
                      {item.label}
                    </Link>
                    {item.external && (
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mb-1 inline ml-1" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between py-14">
          <div className="z-10 w-full items-center justify-between font-mono text-sm">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  );
}
