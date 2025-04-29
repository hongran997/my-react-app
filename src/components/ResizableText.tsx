import { useRef, useState, useEffect, useCallback } from 'react';

export default function ResizableText({ children }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isMultiline, setIsMultiline] = useState<boolean>();

  const deboundedCheck = useCallback((fn: Function, wait = 50) => { 
    let timer: number | null = null;
    return function(...args) { 
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn(args), wait);
    }
  }, [])

  const measureTextWidth = () => { 
    if (!containerRef.current || !textRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const textElement = textRef.current;
    const font = window.getComputedStyle(textElement).font;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context!.font = font;

    const nodeText = textElement.textContent || '';
    const textWidth = context?.measureText(nodeText).width || 0;
    setIsMultiline(textWidth > containerWidth);
  }

  useEffect(() => { 
    const checkWidth = deboundedCheck(measureTextWidth);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => { 
      window.removeEventListener('resize', checkWidth);
    }
  }, [children])

  return (
    <div
      ref={containerRef}
      style={{
        whiteSpace: isMultiline ? 'normal' : 'nowrap',
        textAlign: isMultiline ? 'center' : 'left',
        width: '100%'
      }}
    >
      <span ref={textRef}>{ children }</span>
    </div>
  )
}