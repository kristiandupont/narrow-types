import { z } from 'zod';

import Branded from './Branded';

export type UUIDString = Branded<number, 'UUIDString'>;
export const uuidString: z.Schema<UUIDString> = z.string().uuid() as any;

export type CUIDString = Branded<number, 'CUIDString'>;
export const cuidString: z.Schema<CUIDString> = z.string().cuid() as any;

export type CUID2String = Branded<number, 'CUID2String'>;
export const cuid2String: z.Schema<CUIDString> = z.string().cuid2() as any;

export type ULIDString = Branded<number, 'ULIDString'>;
export const ulidString: z.Schema<ULIDString> = z.string().ulid() as any;
