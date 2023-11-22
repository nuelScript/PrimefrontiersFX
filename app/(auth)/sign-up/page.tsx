"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { formSchema } from "./sign-up-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      currency: "USD",
      password: "",
      confirmPassword: "",
      t_and_c: true,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {};
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-black min-h-screen px-4 md:px-0">
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
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          {...field}
                          type="text"
                          placeholder="First Name"
                          disabled={isLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          {...field}
                          type="text"
                          placeholder="Last Name"
                          disabled={isLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
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
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          {...field}
                          type="password"
                          placeholder="Confirm Password"
                          disabled={isLoading}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-light">
                        Currency
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-transparent">
                            <SelectValue placeholder="Choose a currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="gbp">GBP</SelectItem>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="aud">AUD</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="t_and_c"
                  render={({ field }) => (
                    <FormItem className="flex space-x-4 items-center space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="leading-normal">
                        I accept that I am 18 years or older and give consent to
                        the Terms & and Conditions and Privacy Policy
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              <Button className="bg-primary" type="submit">
                Create my Account
              </Button>
              <p className="text-black dark:text-white font-semibold text-center">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="hover:text-white text-white/50"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
