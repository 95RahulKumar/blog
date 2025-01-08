import { z } from 'zod';

const schema = z.object({
  email: z
    .string()
    .email("Invalid email address") // Validates the string is a valid email format
    .nonempty("Email is required"), // Ensures the email is not empty

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long") // Minimum length
});

export default schema;