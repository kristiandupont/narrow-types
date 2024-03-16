import { z } from "zod";

export const integer = z.number().int().brand("Integer");
export type Integer = z.infer<typeof integer>;

export const int2 = z.number().int().min(-32_768).max(32_767).brand("Int2");
export type Int2 = z.infer<typeof int2>;

export const int4 = z
  .number()
  .int()
  .min(-2_147_483_648)
  .max(2_147_483_647)
  .brand("Int4");
export type Int4 = z.infer<typeof int4>;

export const int8 = z
  .bigint()
  .min(-9_223_372_036_854_775_808n)
  .max(9_223_372_036_854_775_807n)
  .brand("Int8");
export type Int8 = z.infer<typeof int8>;

export const positiveNumber = z.number().positive().brand("PositiveNumber");
export type PositiveNumber = z.infer<typeof positiveNumber>;

export const negativeNumber = z.number().negative().brand("NegativeNumber");
export type NegativeNumber = z.infer<typeof negativeNumber>;

export const nonPositiveNumber = z
  .number()
  .nonpositive()
  .brand("NonPositiveNumber");
export type NonPositiveNumber = z.infer<typeof nonPositiveNumber>;

export const nonNegativeNumber = z
  .number()
  .nonnegative()
  .brand("NonNegativeNumber");
export type NonNegativeNumber = z.infer<typeof nonNegativeNumber>;

export const finiteNumber = z.number().finite().brand("FiniteNumber");
export type FiniteNumber = z.infer<typeof finiteNumber>;

export const safeNumber = z.number().safe().brand("SafeNumber");
export type SafeNumber = z.infer<typeof safeNumber>;
