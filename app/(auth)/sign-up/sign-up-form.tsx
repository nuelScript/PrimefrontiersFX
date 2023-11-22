import * as z from "zod";

export const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  currency: z.string().min(3, { message: "Currency is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  t_and_c: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms and conditions." }),
  }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm Password is required" }),
});
