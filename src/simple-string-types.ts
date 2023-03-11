import { z } from 'zod';

export interface EmojiString extends String {
  readonly __tag: unique symbol;
}
export const emojiString: z.Schema<EmojiString> = z.string().emoji() as any;

export interface DateTimeString extends String {
  readonly __tag: unique symbol;
}
export const dateTimeString: z.Schema<DateTimeString> = z
  .string()
  .datetime() as any;

export interface JsonString extends String {
  readonly __tag: unique symbol;
}
export const jsonString: z.Schema<JsonString> = z.string().refine((value) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}) as any;
