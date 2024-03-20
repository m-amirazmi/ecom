import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const variants = pgTable("variants", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  productId: integer("product_id")
    .notNull()
    .references(() => products.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const variantOptions = pgTable("variant_options", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  variantId: integer("variant_id")
    .notNull()
    .references(() => variants.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  slug: varchar("slug", { length: 256 }).unique(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const combinedVariants = pgTable("combined_variants", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }), // Combination of variants
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  description: text("description"),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "string" }).defaultNow(),
});

export const productRelation = relations(products, ({ many, one }) => ({
  variants: many(variants),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

export const variantRelations = relations(variants, ({ many, one }) => ({
  options: many(variantOptions),
  product: one(products, {
    fields: [variants.productId],
    references: [products.id],
  }),
}));

export const variantOptionRelations = relations(variantOptions, ({ one }) => ({
  variant: one(variants, {
    fields: [variantOptions.variantId],
    references: [variants.id],
  }),
}));

export const categoryRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));
