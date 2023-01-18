import { z } from 'zod';

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long.' })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: 'Age must be at least 18.' }),
});

type User = z.infer<typeof userSchema>;

function saveUserToDatabase(user: User) {
  const { name, age } = userSchema.parse(user);
  // save to DB
  console.log('Saving', { name, age });
}

saveUserToDatabase({
  name: 'Alessandro',
  age: 38,
});
