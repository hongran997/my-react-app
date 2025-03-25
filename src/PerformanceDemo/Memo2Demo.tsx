import React, { useState } from "react";

const ChildComponent = React.memo(({ user }: { user: { name: string, age: number } }) => { 
  console.log('ChildComponent render');
  return <p>
    {user.name} - {user.age}
  </p>;
}, (prevProps, nextProps) => {
  return prevProps.user.age === nextProps.user.age;
})


export default function Memo1Demo() {
  const [user, setUser] = useState({ name: 'John', age: 20 });

  return <div>
    <h6>Memo2Demo</h6>
    <p>Name: {user.name} - Age: {user.age}</p>
    <button onClick={() => setUser({ name: user.name + '-new', age: user.age })}>change name</button>
    <button onClick={() => setUser({ name: user.name, age: user.age + 1})}>change age</button>
    <ChildComponent user={user} />
  </div>;
}