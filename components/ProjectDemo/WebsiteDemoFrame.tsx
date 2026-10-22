"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WebsiteDemoFrame.module.css";

const DESKTOP_WIDTH = 1440;

export default function WebsiteDemoFrame({ src, title }: { src: string; title: string }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESKTOP_WIDTH);
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.viewport} ref={viewportRef}>
      <iframe
        className={styles.screen}
        style={{ transform: `scale(${scale})` }}
        width={DESKTOP_WIDTH}
        height={900}
        src={src}
        title={title}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
