import { db } from "@/db";
import { products } from "@/db/schema";
import { ilike } from "drizzle-orm";

export async function GET() {
  const result = await db.query.products.findMany({
    where: ilike(products.name, "%kasut%"),
    with: {
      variants: {
        with: {
          options: true,
        },
      },
    },
  });
  console.log(result);
  return Response.json({ result });
}
