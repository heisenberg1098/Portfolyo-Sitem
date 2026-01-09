"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;

    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%cOoo bak sen! 🕵️‍♂️\n" +
          "Gizli konsolu keşfetmiş gibisin! 🔍\n" +
          "Biraz sihir görmek ister misin? ✨\n" +
          "Konsola %cismimi%c yaz ve Enter'a bas! 🎩🐇",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
      );

      ["enes", "Enes", "ENES"].forEach((name) => {
        // @ts-ignore
        if (Object.hasOwn(window, name)) return;

        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ Abra Kadabra! ✨\n\n" +
                "Enes'in gizli gücünü çağırdın! 🧙‍♂️\n" +
                "Etkilenmedin mi? Olur öyle… ama unutma:\n" +
                "Büyük güç, büyük sorumluluk getirir! 💻⚡",
              "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPsstt! 🤫\n\n" +
                  "Kedileri sever misin? 😺\n" +
                  "Eğer cevabın evetse, ekranda 'n' tuşuna bas ve ne olacağını gör! 🐱✨",
                "color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 7000);

            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
