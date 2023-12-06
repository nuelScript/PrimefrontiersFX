import { Card, CardContent } from "@/components/ui/card";
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
              <Link href="/dashboard/trading/markets">
                <div className="flex flex-col space-y-3 font-medium uppercase">
                  <div className="flex items-center justify-center p-6 bg-emerald-500 rounded-xl mb-2 hover:bg-emerald-500/50">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  Asset markets
                </div>
              </Link>
              <Link href="/dashboard/trading/watchlist">
                <div className="flex flex-col space-y-3 font-medium uppercase">
                  <div className="flex items-center justify-center p-6 bg-fuchsia-500 rounded-xl mb-2 hover:bg-fuchsia-500/50">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  Saved Assets
                </div>
              </Link>
              <Link href="/dashboard/trading/trade-room">
                <div className="flex flex-col space-y-3 font-medium uppercase">
                  <div className="flex items-center justify-center p-6 bg-red-500 rounded-xl mb-2 hover:bg-red-500/50">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  Trading Room
                </div>
              </Link>
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
              <TabsTrigger value="active" className="flex flex-1 items-center">
                <LucideHourglass className="w-4 h-4 mr-2" /> Active
              </TabsTrigger>
            </TabsList>
            <TabsContent value="closed" className="pt-4 h-4/5">
              <Card className="w-full border-none shadow-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 h-full">
                <CardContent className="flex items-center justify-center w-full">
                  <h3 className="font-bold text-base uppercase">No Data</h3>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="active" className="pt-4 h-4/5">
              <Card className="w-full border-none shadow-none flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 h-full">
                <CardContent className="flex items-center justify-center w-full">
                  <h3 className="font-bold text-base uppercase">
                    No Open Positions
                  </h3>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </TabsContent>
      <TabsContent value="mining" className="flex flex-col items-center pt-4">
        <Card className="border-none shadow-none bg-transparent w-full md:max-w-screen-2xl">
          <div className="flex flex-col space-y-4 items-center">
            <h3 className="font-bold text-4xl">$ 0.00</h3>
            <h5 className="font-normal text-xs uppercase">Mining balance</h5>
            <Link
              href="/dashboard/mining"
              className="w-full flex justify-center p-4 uppercase text-xs font-bold bg-neutral-200 dark:bg-neutral-800 rounded-xl dark:hover:bg-neutral-800/50 hover:bg-neutral-200/50"
            >
              <div className="0">My mining Contracts</div>
            </Link>
            <Link
              href="/dashboard/deposits/select"
              className="w-full flex justify-center p-4 uppercase text-xs font-bold bg-neutral-200 dark:bg-neutral-800 rounded-xl dark:hover:bg-neutral-800/50 hover:bg-neutral-200/50"
            >
              <div className="0">Buy mining Contracts</div>
            </Link>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
