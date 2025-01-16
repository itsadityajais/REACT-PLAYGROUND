import React, { useEffect, useState } from "react";
import "./loadMoreStyles.css";

function Product({ products, onLoadMore }) {
  return (
    <div className="container">
      <div className="product-container">
        {products.map((eachProduct) => {
          return (
            <div className="product">
              <img width="100%" src={eachProduct.thumbnail}></img>
              <p>{eachProduct.title}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            onLoadMore();
          }}
        >
          Load More Products
        </button>
      </div>
    </div>
  );
}

export function LoadMore() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  function onLoadMore() {
    setCount((prevCount) => prevCount + 20);
  }

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count}`
      );
      const serverData = await response.json();
      setData(serverData);
      setIsLoading(false);
    };
    loadData();
  }, [count]);

  if (isLoading) {
    return <div>Loading Data.....</div>;
  }
  return (
    <div>
      <Product products={data.products} onLoadMore={onLoadMore} />
    </div>
  );
}

// /__________RENDER

// Initialization of hooks and variables (isLoading:true, data:{})

// return JSX

// useEffect

// /__________UPDATE (RE-RENDER)

// Updated the hooks and variables values (isLoading:false, data:{products:{},total:20,currPage:1})

//  return JSX

// useEffect Cleanup function
