export const warehouses = [
    {
        id: "64a654593e91b8e73a351e9b",
        name: "Küçük Depo",
        description: "3x3x3 boyutlarında 27m³'lük, ofis eşyaları için harika bir depo seçeneği. Alımı kolay, kullanımı kolay ve düzeni kolay bir depo. 12 ay kiralamada 2 ay bizden!",
        price: 2000,
        brand: "Betülkay A.Ş.",
        category: "Warehouse",
        inStock: true,
        image: "https://warespace.com/wp-content/uploads/2023/05/WareSpace_SMALL.webp",
        reviews: [
            {
                rating: 4.5
            }
        ],
    },
    {
        id: "64a4ebe300900d44bb50628a",
        name: "Orta Depo",
        description: "Taşınma aşamasındasınız ve eşyaları koymak için bir alana mı ihtiyacınız var? 5x3x5 boyutlarında 75m³'lük, ev ve ofis eşyaları için harika bir depo seçeneği. Koltuk, beyaz eşya, televizyon gibi eşyalarınızda güvenli muhafaza garantisi sunuyor. 12 ay kiralamada 3 ay bizden!",
        price: 7500,
        brand: "Betülkay A.Ş.",
        category: "Warehouse",
        inStock: true,
        image: "https://warespace.com/wp-content/uploads/2023/05/WareSpace_MEDIUM.webp",
        reviews: [
            {
                id: "64a65a6158b470c6e06959ee",
                userId: "6475af156bad4917456e6e1e",
                productId: "64a4ebe300900d44bb50628a",
                rating: 5,
                comment: "good",
                createdDate: "2023-07-06T06:08:33.067Z",
                user: {
                    id: "6475af156bad4917456e6e1e",
                    name: "Charles",
                    email: "example@gmail.com",
                    emailVerified: null,
                    image:
                        "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
                    hashedPassword: null,
                    createdAt: "2023-05-30T08:08:53.979Z",
                    updatedAt: "2023-05-30T08:08:53.979Z",
                    role: "ADMIN",
                },
            },
        ],
    },
    {
        id: "648437b38c44d52b9542e340",
        name: "Büyük Depo",
        description: "Profesyoneller ve büyük iş yapacak olanlar için. 8x5x8 boyutlarında 320m³ devasa bir alan. Sınırlı sayıda stokta bulunur. Küçük bir kamyonet bile koyabilirsiniz. 12 ay kiralamalarda 3 ay bizden!",
        price: 15000,
        brand: "Betülkay A.Ş.",
        category: "Warehouse",
        inStock: true,
        image: "https://warespace.com/wp-content/uploads/2023/05/WareSpace_X-LARGE.webp",
        reviews: [
            {
                id: "6499b4887402b0efd394d8f3",
                userId: "6499b184b0e9a8c8709821d3",
                productId: "648437b38c44d52b9542e340",
                rating: 4,
                comment:
                    "good enough. I like the camera and casing. the delivery was fast too.",
                createdDate: "2023-06-26T15:53:44.483Z",
                user: {
                    id: "6499b184b0e9a8c8709821d3",
                    name: "Chaoo",
                    email: "example1@gmail.com",
                    emailVerified: null,
                    image:
                        "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
                    hashedPassword: null,
                    createdAt: "2023-06-26T15:40:52.558Z",
                    updatedAt: "2023-06-26T15:40:52.558Z",
                    role: "USER",
                },
            },
            {
                id: "6499a110efe4e4de451c7edc",
                userId: "6475af156bad4917456e6e1e",
                productId: "648437b38c44d52b9542e340",
                rating: 5,
                comment: "I really liked it!!",
                createdDate: "2023-06-26T14:30:40.998Z",
                user: {
                    id: "6475af156bad4917456e6e1e",
                    name: "Charles",
                    email: "example@gmail.com",
                    emailVerified: null,
                    image:
                        "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
                    hashedPassword: null,
                    createdAt: "2023-05-30T08:08:53.979Z",
                    updatedAt: "2023-05-30T08:08:53.979Z",
                    role: "ADMIN",
                },
            },
        ],
    },
];