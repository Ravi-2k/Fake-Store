import axios from "axios";
import { useState, useEffect } from "react";
import useHttpGetRequest from "./useHttpGetRequest";

const useGetProducts = (rootUrl) => {
  const { payLoad: categories, loading } = useHttpGetRequest(rootUrl);
  const [categoryWiseProductsList, setCategoryWiseProductsList] = useState([]);
  const [productsFetched, setProductsFetched] = useState(true);

  const fetchProducts = async () => {
    const categoryWisePromises = categories.map((category) =>
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
    );

    const results = await Promise.all(categoryWisePromises);
    const dataPromises = results.map((result) => result.data);
    const finalResult = await Promise.all(dataPromises);
    const mappedResult = finalResult.reduce((acc, item) => {
      return { ...acc, [item[0].category]: item };
    }, {});
    return mappedResult;
  };

  useEffect(() => {
    if (!loading && categories.length) {
      fetchProducts().then((res) => {
        setCategoryWiseProductsList(res);
        setProductsFetched(false);
      });
    }
    return () => {};
  }, [loading]);

  return {
    categories,
    categoryWiseProductsList,
    loading: productsFetched,
  };
};

export default useGetProducts;
