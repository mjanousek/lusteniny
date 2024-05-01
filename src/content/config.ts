import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "data", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),
      galleryLink: z.string(),
      winners: z.array(z.string()),
      cyphers: z.array(
        z.object({
          title: z.string(),
          info: z.array(z.string()).optional(),
          image: image().optional(),
          images: z.array(image()).optional(),
          hints: z.array(z.string()),
          steps: z.array(z.string()),
          solution: z.string(),
        }),
      ),
      bonusInformation: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    }),
});

export const collections = {
  events,
};
