import axios from "axios";
import { useState, useEffect } from "react";

const useHttpGetRequests = (urlList) => {
  const [data, setData] = useState([]);
  const [noOfUrlsFetched, setNoOfUrlsFetched] = useState(0);
  let componentHasMounted = true;

  useEffect(() => {
    const getData = () => {
      urlList.forEach((url) => {
        axios
          .get(url)
          .then((res) => res.data)
          .then((responseData) => {
            if (componentHasMounted) {
              setData(responseData);
              setNoOfUrlsFetched((prevState) => prevState + 1);
            }
          });
      });

      return () => {
        componentHasMounted = false;
      };
    };

    getData();
  }, []);

  return { payLoad: data, loading: noOfUrlsFetched < urlList.length };
};

export default useHttpGetRequests;
