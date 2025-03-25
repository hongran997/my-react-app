import useRequest from "../Hooks/useRequest";

const getUserName = function () : Promise<string> { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve('zhaohongran');
    }, 1000);
  })
}
  
export default function TestUseRequest() { 
  

  const { data, loading, error } = useRequest(getUserName);

  if (loading) { 
    return <p>loading</p>
  }
  if (error) { 
    return <p>{ error }</p>
  }

  return <div>{ data }</div>;
}