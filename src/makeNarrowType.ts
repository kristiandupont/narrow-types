import { z } from 'zod';

const makeNarrowType = <T>(
  predicate: (value: unknown) => value is T
): z.Schema<T> => z.custom<T>(predicate);

export default makeNarrowType;
