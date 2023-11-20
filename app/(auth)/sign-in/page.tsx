"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PFX } from "@/public/images";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const SignInPage = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email" }),
    password: z
      .string()
      .min(8)
      .max(32, { message: "Please enter a valid password" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="flex flex-col justify-center space-y-20 items-center pt-10 bg-black min-h-screen px-4 md:px-0">
      <Card className="p-0 md:p-6 w-full md:w-[500px] h-full bg-[#0b1118] rounded-lg">
        <CardContent className="">
          <Form {...form}>
            <form className="flex flex-col space-y-6 pt-16">
              <div className="flex flex-col space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                      {...field}
                      type="email"
                      placeholder="Email"
                      disabled={isLoading}
                    />
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <Input
                      className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                      {...field}
                      type="password"
                      placeholder="Password"
                      disabled={isLoading}
                    />
                  )}
                />
              </div>
              <Button className="bg-primary">Sign In</Button>
              <Link href="/forgot-password" className="hover:opacity-50">
                <p className="text-black dark:text-white font-semibold text-center">
                  Forgot Password?
                </p>
              </Link>
              <p className="text-black dark:text-white font-semibold text-center">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="hover:text-white text-white/50"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
