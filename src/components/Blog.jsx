export default function Blog({ blog }) {
    return (
        <>
            {/* Header */}
            <header className="bg-blue-900 text-white py-4 px-8 md:px-16">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl md:text-2xl font-bold">{blog.name}</h1>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-black h-screen text-white py-16 px-8 md:px-16 flex-1 flex flex-col justify-center items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{blog.title}</h1>
                    <p className="text-lg md:text-xl mb-8">{blog.text}</p>
                </div>
            </section>
        </>
    )
}