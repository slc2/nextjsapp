import Hello from "@/app/components/hello";

export default function Home() {
  console.log("Console logging: Home page");
  return (
    <>
      <h1 className="text-3xl">Welcome to next</h1>
      <Hello/>
    </>
  );
}
