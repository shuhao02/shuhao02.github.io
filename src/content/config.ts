import { defineCollection, z } from 'astro:content';

// Schema for a single publication entry on the home page.
// Each field maps to a visible piece of the paper row.
const paperSchema = z.object({
  // Full paper title.
  title: z.string(),
  // Author list as an ordered array. Any name matching `selfName` in
  // src/data/site.ts is rendered in bold.
  authors: z.array(z.string()),
  // Venue string shown after the authors (e.g., "NeurIPS 2024", "ICML 2025",
  // "Neural Networks, 2025").
  venue: z.string(),
  // Date used for sorting (newest first). The day-of-month doesn't have to be
  // accurate — month+year is enough to keep the ordering right.
  date: z.date(),
  // Optional rating badge shown next to the venue, e.g. "CCF-A", "CCF-B",
  // "JCR Q1". The color is picked automatically from the prefix.
  rating: z.string().optional(),
  // Optional one-line summary shown under the venue line.
  tldr: z.string().optional(),
  // Optional inline links. Keys are free-form; common ones (paper / arxiv /
  // pdf / code / project / video / slides / poster / bibtex / scholar) are
  // ordered consistently by the renderer.
  links: z.record(z.string().url()).optional(),
  // If true, the entry gets a subtle left-border accent.
  highlight: z.boolean().default(false),
});

const publications = defineCollection({
  type: 'content',
  schema: paperSchema,
});

export const collections = {
  publications,
};
