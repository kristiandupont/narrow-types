import { z } from 'zod';

export interface UUIDString extends String {
  readonly __tag: unique symbol;
}
export const uuidString: z.Schema<UUIDString> = z.string().uuid() as any;

export interface CUIDString extends String {
  readonly __tag: unique symbol;
}
export const cuidString: z.Schema<CUIDString> = z.string().cuid() as any;

export interface CUID2String extends String {
  readonly __tag: unique symbol;
}
export const cuid2String: z.Schema<CUIDString> = z.string().cuid2() as any;

export interface ULIDString extends String {
  readonly __tag: unique symbol;
}
export const ulidString: z.Schema<ULIDString> = z.string().ulid() as any;
