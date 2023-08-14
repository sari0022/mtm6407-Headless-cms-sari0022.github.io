export default function Services({ services }) {
    return (
        <section className="bg-gray-100 pb-16 pt-7 px-8 md:px-16">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        services.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-xl font-semibold mb-4">{item.heading}</h3>
                                <img className="mb-4 w-full h-48" style={{ maxWidth: '100%' }} src={'https:' + item.image.fields.file.url} alt={item.heading} />
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}