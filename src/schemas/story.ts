import { z } from "zod"

export const StorySchema = z.object({
    by: z.string(),
    descendants: z.number(),
    id: z.number(),
    kids: z.array(z.number()),
    score: z.number(),
    time: z.number(),
    title: z.string(),
    type: z.string(),
    url: z.string(),
})

export type StoryType = z.infer<typeof StorySchema>;