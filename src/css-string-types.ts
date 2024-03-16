import { z } from "zod";

export const hexColorString = z
  .string()
  .regex(/^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/)
  .brand("HexColorString");
export type HexColorString = z.infer<typeof hexColorString>;

export const hexColorWithAlphaString = z
  .string()
  .regex(/^#([\dA-Fa-f]{4}|[\dA-Fa-f]{8})$/)
  .brand("HexColorWithAlphaString");
export type HexColorWithAlphaString = z.infer<typeof hexColorWithAlphaString>;
