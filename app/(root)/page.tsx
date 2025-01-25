import Hello from "@/app/components/hello";
import Album from "@/app/components/album";

export const metadata = {
    title: "Home | Example Next.js app",
    description: "Example Next.js app",
}

export default function Home() {
  console.log("Console logging: home page");
  return (
    <>
      <h1 className="text-3xl">Welcome to next</h1>
      <Hello/>
      <h1 className="text-3xl">Fetch Albums example:</h1>
        <Album/>
    </>
  );
}
