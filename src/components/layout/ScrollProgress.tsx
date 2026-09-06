import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[200] h-0.5 pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
