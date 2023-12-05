import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Clock,
  Coins,
  DollarSign,
  Hourglass,
  LucideHourglass,
  Star,
  Store,
} from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="trading" className="w-full md:w-3/4">
      <TabsList className="grid grid-cols-2 w-full">
        <TabsTrigger value="trading" className="flex flex-1 items-center ">
          <BarChart className="w-4 h-4 mr-2" />
          Trading
        </TabsTrigger>
        <TabsTrigger value="mining" className="flex flex-1 items-center">
          <Coins className="w-4 h-4 mr-2" />
          Mining
        </TabsTrigger>
      </TabsList>
      <TabsContent value="trading">
        <div className="flex space-x-8 w-full pt-4">
          <div className="flex flex-col space-y-4 w-full">
            <div className="flex space-x-20 w-full justify-between">
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-semibold">Total Balance</h3>
                <p className="text-sm text-gray-500">0.00000000 BTC</p>
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-semibold">Available Balance</h3>
                <p className="text-sm text-gray-500">0.00000000 BTC</p>
              </div>
            </div>
            <div className="grid grid-cols-2 col-span-4 gap-8">
              <Link href="/dashboard/deposits/crypto">
                <div className="flex flex-col space-y-3 font-medium uppercase">
                  <div className="flex items-center justify-center p-6 bg-sky-500 rounded-xl mb-2 hover:bg-sky-500/50">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  Fund Account
                </div>
              </Link>
              <div className="flex flex-col space-y-3 font-medium uppercase">
                <div className="flex items-center justify-center p-6 bg-emerald-500 rounded-xl mb-2 hover:bg-emerald-500/50">
                  <Store className="w-6 h-6 text-white" />
                </div>
                Asset markets
              </div>
              <div className="flex flex-col space-y-3 font-medium uppercase">
                <div className="flex items-center justify-center p-6 bg-fuchsia-500 rounded-xl mb-2 hover:bg-fuchsia-500/50">
                  <Star className="w-6 h-6 text-white" />
                </div>
                Saved Assets
              </div>
              <div className="flex flex-col space-y-3 font-medium uppercase">
                <div className="flex items-center justify-center p-6 bg-red-500 rounded-xl mb-2 hover:bg-red-500/50">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                Trading Room
              </div>
              <div className="flex flex-col space-y-3 font-medium uppercase">
                <div className="flex items-center justify-center p-6 bg-[#666699] rounded-xl mb-2 hover:bg-[#666699]/50">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                Binary Options
              </div>
            </div>
          </div>
          <Tabs defaultValue="closed" className="w-full">
            <TabsList className="grid grid-cols-2 w-full place-content-center">
              <TabsTrigger value="closed" className="flex flex-1 items-center">
                <Hourglass className="w-4 h-4 mr-2" /> Closed
              </TabsTrigger>
              <TabsTrigger value="Active" className="flex flex-1 items-center">
                <LucideHourglass className="w-4 h-4 mr-2" /> Active
              </TabsTrigger>
            </TabsList>
            <TabsContent value="closed"></TabsContent>
          </Tabs>
        </div>
      </TabsContent>
      <TabsContent value="mining"></TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
