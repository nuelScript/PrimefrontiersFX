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
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCoinPrice } from "@/lib/helpers";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  amount: z.coerce.number().min(100, { message: "Amount cannot be below 100" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),
  wallet: z.string().min(1, { message: "Select a service" }),
});

const CryptoPage = () => {
  const router = useRouter();
  const [bitcoinPrice, setBitcoinPrice] = useState<{
    usd: number;
    aud: number;
    gbp: number;
    eur: number;
  } | null>(null);
  const [bitcoinEquivalent, setBitcoinEquivalent] = useState("0");
  const [isAmountEntered, setIsAmountEntered] = useState(false);

  useEffect(() => {
    const getBitcoinPrice = async () => {
      try {
        const res = await axios.get(getCoinPrice);
        const prices = res.data.bitcoin;
        setBitcoinPrice(prices);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };
    getBitcoinPrice();
  }, []);

  const calculateBitcoinAmount = (
    usdAmount: number,
    selectedCurrency: string
  ): string => {
    if (bitcoinPrice) {
      let bitcoinPriceInSelectedCurrency = 0;

      switch (selectedCurrency) {
        case "usd":
          bitcoinPriceInSelectedCurrency = bitcoinPrice.usd;
          break;
        case "aud":
          bitcoinPriceInSelectedCurrency = bitcoinPrice.aud;
          break;
        case "gbp":
          bitcoinPriceInSelectedCurrency = bitcoinPrice.gbp;
          break;
        case "eur":
          bitcoinPriceInSelectedCurrency = bitcoinPrice.eur;
          break;
        default:
          bitcoinPriceInSelectedCurrency = bitcoinPrice.usd;
          break;
      }
      const bitcoinEquivalent = (
        usdAmount / bitcoinPriceInSelectedCurrency
      ).toFixed(8);
      return bitcoinEquivalent;
    }
    return "Loading...";
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdAmount = parseFloat(e.target.value);
    const selectedCurrency = form.getValues("currency");
    const bitcoinEquivalent = calculateBitcoinAmount(
      usdAmount,
      selectedCurrency
    );
    setBitcoinEquivalent(bitcoinEquivalent);
    setIsAmountEntered(Boolean(usdAmount));
  };

  const handleCurrencyChange = (selectedCurrency: string) => {
    const amount = form.getValues("amount");
    const bitcoinEquivalent = calculateBitcoinAmount(amount, selectedCurrency);
    setBitcoinEquivalent(bitcoinEquivalent);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      currency: "",
      paymentMethod: "",
      wallet: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const modifiedData = {
      ...data,
      amount: data.amount.toString(),
      bitcoinEquivalent: bitcoinEquivalent,
    };

    try {
      await axios.post("/api/deposit", modifiedData);
      toast.loading("Deposit request sent. Processing...");
      if (modifiedData.paymentMethod === "bitcoin") {
        router.push("/dashboard/deposits/confirmation");
      } else if (
        modifiedData.paymentMethod === "cashapp" ||
        modifiedData.paymentMethod === "paypal" ||
        modifiedData.paymentMethod === "venmo" ||
        modifiedData.paymentMethod === "zelle"
      ) {
        router.push(`/dashboard/deposits/${modifiedData.paymentMethod}`);
      }
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
      <h3 className="font-bold text-primary text-2xl uppercase">
        Fund your account
      </h3>
      <Link
        href="/dashboard/deposits/buy"
        className="font-bold text-primary text-lg uppercase hover:text-neutral-500"
      >
        <Button variant="link" className="text-base">
          Buy Crypto
        </Button>
      </Link>
      <Card className="flex flex-col items-center border-none dark:bg-neutral-900 bg-neutral-100 max-w-screen-sm w-full">
        <CardContent className="flex w-full p-4 sm:p-8">
          <Form {...form}>
            <form
              className="flex flex-col space-y-4 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {isAmountEntered && (
                <p className="font-normal text-primary text-base text-center">
                  {bitcoinEquivalent} BTC
                </p>
              )}
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
                        onChange={(e) => {
                          field.onChange(e);
                          handleAmountChange(e);
                        }}
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
                      onValueChange={(selectedCurrency) => {
                        field.onChange(selectedCurrency);
                        handleCurrencyChange(selectedCurrency);
                      }}
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
                          <SelectItem value="cashapp">Cashapp</SelectItem>
                          <SelectItem value="paypal">Paypal</SelectItem>
                          <SelectItem value="venmo">Venmo</SelectItem>
                          <SelectItem value="zelle">Zelle</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                            placeholder="Choose a Wallet"
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

export default CryptoPage;
