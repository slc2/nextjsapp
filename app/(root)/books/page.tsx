export const metadata = {
    title: "Home | Example books page that calls server side api",
    description: "Example books page that calls server side api",
}

async function Page() {
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json();
    return (
        <div>
            <code>{JSON.stringify(books, null, 2)}</code>
        </div>
    )
}
export default Page;