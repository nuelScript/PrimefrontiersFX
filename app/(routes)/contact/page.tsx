"use client";

import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const ContactPage = () => {
  const formSchema = z.object({
    name: z.string().min(3, { message: "Enter your name" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    message: z.string().min(1, { message: "Please enter a message" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const isLoading = form.formState.isLoading;
  return (
    <div className="flex flex-col">
      <Banner title="Contact Us" />
      <div className="p-20">
        <div className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0 space-y-12 space-x-0 items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8 w-full"
            >
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="text"
                          disabled={isLoading}
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          placeholder="Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          type="email"
                          disabled={isLoading}
                          className="bg-transparent placeholder:text-xs placeholder:font-light text-sm font-light"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="resize-none"
                        rows={8}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Send message</Button>
            </form>
          </Form>
          <div className="flex flex-col space-y-8 items-center w-full">
            <p className="text-center font-medium text-base lg:w-3/6 w-2/3">
              We are always open and we welcome and questions you have for our
              team. If you wish to get in touch, please fill out the form below.
              Someone from our team will get back to you shortly.
            </p>
            <div className="inline-flex space-x-2">
              <Mail />
              <span>info@contact.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
