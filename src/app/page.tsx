import HouseList from "@/app/components/HouseList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto px-6 py-8">
      <h2 className="mb-6">Hello, Planetos!</h2>

      <p className="mb-6">
        Welcome to <strong>Valar Morghulis</strong> - a project created with
        Next JS to access{" "}
        <a href="https://anapioficeandfire.com/">An API of Ice And Fire</a> and
        display a list of houses with their sworn members.
      </p>

      <HouseList />
    </main>
  );
}
