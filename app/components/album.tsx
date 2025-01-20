

async function Album() {
    console.log('Album loading');
    const response = await fetch("https://jsonplaceholder.typicode.com/albums",
        {cache: "no-store"})
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    const albumsData = await response.json()

    return (
        <div className="grid grid-cols-1">
            {albumsData.map((album: {id: number, title: string}) => (
                <div key={album.id} className="bg-black shadow-md overflow-hidden rounded-lg transition duration-200">
                    <h3 className="text-lg text-white font-bold">{album.title}</h3>
                    <p className="text-gray-400">Album ID: {album.id}</p>
                </div>
            ))}
        </div>
    )
}

export default Album;