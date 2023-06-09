import Image from "next/image";
import Link from "next/link";
import Houses from "@/app/components/Houses";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto">
      <h2 className="mb-6">Hello, Westeros!</h2>

      <p className="mb-6">
        Welcome to <strong>Valar Morghulis</strong> - a project created with
        Next JS to access{" "}
        <a href="https://anapioficeandfire.com/">An API of Ice And Fire</a> and
        display a list of houses with their sworn members.
      </p>

      <Houses />
    </main>
  );
}
