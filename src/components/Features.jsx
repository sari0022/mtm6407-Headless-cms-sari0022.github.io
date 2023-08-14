export default function Features({ features }) {
    return (
        <section className="bg-gray-100 py-16 px-8 md:px-16">
            <div className="container mx-auto">
                <h2 className="text-black text-3xl md:text-4xl font-bold mb-8 text-center">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        features.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-xl font-semibold mb-4">{item.heading}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}