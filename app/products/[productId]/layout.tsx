import { Metadata } from "next";
import "../../../app/style.css";

export default function ProductDetailsLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <>
        {children}
        <h2>Features products</h2>
        {/* Carousel here */}
        </>
    )
} 

// export const generateMetadata = ({params}: Props) : Metadata => {

//     return (
//         {title : `Product ${params.productId as string}`}
//     );
// }

// type Props = {
//     params : {
//         productId : String
//     }
// }

export async function generateMetadata({params}: Props): Promise<Metadata> {
    
    // The await keyword unwraps the Promise, resolving the error.
    const resolvedParams = await params;
    
    // You can now access the productId property safely from the resolved object.
    return (
        {title : `Product ${resolvedParams.productId as string}`}
    );
}

interface Props {
    params: {
        productId: string;
    };
    // Next.js passes searchParams and potentially other async objects here.
    // If Next.js is wrapping 'params' in a Promise, the function must be async.
}