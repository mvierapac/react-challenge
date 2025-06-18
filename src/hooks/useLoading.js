import { useEffect, useRef, useState } from "react";

export const useLoading = (loading, hasData) => {
  const [progress, setProgress] = useState(0);
  const [internalLoading, setInternalLoading] = useState(false);
  const hasShownBarRef = useRef(false);

  const shouldShowBar = !hasShownBarRef.current && loading;

  useEffect(() => {
    let interval;
    let timeout;

    if (shouldShowBar) {
      setInternalLoading(true);
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 1 : prev));
      }, 20);
    }

    if (!loading && hasData && internalLoading) {
      setProgress(100);
      timeout = setTimeout(() => {
        hasShownBarRef.current = true;
        setInternalLoading(false);
        setProgress(0);
      }, 400);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loading, hasData, shouldShowBar, internalLoading]);

  const showBar = internalLoading;

  return { progress, showBar };
};
