import { z } from "zod";

export const nonEmptyString = z.string().min(1).brand("NonEmptyString");
export type NonEmptyString = z.infer<typeof nonEmptyString>;

export const emojiString = z.emoji().brand("EmojiString");
export type EmojiString = z.infer<typeof emojiString>;

export const dateTimeString = z.iso.datetime().brand("DateTimeString");
export type DateTimeString = z.infer<typeof dateTimeString>;

export const dateString = z.iso.date().brand("DateString");
export type DateString = z.infer<typeof dateString>;

export const timeString = z.iso.time().brand("TimeString");
export type TimeString = z.infer<typeof timeString>;

export const durationString = z.iso.duration().brand("DurationString");
export type DurationString = z.infer<typeof durationString>;

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
