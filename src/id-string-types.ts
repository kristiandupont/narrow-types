import { z } from "zod";

import Branded from "./Branded";

export type UUIDString = Branded<string, "UUIDString">;
export const uuidString: z.Schema<UUIDString> = z.string().uuid() as any;

export type CUIDString = Branded<string, "CUIDString">;
export const cuidString: z.Schema<CUIDString> = z.string().cuid() as any;

export type CUID2String = Branded<string, "CUID2String">;
export const cuid2String: z.Schema<CUIDString> = z.string().cuid2() as any;

export type ULIDString = Branded<string, "ULIDString">;
export const ulidString: z.Schema<ULIDString> = z.string().ulid() as any;
