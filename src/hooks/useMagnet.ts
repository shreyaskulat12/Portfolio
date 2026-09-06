import { useCallback, useRef } from 'react';

export function useMagnet(strength = 0.3) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = '';
    }, 500);
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
