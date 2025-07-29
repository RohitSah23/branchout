'use client';

import { useState, useEffect, ReactNode } from 'react';

const LOGO = ['B', 'R', 'A', 'N', 'C', [" "],'H', 'O', 'U', 'T'];

interface LoadingScreenProps {
  children: ReactNode;
}

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2600);      
    const t2 = setTimeout(() => setStage(2), 3200);      
    const t3 = setTimeout(() => setStage(3), 3600 + 200); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const showOverlay = stage < 3;
  const opacityClass = stage < 2 ? 'opacity-100' : 'opacity-0';
  const bgClass = stage === 1 ? 'bg-black' : 'bg-red-600';

  return (
    <>
      {children}

      {showOverlay && (
        <div
          className={`
            fixed inset-0 flex items-center justify-center z-50
            ${bgClass} ${opacityClass}
            transition-opacity duration-1000 ease-in
          `}
          style={{ willChange: 'opacity, background-color' }}
        >
          {(stage === 0 || stage === 1) && (
            <div className="flex space-x-2">
              {LOGO.map((ch, i) => (
                <span
                  key={i}
                  className={`
                    text-7xl font-extrabold text-white
                    ${stage === 0
                      ? 'opacity-0 transform scale-50 animate-letter'
                      : 'opacity-100'}
                  `}
                  style={stage === 0 ? { animationDelay: `${i * 0.2 + 0.3}s` } : {}}
                >
                  {ch}
                </span>
              ))}
            </div>
          )}

          <style jsx global>{`
            @keyframes letter-pop {
              0% { opacity: 0; transform: scale(0.5) translateY(20px); }
              60% { opacity: 1; transform: scale(1.2) translateY(-5px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-letter {
              animation: letter-pop 0.6s forwards;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
