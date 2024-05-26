import { useEffect, useRef } from 'react';

export default function useIntersectionFocus(onFocusCallback, deps) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (observerRef.current) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && onFocusCallback()),
        {
          threshold: 1,
        }
      );
      observer.observe(observerRef.current);

      return () => {
        if (observerRef.current) observer.unobserve(observerRef.current);
      };
    }
  }, [deps]);

  return { observerRef: observerRef };
}
