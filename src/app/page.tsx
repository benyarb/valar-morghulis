import Houses from "@/components/Houses";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className="text-center">
      <h2 className="mb-6">Hello, Planetos!</h2>

      <p className="mb-6">
        Welcome to <strong>Valar Morghulis</strong> - a project created with
        Next JS to access{" "}
        <a href="https://anapioficeandfire.com/" target="_blank">
          An API of Ice and Fire
        </a>{" "}
        and display a list of houses with their sworn members.
      </p>

      <Link href="/houses/1" className="cta">
        View Houses
      </Link>
    </section>
  );
}
