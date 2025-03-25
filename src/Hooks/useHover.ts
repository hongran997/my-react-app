import { useRef, useState, useEffect} from 'react';

export default function useHover<T extends HTMLElement>(): [React.RefObject<T>, string] { 
  const ref = useRef<T>(null);
  const [isHover, setIsHover] = useState('not hover');

  const handleMouseEnter = () => { setIsHover('Hoving')}
  const handleMouseLeave = () => { setIsHover('Not hover') }
  
  useEffect(() => { 
    const element = ref.current;
    if (!element) return;
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave)
    return () => { 
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [])
  return [ref, isHover]
}