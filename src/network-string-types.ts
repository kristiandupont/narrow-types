import { z } from 'zod';

export interface EmailString extends String {
  readonly __tag: unique symbol;
}
export const emailString: z.Schema<EmailString> = z.string().email() as any;

export interface URLString extends String {
  readonly __tag: unique symbol;
}
export const urlString: z.Schema<URLString> = z.string().url() as any;

export interface IPString extends String {
  readonly __tag: unique symbol;
}
export const ipString: z.Schema<IPString> = z.string().ip() as any;

export interface IPV4String extends String {
  readonly __tag: unique symbol;
}
export const ipV4String: z.Schema<IPV4String> = z
  .string()
  .ip({ version: 'v4' }) as any;

export interface IPV6String extends String {
  readonly __tag: unique symbol;
}
export const ipV6String: z.Schema<IPV6String> = z
  .string()
  .ip({ version: 'v6' }) as any;

export interface MacAddressString extends String {
  readonly __tag: unique symbol;
}
export const macAddressString: z.Schema<MacAddressString> = z
  .string()
  .regex(/^([\dA-Fa-f]{2}[:-]){5}([\dA-Fa-f]{2})$/) as any;
