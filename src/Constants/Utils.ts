import { useState, useEffect } from "react";
import { IBar } from "./ActionTypes";

const shuffle = (array: Array<any>): void => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const interpolateSpeed = (speed: string) =>
  Math.floor((parseInt(speed) / 100) * (0 - 3000) + 3000);

export const sleep = async (ms: number): Promise<any> =>
  new Promise(r => setTimeout(r, ms));

export const generateArrayFromOptions = (
  length: string,
  initial: string
): Array<IBar> => {
  const arrLength = parseInt(length);
  let result = Array.from({ length: arrLength }, () => ({
    value: 0,
    isCompared: false,
    isSwapped: false
  }));
  if (initial === "Random") {
    for (let i = 0; i < arrLength; i++) {
      result[i].value = i + 1;
    }
    shuffle(result);
  } else if (initial === "Reversed") {
    for (let i = 0; i < arrLength; i++) {
      result[arrLength - i - 1].value = i + 1;
    }
  } else {
    for (let i = 0; i < arrLength; i++) {
      result[i].value = i + 1;
    }
    // 20% of elements will be shuffled
    const swapFactor = MAX_SWAP_FACTOR;
    let maxSwaps = Math.floor(swapFactor * arrLength);
    const swapInterval = Math.floor(1 / swapFactor);

    let position = 0;
    while (maxSwaps && position < arrLength) {
      const slotSwap = Math.floor(Math.random() * swapInterval) + position;
      [result[slotSwap].value, result[position].value] = [
        result[position].value,
        result[slotSwap].value
      ];
      maxSwaps--;
      position += swapInterval;
    }
  }
  return result;
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

// VALUES
export const MIN_SIZE = 1;
export const MAX_SIZE = 100;
export const MIN_VALUE_DISPLAY_FACTOR = 24.0;
const MAX_SWAP_FACTOR = 0.2;

export const darkTheme = [
  "--sidebar: #435055",
  "--copyOtherSidebar: #34495e",
  "--title: #f0ece2",
  "--start: #34495e",
  "--bar: #ecfcff",
  "--compared: #ff6361",
  "--swapped: #4ecca3",
  "--background: #000"
];
export const lightTheme = [
  "--sidebar: #307672",
  "--copyOtherSidebar: #1a3c40",
  "--title: #000",
  "--start: #1a3c40",
  "--bar: #000",
  "--compared: #e84545",
  "--swapped: #2eb872",
  "--background: #e4eddb"
];
