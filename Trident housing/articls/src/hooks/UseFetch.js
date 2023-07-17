import { useState, useEffect } from "react";

function UseFetch(url) {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async (api) => {
      try {
        // loader start
        setIsPending(true);
        const req = await fetch(api);
        if (!req.ok) {
          throw new Error(req.status);
        }
        const resurs = await req.json();
        // Loader end //
        setIsPending(false);
        setData(resurs);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    };
    getData(url);
  }, []);
  return { data,info, isPending, error };
}

export default UseFetch;
