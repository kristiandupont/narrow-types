import { z } from 'zod';

export interface Integer extends Number {
  readonly __tag: unique symbol;
}
export const integer: z.Schema<Integer> = z.number().int() as any;

export interface PositiveNumber extends Number {
  readonly __tag: unique symbol;
}
export const positiveNumber: z.Schema<PositiveNumber> = z
  .number()
  .positive() as any;

export interface NegativeNumber extends Number {
  readonly __tag: unique symbol;
}
export const negativeNumber: z.Schema<NegativeNumber> = z
  .number()
  .negative() as any;

export interface NonPositiveNumber extends Number {
  readonly __tag: unique symbol;
}
export const nonPositiveNumber: z.Schema<NonPositiveNumber> = z
  .number()
  .nonpositive() as any;

export interface NonNegativeNumber extends Number {
  readonly __tag: unique symbol;
}
export const nonNegativeNumber: z.Schema<NonNegativeNumber> = z
  .number()
  .nonnegative() as any;

export interface FiniteNumber extends Number {
  readonly __tag: unique symbol;
}
export const finiteNumber: z.Schema<FiniteNumber> = z.number().finite() as any;

export interface SafeNumber extends Number {
  readonly __tag: unique symbol;
}
export const safeNumber: z.Schema<SafeNumber> = z.number().safe() as any;
