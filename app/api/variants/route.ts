import { db } from "@/db";
import { variants } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const result = await db.query.variants.findMany({
    where: eq(variants.id, 1),
    with: {
      options: true,
    },
  });

  return Response.json({ result });
}
