import { z } from "zod";

import type Branded from "./Branded";

export type EmailString = Branded<string, "EmailString">;
export const emailString: z.Schema<EmailString> = z.string().email() as any;

export type URLString = Branded<string, "URLString">;
export const urlString: z.Schema<URLString> = z.string().url() as any;

export type IPString = Branded<string, "IPString">;
export const ipString: z.Schema<IPString> = z.string().ip() as any;

export type IPV4String = Branded<string, "IPV4String">;
export const ipV4String: z.Schema<IPV4String> = z
  .string()
  .ip({ version: "v4" }) as any;

export type IPV6String = Branded<string, "IPV6String">;
export const ipV6String: z.Schema<IPV6String> = z
  .string()
  .ip({ version: "v6" }) as any;

export type MacAddressString = Branded<string, "MacAddressString">;
export const macAddressString: z.Schema<MacAddressString> = z
  .string()
  .regex(/^([\dA-Fa-f]{2}[:-]){5}([\dA-Fa-f]{2})$/) as any;
