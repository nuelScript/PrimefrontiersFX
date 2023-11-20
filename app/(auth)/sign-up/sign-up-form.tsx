import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, { message: "Enter your first name" }),
  lastName: z.string().min(3, { message: "Enter your last name" }),
  email: z.string().min(3, { message: "Enter your email" }),
  currency: z.string().min(3, { message: "Enter your currency" }),
  password: z.string().min(3).max(32, { message: "Enter your password" }),
  t_and_c: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms and conditions." }),
  }),
  confirm_password: z
    .string()
    .min(8)
    .max(32, { message: "Password must be at least 8 characters long" }),
});
