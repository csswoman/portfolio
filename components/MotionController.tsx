'use client';

import { useEffect } from 'react';

/** Pausa animaciones de fondo cuando la pestaña no está visible. */
export function MotionController() {
  useEffect(() => {
    const sync = () => {
      document.documentElement.toggleAttribute('data-motion-pause', document.hidden);
    };

    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  return null;
}
