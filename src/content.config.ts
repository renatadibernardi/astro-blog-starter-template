import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// Controla só a exibição no site — a data continua a existir e a ordenar os posts.
		showDate: z.boolean().optional().default(true),
		heroImage: z.string().optional(),
		category: z.enum(["identidade-em-deus", "sinal-x-identidade"]).optional(),
	}),
});

const link = defineCollection({
	// Load Markdown files in the `src/content/link/` directory (bookmarks for the /link page).
	loader: glob({ base: "./src/content/link", pattern: "**/*.md" }),
	schema: z.object({
		name: z.string(),
		link: z.string().url(),
		description: z.string().optional().default(""),
		createdAt: z.string().datetime(),
		tags: z.array(z.string()).default([]),
		favicon: z.string().optional().default(""),
		ogthumb: z.string().optional().default(""),
		creator: z.string().default("admin"),
		favorite: z.boolean().default(false),
		bundles: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, link };
