import { useEffect, useRef, useState } from "react";

export const useLoading = (loading, hasData, { once = false } = {}) => {
  const [reveal, setReveal] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasRevealedOnce = useRef(false);

  useEffect(() => {
    let interval;
    let timeout;

    const shouldSkip = once && hasRevealedOnce.current;

    if (loading && !shouldSkip) {
      setReveal(false);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 1 : prev));
      }, 20);
    }

    if (!loading && hasData && !shouldSkip) {
      setProgress(100);
      timeout = setTimeout(() => {
        setReveal(true);
        if (once) hasRevealedOnce.current = true;
      }, 300);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loading, hasData, once]);

  return { reveal, progress };
};
