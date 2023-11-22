"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const SignInPage = () => {
  const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z.string().min(8, { message: "Please enter a valid password" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center space-y-20 items-center pt-10 bg-black min-h-screen px-4 md:px-0">
      <Card className="p-0 md:p-6 w-full md:w-[500px] h-full bg-[#0b1118] rounded-lg">
        <CardContent className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-6 pt-16"
            >
              <div className="flex flex-col space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          {...field}
                          type="email"
                          placeholder="Email"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          {...field}
                          type="password"
                          placeholder="Password"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
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
