import { defineCollection, z } from 'astro:content';

import culture from './indexes/culture.yaml';
import sports from './indexes/sports.yaml';
import stem from './indexes/stem.yaml';

const allYamls = [].concat(culture, sports, stem).flatMap((x) => x);

const indexes = defineCollection({
	type: 'data',
	schema: allYamls({
		title: z.string(),
		desc: z.string().optional(),
		link: z.string(),
		tags: z.array(z.string()).optional()
	})
});

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

export const collections = { 'blog': blog, 'indexes': indexes };