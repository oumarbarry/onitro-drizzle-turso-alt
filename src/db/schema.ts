import { sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createId } from "@paralleldrive/cuid2"

export const movies = sqliteTable("movies", {
  id: text("id").$defaultFn(() => createId()).primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
})
