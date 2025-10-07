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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

export default function CardDemo() {
  return (
    <div className="w-full pt-[20%]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className={"text-center"}>Word Quiz</CardTitle>
          <CardTitle className={"flex justify-between"}>
            <div className="flex">
              <Heart className="text-red-600" />
              <Heart className="text-red-600" />
              <Heart />
            </div>
            <div>Score : 0</div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-2">
              <div>
                Ko'rkam libos, maxsus kiyim (<small>noun</small>)
              </div>

              <div>_______ is nice or special clothing.</div>

              <div>
                ► Everyone wore their best _______ to the president’s daughter’s
                wedding.
              </div>

              <div className="grid gap-2">
                <Input
                  id="answer"
                  type="text"
                  placeholder="Write your answer"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
