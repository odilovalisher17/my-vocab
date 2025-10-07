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

export default function Home() {
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
            <div>Your records is : 500</div>
            <ActivityChart />
            <PartOfSpeechAccuracy />
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
