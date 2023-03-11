import { z } from 'zod';

import Branded from './Branded';

export type Integer = Branded<number, 'Integer'>;
export const integer: z.Schema<Integer> = z.number().int() as any;

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
