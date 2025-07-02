import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    Dos: any;
  }
}
const Dos = window.Dos;

interface PlayerProps {
  width: number;
  height: number;
  bundleUrl: string;
}

export default function DosPlayer(props: PlayerProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [dos, setDos] = useState<any>(null);

  useEffect(() => {
    if (!Dos || !rootRef.current) return;

    const root = rootRef.current as HTMLDivElement;
    const instance = Dos(root);

    setDos(instance);

    const elements = rootRef.current.getElementsByClassName('flex-grow-0');
    while (elements.length > 0) {
      elements[0].remove();
    }

    return () => {
      instance.stop();
    };
  }, [rootRef]);

  useEffect(() => {
    if (dos !== null) {
      dos.run(props.bundleUrl);
    }
  }, [dos, props.bundleUrl]);

  return (
    <div
      ref={rootRef}
      style={{
        width: props.width,
        height: props.height,
        position: 'absolute',
      }}
    ></div>
  );
}