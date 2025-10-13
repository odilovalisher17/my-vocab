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
import { useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const handleSubmit = async (e, data) => {
    e.preventDefault();
    if (data.username.length < 3) {
      toast("Username's length should be at least 4!");
    } else if (data.password !== data.confirm) {
      toast("Passwords dont match!");
    }
    try {
      await fetch(
        `/api/reg?username=${data.username}&password=${data.password}`
      );
    } catch (error) {
      toast("Username already taken!");
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-20px)] pt-[30%]">
      <Card className="w-full h-fit gap-0">
        <CardHeader>
          <CardTitle className={"text-center"}>Registration</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => handleSubmit(e, formData)}>
            <div className="flex flex-col gap-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Create your username"
                  required
                  value={formData.username}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, username: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, password: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.confirm}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, confirm: e.target.value }))
                  }
                />
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Submit
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
