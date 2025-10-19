"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserPopover from "./elements/UserPopover";
import { ActivityChart } from "./elements/ActivityChart";
import { PartOfSpeechAccuracy } from "./elements/PartOfSpeechAccuracy";
import TopMissedWords from "./elements/TopMissedWords";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Home() {
  const [userStatics, setUserStatics] = useState({
    record: 0,
  });

  useEffect(() => {
    const fetchStatics = async () => {
      const res = await fetch(`/api/stats?user_id=${Cookies.get("user_id")}`);
      const data = await res.json();

      setUserStatics(data);
    };

    fetchStatics();
  }, []);

  return (
    <div>
      <Card className="w-full">
        <CardHeader className={"flex justify-center relative"}>
          <div>Word Quiz</div>
          <div className="absolute right-2 lg:right-6">
            <UserPopover />
          </div>
        </CardHeader>

        <CardContent>
          <div>
            <div className="mb-[10px]">
              <div>Your records is : {userStatics.record}</div>

              <Link href="/quiz">
                <Button
                  variant={"outline"}
                  className={
                    "w-full bg-green-500 hover:bg-green-600 text-white dark:bg-green-900 cursor-pointer"
                  }
                >
                  Start Quiz
                </Button>
              </Link>
            </div>
            <ActivityChart />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px]">
              <PartOfSpeechAccuracy />
              <TopMissedWords />
            </div>
          </div>
        </CardContent>

        {/* <CardFooter className="flex-col gap-2"></CardFooter> */}
      </Card>
    </div>
  );
}
