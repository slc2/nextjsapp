import books from "@/app/api/db"

export async function GET(
    request: Request,
    context: { params: {id: string}}) {
    const id = await +context.params.id;
    console.log("api got request for book:", id);
    const index = books.findIndex(book => book.id === id);
    if (index < 0) {
        throw new Error("book not found");
    }
    return Response.json(books[index]);
}

export async function PUT(
    request: Request,
    context: { params: {id: string}}) {
    const id = await +context.params.id;
    const book = await request.json();

    const index = books.findIndex(book => book.id === id);
    console.log("book", book)
    console.log("index", index)
    if (index > -1) {
        console.log("before", books[index]);
        books[index] = book;
        console.log("after", books[index]);
    } else {
        throw new Error(`Book titled ${book.name} not found`);
    }

    return Response.json(books);
}

export async function DELETE(
    request: Request,
    context: { params: {id: string}}) {
    const id = await +context.params.id;
    const index = books.findIndex(book => book.id === id);
    console.log("index", index)
    if (index == -1) {
        throw new Error("Book id not found");
    }
    books.splice(index, 1);
    return Response.json(books);
}