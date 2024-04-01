import { useEffect, useRef } from 'react';

export default function useRefFocusEffect(onFocusCallback, deps) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && onFocusCallback()),
        {
          threshold: 1,
        }
      );
      observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, [deps]);

  return { focusElementRef: ref };
}
