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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function page() {
  return (
    <div className="w-full pt-[10%]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className={"text-center"}>Add new word</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Word</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter a new word"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Part of Speech</Label>
                <RadioGroup defaultValue="noun" className={"grid grid-cols-4"}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="noun" id="r1" />
                    <Label htmlFor="r1">Noun</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="verb" id="r2" />
                    <Label htmlFor="r2">Verb</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="adj" id="r3" />
                    <Label htmlFor="r3">Adjective</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="adv" id="r3" />
                    <Label htmlFor="r3">Adverb</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Meaning UZ</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter meaning in uzbek"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
