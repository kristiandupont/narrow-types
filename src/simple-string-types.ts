import { z } from "zod";

export const nonEmptyString = z.string().min(1).brand("NonEmptyString");
export type NonEmptyString = z.infer<typeof nonEmptyString>;

export const emojiString = z.string().emoji().brand("EmojiString");
export type EmojiString = z.infer<typeof emojiString>;

export const dateTimeString = z.string().datetime().brand("DateTimeString");
export type DateTimeString = z.infer<typeof dateTimeString>;

export const jsonString = z
  .string()
  .refine((value) => {
    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  })
  .brand("JSONString");
export type JSONString = z.infer<typeof jsonString>;
