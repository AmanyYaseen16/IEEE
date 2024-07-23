'use client';
import React, {useEffect} from 'react';
import "./Search.css";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';
import { STATUS } from '../../status';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';
import { fetchSearchProduct, getSearchedProducts, getSearchProductsStatus, clearSearch } from '../../lib/features/search/SearchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const {searchTerm} = useParams();
  const searchProducts = useSelector(getSearchedProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchSearchProduct(searchTerm));
  }, [searchTerm]);

  if(searchProducts.length === 0){
    return (
      <div className='container' style = {{
        minHeight: "70vh"
      }}>
        <div className='fw-4 text-dg py-5 text-capitalize ls-1 fs-16' style={{marginTop:15}}>
          <h3>No Products found!</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className='search-content'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md ls-1 text-capitalize fs-15'>
              <h3>Search results :</h3>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Search;