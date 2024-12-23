import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== "ADMIN") {
        return NextResponse.error();
    }

    const body = await request.json();
    const { name, description, brand, category, price, palletCount, inStock, image } = body;

    const product = await prisma.product.create({
        data: {
            name,
            description,
            brand,
            category,
            price: parseFloat(price),
            palletCount: parseInt(palletCount) ,
            inStock,
            image
        }
    });

    return NextResponse.json(product);
}