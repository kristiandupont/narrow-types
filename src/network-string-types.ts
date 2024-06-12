import { z } from "zod";

export const emailString = z.string().email().brand("EmailString");
export type EmailString = z.infer<typeof emailString>;

export const urlString = z.string().url().brand("UrlString");
export type UrlString = z.infer<typeof urlString>;

export const ipString = z.string().ip().brand("IpString");
export type IpString = z.infer<typeof ipString>;

export const ipV4String = z.string().ip({ version: "v4" }).brand("IpV4String");
export type IpV4String = z.infer<typeof ipV4String>;

export const ipV6String = z.string().ip({ version: "v6" }).brand("IpV6String");
export type IpV6String = z.infer<typeof ipV6String>;

export const macAddressString = z
  .string()
  .regex(/^([\dA-Fa-f]{2}[:-]){5}([\dA-Fa-f]{2})$/)
  .brand("MacAddressString");
export type MacAddressString = z.infer<typeof macAddressString>;

export const jwtString = z
  .string()
  .regex(/^([A-Za-z0-9-_]+\.){2}[A-Za-z0-9-_]+$/)
  .brand("JwtString");
export type JwtString = z.infer<typeof jwtString>;
