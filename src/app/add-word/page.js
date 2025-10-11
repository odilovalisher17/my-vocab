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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [formData, setFormData] = useState({
    word: "",
    type: "noun",
    translation: "",
    definition: "",
    example: "",
  });
  const [loading, setLoading] = useState({
    status: "finished",
    message: undefined,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading((l) => ({ ...l, status: "loading" }));

      const res = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to add word");
      }

      toast(
        <div className="w-full text-center">
          <div className="font-medium">Word successfully added!</div>
        </div>,
        { duration: 3000 /* etc */ }
      );
    } catch (error) {
      setLoading((l) => ({ status: "finished" }));

      toast(
        <div className="w-full text-center">
          <div className="font-medium">This word is already added!</div>
        </div>,
        { duration: 3000, className: "border border-green-500" }
      );
    } finally {
      setLoading((l) => ({ ...l, status: "finished" }));
      setFormData({
        word: "",
        type: "noun",
        translation: "",
        definition: "",
        example: "",
      });
    }
  };

  return (
    <div className="w-full pt-[10%]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className={"text-center"}>Add new word</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Word</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter a new word"
                  required
                  value={formData.word}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, word: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Part of Speech</Label>
                <RadioGroup
                  defaultValue="noun"
                  className={"grid grid-cols-4"}
                  value={formData.type}
                  onValueChange={(t) =>
                    setFormData((prev) => ({ ...prev, type: t }))
                  }
                >
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
                    <RadioGroupItem value="adv" id="r4" />
                    <Label htmlFor="r4">Adverb</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Meaning in uzbek</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter meaning in uzbek"
                  required
                  value={formData.translation}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, translation: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Definition</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter word's definition"
                  required
                  value={formData.definition}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, definition: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Example sentence</Label>
                <Input
                  id="word"
                  type="text"
                  placeholder="Enter example sentence"
                  required
                  value={formData.example}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, example: e.target.value }))
                  }
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading.status === "loading"}
              >
                {loading.status === "loading" ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  "Add"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
