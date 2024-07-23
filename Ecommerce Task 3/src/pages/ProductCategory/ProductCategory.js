'use client';
import React, {useEffect} from 'react';
import "./ProductCategory.css";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { getCategoryProducts, fetchCategoryProducts, getCategoryProductsStatus } from '../../lib/features/category/CategorySlice';
import Loader from '../../components/Loader/Loader';
import { STATUS } from '../../status';

const ProductCategory = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getCategoryProducts);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchCategoryProducts(category));
  }, [dispatch, category]);

  return (
    <div className='cat-products py-5'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md ls-1 fs-15' style={{marginBottom:15}}>
            <h3>Explore our <span className='text-capitalize'>{category.replace("-", " ")}</span></h3>
          </div>

          {
            categoryProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {categoryProducts} />
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCategory