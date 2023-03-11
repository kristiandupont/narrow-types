# narrow-types

A collection of branded Typescript types, using [zod](https://github.com/colinhacks/zod/) as the underlying validation library.

## Installation

```bash
npm install narrow-types
```

## Rationale

So you are using Zod to make an air tight boundary between the outside and your type safe core. Say you have an endpoint that looks something like this:

```typescript
const signupBody = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

autoRoutes.post('/signup', async (ctx) => {
  const body = signupBody.parse(ctx.req.body);

  ctx.state.db.accounts.insert({
    site: ctx.state.site,
    email: body.email,
    password: await hash(body.password),
  });

  ctx.body = { success: true };
});
```

Great! You have a nice, clean, and easy to understand endpoint. We are certain that the email inserted is a valid email address and that the password is at least 8 characters. But what if we would like to extract a function for signing people up so it could be used elsewhere? We could do something like this:

```typescript
async function signup(
  db: Database,
  site: string,
  email: string,
  password: string
) {
  db.accounts.insert({
    site,
    email,
    password: await hash(password),
  });
}
```

and call that. But now we are no longer sure that the provided email is valid. We could move the Zod validation step into the function, but if we want to keep it in the endpoint as well for some reason, we will now be validating twice at runtime which is a performance cost, and not very pretty either.

Instead, you can use the `EmailString` type from this library:

```typescript
import { EmailString } from 'narrow-types';

async function signup(
  db: Database,
  site: string,
  email: EmailString,
  password: string
) {
  db.accounts.insert({
    site,
    email,
    password: await hash(password),
  });
}
```

Now, the type of `email` is `EmailString` which is a string that has been validated to be a valid email address. To use it, we modify our Zod schema and endpoint to look like this:

```typescript
const signupBody = z.object({
  email: EmailString,
  password: z.string().min(8),
});

autoRoutes.post('/signup', async (ctx) => {
  const body = signupBody.parse(ctx.req.body);

  signup(ctx.state.db, ctx.state.site, body.email, body.password);

  ctx.body = { success: true };
});
```

The `EmailString` type is just a branded string, incurring no runtime cost. It is just a way to tell Typescript that the string is a valid email address. This allows us to use the same type in both the endpoint and the function, and we can be sure that the email address is valid in both places.

This library contains a number of types for common use cases, all compatible with Zod.
