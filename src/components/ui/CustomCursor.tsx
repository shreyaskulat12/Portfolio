import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 400, damping: 30 });
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) { setIsMobile(true); return; }

    const onMove = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select, label')) setIsHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, [role="button"], input, textarea, select, label')) setIsHovering(false);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <motion.div
        style={{ translateX: ringX, translateY: ringY, x: '-50%', y: '-50%' }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          borderColor: isHovering ? 'rgb(139 92 246)' : 'rgb(100 116 139)',
          backgroundColor: isHovering ? 'rgba(139,92,246,0.1)' : 'transparent',
        }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999]"
      />
      <motion.div
        style={{ translateX: dotX, translateY: dotY, x: '-50%', y: '-50%' }}
        animate={{ scale: isClicking ? 2 : isHovering ? 0 : 1 }}
        transition={{ duration: 0.1 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gray-900 dark:bg-white pointer-events-none z-[9999]"
      />
    </>
  );
}
