'use client';
import React, {useEffect} from 'react';
import './HomePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,getProducts,getProductsStatus} from '../../lib/features/product/ProductSlice.js';
import {getCategories } from '@/lib/features/category/CategorySlice';
import {STATUS} from "../../status";

import ProductList from '@/components/ProductList/ProductList';
import Loader from '@/components/Loader/Loader';


const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  console.log(categories);


  useEffect(() => {
    dispatch(fetchProducts(40))
  }, []);

  const products = useSelector(getProducts);
  //console.log(products)
  const productStatus = useSelector(getProductsStatus)

      // to randomiza the products  
      const RandomProducts = [];
      if(products.length > 0){
        for(let i in products){
          let randomIndex = Math.floor(Math.random() * products.length);
    
          while(RandomProducts.includes(products[randomIndex])){
            randomIndex = Math.floor(Math.random() * products.length);
          }
          RandomProducts[i] = products[randomIndex];
        }
      }

      let categoryOneP = products.filter(product => product.category === categories[0]);
      let categoryTwoP = products.filter(product => product.category === categories[1]);
      let categoryThreeP = products.filter(product => product.category === categories[2]);

  return (
    <main>
      <div className='main-content'>
        <div className='container'>
          <div className='categories'>
            <div className='categ-item'>
              <div className='main-title'>
                <h3 className='ls-2'>Explore Products</h3>
              </div>

              {productStatus === STATUS.LOADING ? <Loader />
              : <ProductList products={RandomProducts}/>}
              </div>

              <div className='categ-item'>
                <div className='main-title'>
                  <h3 className='ls-2'> {categories[0]} </h3>
                </div>
                {productStatus === STATUS.LOADING ? <Loader /> 
              : <ProductList products = {categoryOneP}/>}
              </div>


            <div className='categ-item'>
              <div className='main-title'>
                <h3 className='ls-2'> {categories[1]} </h3>
              </div>
                {productStatus === STATUS.LOADING ? <Loader /> 
              : <ProductList products = {categoryTwoP}/>}
            </div>

            
            <div className='categ-item'>
              <div className='main-title'>
                <h3 className='ls-2'> {categories[2]} </h3>
              </div>
                {productStatus === STATUS.LOADING ? <Loader /> 
              : <ProductList products = {categoryThreeP}/>}
            </div>
        </div>
              </div>
              </div>
              </main>
  )
}

export default HomePage