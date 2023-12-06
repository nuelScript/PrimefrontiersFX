import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MiningPage = () => {
  return (
    <Card className="flex flex-col items-center border-none md:max-w-screen-xl w-full">
      <CardHeader className="text-xl uppercase">My Mining Contracts</CardHeader>
      <CardContent className="flex items-center justify-center bg-neutral-200 dark:bg-neutral-900 md:max-w-screen-xl w-full h-40 rounded-2xl hover:bg-neutral-200/50 dark:hover:bg-neutral-900/50">
        <p className="text-lg text-gray-950 dark:text-gray-500 ">
          You don&apos;t have any mining contracts yet.
        </p>
      </CardContent>
    </Card>
  );
};

export default MiningPage;
