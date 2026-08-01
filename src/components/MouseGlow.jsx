import React, { useEffect, useState } from 'react';

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{
          width: '450px',
          height: '450px',
          left: `${position.x - 225}px`,
          top: `${position.y - 225}px`,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)',
        }}
      />
    </div>
  );
};
