"use client";

import { Metadata } from "next";
import { useParams } from "next/navigation";



export default function ProductDetails() {
    const params = useParams()
    return <h1>Details about product {params.productId as String}</h1>
}

