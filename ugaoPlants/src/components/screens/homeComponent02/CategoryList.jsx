import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SummaryApi from "../../../common/Index";
import './categoryList.css'

const CategoryList = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
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

  return (
    <div className="container-fluid p-0 m-0">
      <div className="category-bg-color d-flex justify-content-center">
        {loading && <p>Loading...</p>}
        {!loading && (
          <div className="category-scroll-container">
            {categoryProduct.map((product, index) => (
              <div key={index} className="category-img-box-out">
                <Link
                  to={"/product-category?category=" + product?.category}
                  className="textdecor h5"
                >
                  <div className="text-center category-img-box">
                    <img
                      src={product?.productImage[0]}
                      alt={product.category}
                      className="category-img"
                    />
                  </div>
                  <div className="text-center py-2 text-capitalize">
                    {product.category}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <Link to={`/product-category?${allCategoriesquarry}`}>
          <div className="textdecor">All categories</div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
