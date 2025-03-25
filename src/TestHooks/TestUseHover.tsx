import useHover from '../Hooks/useHover';

export default function TestUseHover() { 
  const [inputRef, isHover] = useHover();
  
  return (
    <div>
      <input ref={inputRef}></input>
      isHover: { isHover}
    </div>
  )
}