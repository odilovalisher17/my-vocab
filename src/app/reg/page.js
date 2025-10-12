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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function page() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch("/api/reg?username=johndoe&password=123456");
      const user = await data.json();

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-20px)] pt-[30%]">
      <Card className="w-full h-fit gap-0">
        <CardHeader>
          <CardTitle className={"text-center"}>Registration</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Create your username"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" type="password" required />
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <p>
                  Already have an account? Log in{" "}
                  <Link href="/login" className="text-green-600">
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
