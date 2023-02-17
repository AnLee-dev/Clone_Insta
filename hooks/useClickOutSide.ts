import { useCallback, useEffect } from "react";

export function useOnClickOutside(ref: any, handler: any) {
  const listener = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (ref?.current?.contains(event.target)) {
        return;
      }
      handler(event);
    },
    [handler, ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, listener]);
}
