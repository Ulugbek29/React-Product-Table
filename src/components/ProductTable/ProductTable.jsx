import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Loader from "../common/Loader/Loader";
import Product from "./components/Product";


const API_BASE = "https://dummyjson.com/products";

// const options = [];

//Variables

function ProductTable() {
  let initialLimit = 10;
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);
  const [limit,setLimit] = useState(10)
  const [options, setOptions] = useState([])

  // Responsible for rendering the data
  useEffect(() => {
    if (!products) {
      return;
    }
    fetchData(limit);
  }, [limit]); // error

  // Responsible for rendering searched data
  useEffect(() => {
    searchData(searchProduct);
  }, [searchProduct]);


  // Responsible for rendering all Categories
  useEffect(()=> {
    getAllCategories()
  },[])

  // Gets all data from api
  const fetchData = (limit=initialLimit) => {
    setLoading(true);
    axios
      .get(`${API_BASE}?limit=${limit}&skip=0`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(products)
  // Searchs product by getting from input value
  const searchData = (value) => {
    setLoading(true);
    axios
      .get(`${API_BASE}/search?q=${value}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  // Getting all categories from the appi
const getAllCategories = () => {
  axios
  .get(`${API_BASE}/categories`)
  .then((res)=> {
    setCategories(res.data)
    setOptions(res.data.map(el => ({label: el, value: el})))
  })
   
  .catch((err)=> console.log("Category Error", err))
}

// pushing categories to the options array
// const convertCategoriesToTheOptions = ()=> {
//   categories.map((category)=> {
//     options.push({value: category, label: category})
//   })
// }
// convertCategoriesToTheOptions()


// Select category 
const selectCategory = (category) => {
  console.log(category)
  axios
  .get(`${API_BASE}/category/${category.value}`)
  .then((res)=> {
    console.log(res.data.products)
    setProducts(res.data.products)
  })
}


const showMoreProducts = ()=> {
  setLimit(prev=> prev+10)
}

  return (
    <>
      <div className="w-full h-full">
        <div className="flex gap-x-4 bg-white py-4 px-[10%]">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="p-1 border-2 border-slate-400 rounded-md outline-blue-500"
              placeholder="Search..."
              onChange={(e) => setSearchProduct(e.target.value)}
              value={searchProduct}
            />
          </form>
          <Select className="w-[200px]" options={options} onChange={selectCategory}/>
        </div>

        <div className=" p-8">
          <div className="w-full min-h-[500px] flex flex-col items-start gap-y-4 bg-white p-4 rounded-2xl">
            {loading ? (
              <Loader visible={loading} />
            ) : products ? (
              <Product products={products} />
            ) : (
              <h1>No Products available at the moment</h1>
            )}
            <button onClick={showMoreProducts} className="p-4 bg-blue-500 rounded-lg text-white hover:opacity-90">Show More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductTable;
