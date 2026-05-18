import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const owner = defineCollection({
	/* `base` es relativo a la raíz del repo (no a este archivo) */
	loader: glob({ pattern: "**/*.md", base: "./src/content/owner" }),
	schema: z.object({
		name: z.string(),
		image: z.string(),
		rol: z.string(),
	}),
});

export const collections = { owner };
