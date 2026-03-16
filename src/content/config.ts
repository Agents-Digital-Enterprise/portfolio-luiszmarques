import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
  }),
});

const digitalEnterprise = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    role: z.string(),
    period: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    agents_used: z.array(z.string()),
    issue_ref: z.string().optional(),
    live: z.string().url().optional(),
  }),
});

export const collections = { projects, 'digital-enterprise': digitalEnterprise };
