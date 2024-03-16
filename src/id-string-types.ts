import { z } from "zod";

export const uuidString = z.string().uuid().brand("UUIDString");
export type UUIDString = z.infer<typeof uuidString>;

export const cuidString = z.string().cuid().brand("CUIDString");
export type CUIDString = z.infer<typeof cuidString>;

export const cuid2String = z.string().cuid2().brand("CUID2String");
export type CUID2String = z.infer<typeof cuid2String>;

export const ulidString = z.string().ulid().brand("ULIDString");
export type ULIDString = z.infer<typeof ulidString>;
