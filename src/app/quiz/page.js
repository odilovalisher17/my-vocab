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
import { Heart } from "lucide-react";
import { use, useEffect, useState } from "react";

export default function CardDemo() {
  const [quizWord, setQuizWord] = useState({});
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(3);
  const [answer, setAnswer] = useState("");
  const [mode, setMode] = useState("game");

  const getData = async () => {
    try {
      const data = await fetch("/api/words?word=alleviate");
      const word = await data.json();

      setQuizWord(word);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!quizWord.word) {
      getData();
    }
  }, []);

  const handleSubmit = (e, answer, word, mode) => {
    e.preventDefault();

    if (mode === "answer") {
      setMode("game");
      setAnswer("");
      getData();
    } else {
      if (answer.toLowerCase() === word.toLowerCase()) {
        setScore((s) => s + 1);
      } else {
        setLife((l) => l - 1);
      }
      setMode("answer");
    }
  };

  return (
    <div className="w-full pt-[20%]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className={"text-center"}>Word Quiz</CardTitle>
          <CardTitle className={"flex justify-between"}>
            <div className="flex">
              <Heart className={life >= 1 ? "text-red-600" : ""} />
              <Heart className={life >= 2 ? "text-red-600" : ""} />
              <Heart className={life >= 3 ? "text-red-600" : ""} />
            </div>
            <div>Score : {score}</div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => handleSubmit(e, answer, quizWord.word, mode)}>
            <div className="flex flex-col gap-2">
              <div>
                {quizWord.translation} (<small>{quizWord.type}</small>)
              </div>

              <div
                dangerouslySetInnerHTML={{
                  __html: quizWord.definition?.replace(
                    quizWord.word,
                    mode === "answer"
                      ? `<u class="text-green-500">${quizWord.word}</u>`
                      : "_______"
                  ),
                }}
              />

              <div
                dangerouslySetInnerHTML={{
                  __html: ("► " + quizWord.definition)?.replace(
                    quizWord.word,
                    mode === "answer"
                      ? `<u class="text-green-500">${quizWord.word}</u>`
                      : "_______"
                  ),
                }}
              />

              {/* <div>
                ►{" "}
                {mode === "answer"
                  ? 1
                  : quizWord.example?.replace(quizWord.word, "_______")}
              </div> */}

              <div className="grid gap-2">
                <Input
                  id="answer"
                  type="text"
                  placeholder="Write your answer"
                  required={mode === "game"}
                  readOnly={mode === "answer"}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  // disabled={mode === "answer"}
                  className={
                    mode === "game"
                      ? ""
                      : answer.toLowerCase() === quizWord.word?.toLowerCase()
                      ? "text-green-500"
                      : "text-red-400"
                  }
                />
              </div>

              <Button type="submit" className="w-full">
                {mode === "answer" ? "Next" : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
