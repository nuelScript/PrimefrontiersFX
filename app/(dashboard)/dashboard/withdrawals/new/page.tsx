"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { fetchMiningBalance, fetchTradingBalance } from "@/lib/balance";

const formSchema = z.object({
  wallet: z.string().min(1, { message: "Select a currency" }),
  amount: z.coerce.number().min(100, { message: "Amount cannot be below 100" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),
  walletAddress: z.string().min(1, { message: "Enter a wallet Address" }),
});

const NewWithdrawal = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wallet: "",
      amount: 0,
      currency: "",
      paymentMethod: "",
      walletAddress: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const modifiedData = {
      ...data,
      amount: data.amount.toString(),
    };

    try {
      const { amount, wallet } = modifiedData;

      const tradingBalance = await fetchTradingBalance();
      const miningBalance = await fetchMiningBalance();

      const isTradingWithdrawal = wallet.toLowerCase().includes("trading");
      const availableBalance = isTradingWithdrawal
        ? tradingBalance
        : miningBalance;

      if (parseFloat(amount) > parseFloat(availableBalance)) {
        toast.error("Insufficient balance");
        return;
      }

      await axios.post("/api/withdrawal", modifiedData);
      toast.success("Withdrawal made successfully");
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 400) {
        toast.error("400 Error");
      } else {
        toast.error("Something Went Wrong!");
      }
    } finally {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col items-center space-y-4 w-full p-8 sm:p-0">
      <Card className="flex flex-col items-center border-none dark:bg-neutral-900 bg-neutral-100 max-w-screen-sm w-full">
        <CardContent className="flex w-full p-4 sm:p-8">
          <Form {...form}>
            <form
              className="flex flex-col space-y-4 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="wallet"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2 w-full">
                    <FormLabel className="font-normal text-primary text-base">
                      Wallet
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className="w-full bg-transparent dark:border-primary border-primary"
                          disabled={isLoading}
                        >
                          <SelectValue
                            className="text-primary"
                            placeholder="Choose a wallet"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="trading">Trading</SelectItem>
                          <SelectItem value="bitcoin mining">
                            Bitcoin Mining
                          </SelectItem>
                          <SelectItem value="ethereum mining">
                            Ethereum Mining
                          </SelectItem>
                          <SelectItem value="dogecoin mining">
                            Dogecoin Mining
                          </SelectItem>
                          <SelectItem value="binance coin mining">
                            Binance Coin Mining
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-start w-full">
                    <FormLabel className="font-normal text-primary text-base">
                      Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        className="w-full bg-transparent border-primary"
                        type="text"
                        placeholder="100"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2 w-full">
                    <FormLabel className="font-normal text-primary text-base">
                      Currency
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className="w-full bg-transparent border-primary"
                          disabled={isLoading}
                        >
                          <SelectValue
                            className="text-primary"
                            placeholder="USD"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="gbp">GBP</SelectItem>
                          <SelectItem value="aud">AUD</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2 w-full">
                    <FormLabel className="font-normal text-primary text-base">
                      Payment Method
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger
                          className="w-full bg-transparent border-primary"
                          disabled={isLoading}
                        >
                          <SelectValue
                            className="text-primary"
                            placeholder="Bitcoin"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="bitcoin">Bitcoin</SelectItem>
                          <SelectItem value="ethereum">Ethereum</SelectItem>
                          <SelectItem value="paypal">Paypal</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="walletAddress"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-2 w-full">
                    <FormLabel className="font-normal text-primary text-base">
                      Wallet Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full bg-transparent border-primary"
                        placeholder="Wallet Address"
                        disabled={isLoading}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="default" type="submit">
                Proceed
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewWithdrawal;
