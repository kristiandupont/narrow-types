import { z } from "zod";

import type Branded from "./Branded";

export type HexColorString = Branded<string, "HexColorString">;
export const hexColorString: z.Schema<HexColorString> = z
  .string()
  .regex(/^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/) as any;

export type HexColorWithAlphaString = Branded<
  string,
  "HexColorWithAlphaString"
>;
export const hexColorWithAlphaString: z.Schema<HexColorWithAlphaString> = z
  .string()
  .regex(/^#([\dA-Fa-f]{4}|[\dA-Fa-f]{8})$/) as any;
