const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.deposit.createMany({
      data: [
        {
          id: "e3e586c7-7bb2-463b-8f18-ee74815f3de9",
          firstName: "Dirk",
          lastName: "Keller",
          userId: "user_2ZRYFiVqGOUJgu1ImSC86AyxBXR",
          amount: "172298",
          bitcoinEquivalent: "3.96561407",
          currency: "usd",
          paymentMethod: "bitcoin",
          status: "confirmed",
          wallet: "bitcoin mining",
        },
        {
          id: "e2356026-3a41-4741-bcf8-da826c0e29d5",
          firstName: "Keith Jr",
          lastName: "Attle",
          userId: "user_2b6P2B3pa0ILjMmlX032tvgmbxB",
          amount: "503",
          bitcoinEquivalent: "0.0047669",
          currency: "usd",
          paymentMethod: "bitcoin",
          status: "confirmed",
          wallet: "bitcoin mining",
        },
        {
          id: "bae49cde-303f-4aa1-a780-5101f59de028",
          firstName: "Patricia",
          lastName: "Woodring",
          userId: "user_2bkN2ZtmpH3L5oG0bZpUUVisMvn",
          amount: "6120",
          bitcoinEquivalent: "0.00285639",
          currency: "usd",
          paymentMethod: "bitcoin",
          status: "pending",
          wallet: "bitcoin mining",
        },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database transactions", error);
  } finally {
    await database.$disconnect();
  }
}

main();
