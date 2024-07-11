import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SummaryApi from "../../../common/Index";
import './categoryList.css'

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  // const [allCategories, setAllCategories] = useState('');
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    const response = await fetch(SummaryApi.categoryProduct.url);
    const dataResponse = await response.json();
    setLoading(false);
    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  {
    /* for all category start*/
  }

  // useEffect(() => {
  //   const allCategories = categoryProduct.map((prod, i) => {
  //     if (i !== 0) {
  //       return "&category=" + prod.category + "&";
  //     } else if (i === categoryProduct.length - 1) {
  //       return "&category=" + prod.category;
  //     } else {
  //       return "category=" + prod.category + "&";
  //     }
  //   });

  //   setAllCategories(allCategories)

  // }, [categoryProduct]);

  const allCategoriesquarry = useMemo(() =>
      categoryProduct.map((prod, i) => {
        if (i !== 0) {
          return "&category=" + prod.category + "&";
        } else if (i === categoryProduct.length - 1) {
          return "&category=" + prod.category;
        } else {
          return "category=" + prod.category + "&";
        }
      }),
    [categoryProduct]
  );

  // setAllCategories(allCategories)
  {
    /* for all category ende*/
  }

  return (
    <div className="container-fluid  pt-5 category-bg-color ">
    
      <div className=" my-4 d-flex">
        {loading && <p>Loading...</p>}
        {!loading &&
          categoryProduct.map((product, index) => (
            <div key={index} className= " w-25 h-25 ">
              <Link
                to={"/product-category?category=" + product?.category}
                className="textdecor h5 "
              >
                <div className="text-center rounded-circle ">
                  <img
                    src={product?.productImage[0]}
                    alt={product.category}
                    className=" w-25 h-25 rounded-circle "
                  />
                </div>
                <div className="text-center py-2 text-capitalize">
                  {product.category}
                </div>
              </Link>
            </div>
          ))}
      </div>

      {/* for all category */}
<div className="">
  
<Link to={`/product-category?${allCategoriesquarry}`}>
        <div className="textdecor">All categories</div>
      </Link>
</div>
      {/* for all category */}
    </div>
  );
};

export default CategoryList;
