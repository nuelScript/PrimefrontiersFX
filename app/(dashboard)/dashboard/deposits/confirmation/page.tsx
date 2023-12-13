"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="flex flex-col items-center space-y-8 max-w-screen-lg w-full">
      <p className=" flex flex-col items-center space-y-4 font-semibold text-lg text-primary">
        <span>Pay into this bitcoin Address</span>{" "}
        <code className="font-bold text-2xl">
          3K9zDhdKHKj1kUbw2ud8vKeUnZHrBr9FmM
        </code>
      </p>
      <Button
        className="p-4 capitalize"
        onClick={() => copyToClipboard("3K9zDhdKHKj1kUbw2ud8vKeUnZHrBr9FmM")}
      >
        {copied ? "Address Copied!" : "Copy Address"}
      </Button>
      <Button
        className="p-4 capitalize"
        onClick={() => router.push("/dashboard/deposits/list")}
      >
        Confirm Payment
      </Button>
    </div>
  );
};

export default ConfirmationPage;
