'use client' // Error boundaries must be Client Components

export default function Error({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    console.error(error)
    return (
        // global-error must include html and body tags
        <html>
        <body>
        <h2>Global: Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        </body>
        </html>
    )
}