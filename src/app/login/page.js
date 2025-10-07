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
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full min-h-[calc(100vh-20px)] pt-[30%]">
      <Card className="w-full h-fit gap-0">
        <CardHeader>
          <CardTitle className={"text-center"}>Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="enter your username"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <p>
                  Don't have an account? Sign up{" "}
                  <Link href="/reg" className="text-green-600">
                    here
                  </Link>
                  !
                </p>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
