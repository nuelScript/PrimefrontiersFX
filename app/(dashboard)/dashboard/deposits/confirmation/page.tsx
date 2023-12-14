"use client";

import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const ConfirmationPage = () => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Address copied successfully");
      setCopied(true);
    } catch (err) {
      toast.error("Failed to copy address");
    }
  };

  const onSubmit = async () => {
    try {
      const modifiedData = localStorage.getItem("depositData");
      const modifiedDataObject = JSON.parse(modifiedData || "");
      await axios.post("/api/deposits", modifiedDataObject);
      toast.success("Deposit Request Sent!");
      router.push("/dashboard/deposits/list");
    } catch (error: any) {
      if (error?.response?.status === 400) {
        toast.error("400 Error");
      } else {
        toast.error("Something Went Wrong!");
      }
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
      <Button className="p-4 capitalize" onClick={() => onSubmit()}>
        Confirm Payment
      </Button>
    </div>
  );
};

export default ConfirmationPage;
