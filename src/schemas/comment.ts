import { z } from "zod"

export const CommentSchema = z.object({
    by: z.string().min(1, { message: "Your name is required" }),
    parent: z.string().min(1, { message: "Parent id is required" }),
    text: z.string().min(1, { message: "Text is required" }),
    time: z.date(),
    type: z.string().min(1, { message: "Type is required" }),
})

export const FormSchema = CommentSchema.omit({time: true})

export type CommentType = z.infer<typeof CommentSchema>;
export type FormDataType = z.infer<typeof FormSchema>;