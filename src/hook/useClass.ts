import { useEffect, useState } from 'react';
import classService from "../services/classService";

const useClass = () => {
  const [data, setData] = useState<Class[]>([]);
  useEffect(() => {
    const request = classService.getAll(); 
    request.then(
      (res) =>  {setData(res.data)
      }
    ).catch((err) => {})
  }, [])


 return data; 
}
export default useClass; 