import { BRAND } from "zod";

type Branded<T, Tag extends string | number | symbol> = T & BRAND<Tag>;

export default Branded;
