import { z } from 'zod';

export interface HexColorString extends String {
  readonly __tag: unique symbol;
}
export const hexColorString: z.Schema<HexColorString> = z
  .string()
  .regex(/^#[\da-f]{6}$/i) as any;

export interface HexColorWithAlphaString extends String {
  readonly __tag: unique symbol;
}
export const hexColorWithAlphaString: z.Schema<HexColorWithAlphaString> = z
  .string()
  .regex(/^#[\da-f]{8}$/i) as any;
