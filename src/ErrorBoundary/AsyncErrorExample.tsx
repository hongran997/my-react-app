import useRequest from "../Hooks/useRequest";

const getUserName = function () : Promise<string> { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      reject('zhaohongran');
    }, 1000);
  })
}
  
export default function AsyncErrorExample() { 
  

  const { data, loading, error } = useRequest(getUserName);

  if (loading) { 
    return <p>loading</p>
  }
  if (error) { 
    return <p>{ error }</p>
  }

  return <div>Welcome to AsyncErrorExample Page !  { data }</div>;
}