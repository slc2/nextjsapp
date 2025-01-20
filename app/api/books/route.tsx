import books from "@/app/api/db"

export async function GET() {
    return Response.json(books);
}

export async function POST(
    request: Request) {
    //console.log("request", request);
    const book = await request.json();
    console.log("book", book);
    console.log("how many books before add: ", books.length);
    const index = books.length + 1;
    books.push({
        "id" : index,
        "name" : book.name
    })
    return Response.json(books);
}