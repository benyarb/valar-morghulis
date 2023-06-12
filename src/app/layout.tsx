import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Valar Morghulis",
  description:
    "A project created with Next JS to access An API of Ice and Fire and display a list of houses with their sworn members.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="mt-12 px-12 text-center">
          <Link
            href="/"
            className="items-end brand max-w-lg mx-auto flex justify-center gap-2 pb-8 pt-48"
          >
            <h1 className="text-4xl text-left">Valar Morghulis</h1>
            <p className="text-sm leading-6">on</p>

            <Image
              className="relative p-[0.42rem] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js"
              width={150}
              height={31}
              priority
            />
          </Link>
        </header>

        <main className="max-w-xl mx-auto px-6 pt-8 pb-24">{children}</main>

        <footer className="text-center text-sm">
          <p className="mb-2">
            by{" "}
            <a href="https://benyarb.com/" target="_blank">
              benyarb
            </a>
          </p>
          <a
            href="https://github.com/benyarb/valar-morghulis"
            target="_blank"
            className="inline-block github"
          >
            <svg
              className="scale-[0.3]"
              width="98"
              height="96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
              />
            </svg>
          </a>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
