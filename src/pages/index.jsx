//CONTENTFUL
import { client } from "../contentful";
//COMPONENTS
import Blog from "../components/Blog";
import Features from "../components/Features";
import Services from "../components/Services";


export const getStaticProps = async () => {
    const blog = await client.getEntries({ content_type: "blog" });
    const features = await client.getEntries({ content_type: "features" });
    const services = await client.getEntries({ content_type: "services" });

    return {
        props: {
            response: {
                blog: blog.items.map((item) => item.fields)[0],
                features: features.items.map((item) => item.fields),
                services: services.items.map((item) => item.fields)
            }
        }
    }
}


export default function ({ response }) {
    const { blog, features, services } = response;

    return (
        <div className="font-sans">
            {/* Blog Section */}
            <Blog blog={blog} />

            {/* Features Section */}
            <Features features={features} />

            {/* Services Section */}
            <Services services={services} />
        </div>
    )
}