import React, { useState } from "react";

const ChildComponent = React.memo(({ name }: { name: string }) => { 
  console.log('ChildComponent render');
  return <p>ChildComponent: {name}</p>;
})
export default function Memo1Demo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  return <div>
    <h6>Memo1Demo</h6>
    <p>Count: {count}  <button onClick={() => setCount(count + 1)}>＋</button></p>
    <p>Name: {name} <button onClick={() => setName('new' + name)}>change name</button> </p>
    <ChildComponent name={name} />
  </div>;
}