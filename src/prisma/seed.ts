import { CATEGORIES, PRODUCTS, BRANDS } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Тестовый юзер',
                email: 'user@test.com',
                password: hashSync('1234', 10),
                verifed: new Date(),
                role: 'USER'
            },
            {
                fullName: 'Тестовый админ',
                email: 'admin@test.com',
                password: hashSync('5678', 10),
                verifed: new Date(),
                role: 'ADMIN'
            }
        ]
    });

    await prisma.category.createMany({
        data: CATEGORIES
    });

    await prisma.brand.createMany({
        data: BRANDS
    })

    await prisma.product.createMany({
        data: PRODUCTS
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: '1234'
            },
            {
                userId: 2,
                totalAmount: 0,
                token: '5678'
            },
        ]
    });

    await prisma.cartItem.createMany({
        data: [
            {
                productId: 1,
                cartId: 1,
                quantity: 2,
            },
            {
                productId: 9,
                cartId: 2,
            },
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);

        await prisma.$disconnect();

        process.exit(1);
    })