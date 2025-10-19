"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";

const UserPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>{Cookies.get("username")}</div>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-fit" align="end">
        <div className="grid gap-[5px] lg:gap-[10px]">
          <Link href={"/add-word"} className="w-full">
            <Button variant="outline" autoFocus={false} className="w-full">
              Add word
            </Button>
          </Link>
          <Button variant="outline">Change password</Button>
          <Button variant="destructive">
            <LogOut />
            Log out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserPopover;
