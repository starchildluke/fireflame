import { defineCollection, z } from 'astro:content';

import culture from './indexes/culture.yaml';
import sports from './indexes/sports.yaml';
import stem from './indexes/stem.yaml';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		published: z.boolean().optional(),
		tags: z.array(z.string()),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		layout: z.string()
	})
});

export const collections = { 'blog': blog };