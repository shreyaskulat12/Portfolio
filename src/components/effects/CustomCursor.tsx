import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only on pointer-fine devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const updateHover = (e: MouseEvent) => {
      const el = e.target as Element;
      const isHoverable = el.closest('a, button, [role="button"], [data-cursor="pointer"]');
      setHovering(!!isHoverable);
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mousemove', updateHover, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousemove', updateHover);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 hidden md:block"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className={`rounded-full bg-violet-500 transition-all duration-150 ${
            hovering ? 'w-2 h-2 opacity-0' : 'w-2 h-2'
          } ${clicking ? 'scale-75' : ''}`}
        />
      </div>
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 hidden md:block"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full border-2 border-violet-500/70 transition-all duration-200"
          animate={{
            width: hovering ? 48 : clicking ? 20 : 32,
            height: hovering ? 48 : clicking ? 20 : 32,
            borderColor: hovering ? 'rgba(139,92,246,0.9)' : 'rgba(139,92,246,0.5)',
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
    </>
  );
}
