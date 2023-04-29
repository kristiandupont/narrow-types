import { z } from 'zod';

import Branded from './Branded';

export type Integer = Branded<number, 'Integer'>;
export const integer: z.Schema<Integer> = z.number().int() as any;

export type Int2 = Branded<number, 'Int2'>;
export const int2: z.Schema<Int2> = z
  .number()
  .int()
  .min(-32_768)
  .max(32_767) as any;

export type Int4 = Branded<number, 'Int4'>;
export const int4: z.Schema<Int4> = z
  .number()
  .int()
  .min(-2_147_483_648)
  .max(2_147_483_647) as any;

export type Int8 = Branded<bigint, 'Int8'>;
export const int8: z.Schema<Int8> = z
  .bigint()
  .min(-9_223_372_036_854_775_808n)
  .max(9_223_372_036_854_775_807n) as any;

export type PositiveNumber = Branded<number, 'PositiveNumber'>;
export const positiveNumber: z.Schema<PositiveNumber> = z
  .number()
  .positive() as any;

export type NegativeNumber = Branded<number, 'NegativeNumber'>;
export const negativeNumber: z.Schema<NegativeNumber> = z
  .number()
  .negative() as any;

export type NonPositiveNumber = Branded<number, 'NonPositiveNumber'>;
export const nonPositiveNumber: z.Schema<NonPositiveNumber> = z
  .number()
  .nonpositive() as any;

export type NonNegativeNumber = Branded<number, 'NonNegativeNumber'>;
export const nonNegativeNumber: z.Schema<NonNegativeNumber> = z
  .number()
  .nonnegative() as any;

export type FiniteNumber = Branded<number, 'FiniteNumber'>;
export const finiteNumber: z.Schema<FiniteNumber> = z.number().finite() as any;

export type SafeNumber = Branded<number, 'SafeNumber'>;
export const safeNumber: z.Schema<SafeNumber> = z.number().safe() as any;
