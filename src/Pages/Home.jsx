import { useState, useEffect } from "react";
import '../App.css';
import { supabase } from "../supabaseClient";
import Product from "../components/Product";
import Categories from "../components/Categories";
import UtilityBar from "../components/UtilityBar";
import Loader from "../components/Loader";

import { categoryState, searchState } from "../context/state";
import { useRecoilState, useRecoilValue } from "recoil";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryValue, setCategoryValue] = useRecoilState(categoryState);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchValue = useRecoilValue(searchState);

  useEffect(() => {
    console.log("from home : ", categoryValue);
  }, [setCategoryValue, categoryValue]);

  useEffect(() => {
    const retrieveProducts = async () => {
      const { data, error } = await supabase.from("products").select();

      if (error) {
        alert("error occured");
        console.log(error);
      }
      if (data) {
        setLoading(false);
        setProducts(data);
        // Initialize filteredProducts with all products
        setFilteredProducts(data);
        console.log(data);
      }
    };

    retrieveProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (categoryValue === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.categoryId === categoryValue
      );
      setFilteredProducts(filtered);
    }
  }, [categoryValue, products]);

  // Create a function to search for products based on a query
  const searchProducts = async (query) => {
    const { data, error } = await supabase
      .from("products")
      .select()
      .textSearch("name", query , {
        type: "plain",
        config: 'english'
      });

    if (error) {
      console.error(error);
      return [];
    }

    return data || [];
  };

  useEffect(() => {
    // Perform search when searchValue changes
    const performSearch = async () => {
      if (searchValue.trim() === "") {
        // If search query is empty, show all products
        setFilteredProducts(products);
      } else {
        // Use the searchProducts function to retrieve filtered products
        const filtered = await searchProducts(searchValue);
        setFilteredProducts(filtered);
      }
    };

    performSearch();
  }, [searchValue, products]);

  if (loading)
    return (
      <div>
        <Loader/>
      </div>
    );

  return (
    <div className="">
      <div className="flex justify-center mt-4 ">
        <UtilityBar />
      </div>
      <div className="flex flex-1">
        {/* <div className="w-[300px] mx-3"> */}
        <div className="mx-3">
          <Categories />
        </div>
        <div className="mt-6 mr-2 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
