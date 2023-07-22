import { z } from 'zod';

import Branded from './Branded';

export type EmojiString = Branded<string, 'EmojiString'>;
export const emojiString: z.Schema<EmojiString> = z.string().emoji() as any;

export type DateTimeString = Branded<string, 'DateTimeString'>;
export const dateTimeString: z.Schema<DateTimeString> = z
  .string()
  .datetime() as any;

export type JSONString = Branded<string, 'JsonString'>;
export const jsonString: z.Schema<JSONString> = z.string().refine((value) => {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}) as any;
