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

const services = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
	schema: z.object({
		title: z.string(),
		order: z.coerce.number().optional(),
		icon: z.string().optional(),
		description: z.string(),
		features: z.array(z.string()).min(1),
		order_label: z.string().optional(),
	}),
});

export const collections = { owner, services };
