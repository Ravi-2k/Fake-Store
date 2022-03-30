import axios from "axios";
import { useState, useEffect } from "react";

const useHttpGetRequest = (URL, dependency) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentHasMounted = true;

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      axios
        .get(URL)
        .then((res) => res.data)
        .then((responseData) => {
          if (componentHasMounted) {
            setData(responseData);
            setLoading(false);
          }
        });

      return () => {
        componentHasMounted = false;
      };
    };

    getData();
  }, [dependency]);

  return { payLoad: data, loading: loading };
};

export default useHttpGetRequest;
