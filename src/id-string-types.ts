import { z } from "zod";

export const uuidString = z.uuid().brand("UUIDString");
export type UUIDString = z.infer<typeof uuidString>;

export const cuid2String = z.cuid2().brand("CUID2String");
export type CUID2String = z.infer<typeof cuid2String>;

export const ulidString = z.ulid().brand("ULIDString");
export type ULIDString = z.infer<typeof ulidString>;
