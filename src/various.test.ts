import { assert } from 'tsafe';
import { describe, expect, test } from 'vitest';
import { z } from 'zod';

import { hexColorString, hexColorWithAlphaString } from './css-string-types';
import makeNarrowType from './makeNarrowType';
import {
  emailString,
  ipString,
  macAddressString,
} from './network-string-types';
import { Integer, integer } from './simple-number-types';
import { jsonString } from './simple-string-types';

describe('custom validator types', () => {
  test('hexColorString', () => {
    expect(hexColorString.safeParse('#000000')).toMatchObject({
      data: '#000000',
      success: true,
    });
    expect(hexColorString.safeParse('#ffffff')).toMatchObject({
      data: '#ffffff',
      success: true,
    });
    expect(hexColorString.safeParse('#00000000')).toMatchObject({
      success: false,
    });
  });

  test('hexColorWithAlphaString', () => {
    expect(hexColorWithAlphaString.safeParse('#00000000')).toMatchObject({
      data: '#00000000',
      success: true,
    });
    expect(hexColorWithAlphaString.safeParse('#ffffffff')).toMatchObject({
      data: '#ffffffff',
      success: true,
    });
    expect(hexColorWithAlphaString.safeParse('#000000')).toMatchObject({
      success: false,
    });
  });

  test('macAddressString', () => {
    expect(macAddressString.safeParse('00:00:00:00:00:00')).toMatchObject({
      data: '00:00:00:00:00:00',
      success: true,
    });
    expect(macAddressString.safeParse('ff:ff:ff:ff:ff:ff')).toMatchObject({
      data: 'ff:ff:ff:ff:ff:ff',
      success: true,
    });
    expect(macAddressString.safeParse('invalid')).toMatchObject({
      success: false,
    });
  });

  test('jsonString', () => {
    expect(jsonString.safeParse('{}')).toMatchObject({
      data: '{}',
      success: true,
    });
    expect(jsonString.safeParse('{"foo": "bar"}')).toMatchObject({
      data: '{"foo": "bar"}',
      success: true,
    });
    expect(jsonString.safeParse('invalid')).toMatchObject({
      success: false,
    });
  });

  test('Integer', () => {
    const i1 = integer.parse(1);
    assert<typeof i1 extends Integer ? true : false>();
    expect(i1).toBe(1);

    let i2: Integer = integer.parse(2);
    i2 = i1;
    expect(i2).toBe(1);
  });

  test('makeRefinedType', () => {
    interface YoutubeUrl extends String {
      readonly __tag: unique symbol;
    }
    const youtubeUrl = makeNarrowType((value): value is YoutubeUrl =>
      /^(http(s)??:\/\/)?(www\.)?((youtube\.com\/watch\?v=)|(youtu.be\/))([\w-])+$/gi.test(
        value as string
      )
    );

    const u1 = youtubeUrl.parse('https://www.youtube.com/watch?v=1234567890');
    assert<typeof u1 extends YoutubeUrl ? true : false>();
    expect(u1).toBe('https://www.youtube.com/watch?v=1234567890');

    expect(() => youtubeUrl.parse('https://www.google.com')).toThrow();
  });

  test('Combine', () => {
    const account = z.object({
      name: z.string(),
      email: emailString,
      password: z.string(),
      ipAddress: ipString,
    });

    const a = account.parse({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
      ipAddress: '192.168.1.1',
    });

    expect(a).toMatchObject({
      name: 'John',
      email: 'john@example.com',
      password: '123456',
      ipAddress: '192.168.1.1',
    });
  });
});
