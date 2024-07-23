import React from 'react';
import "./Product.css";
import { useRouter } from 'next/navigation';

const Product = ({product}) => {
  
  const router = useRouter();
    const formatPrice = (price) => {
      return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: "USD"
      }).format(price);
  }

  const handleProductClick = (id) => {
    router.push(`/product/${id}`)
  }
      //console.log(product);
    return (
      <div key={product?.id} onClick={() => handleProductClick(product.id)}>
        <a>
        <div className='product-item'>
              <div className='category fw-3'>{product?.category}</div>
              <div className='pr-item-img'>
                  <img className='pr-cover' src={product?.images[0]} alt={product.title}/>
              </div>
              <div className='pr-item-info fs-14'>
                  <div className='brand'>
                      <span style={{fontWeight:600}}>Brand: </span>
                      <span className='fw-4'>{product?.brand || 'Unknown'}</span>
                  </div>
                  <div className='title'>
              {product?.title}
            </div>
            <div className='price flex'>
  
              <span className='new-price'>
                {formatPrice(product?.discountPrice)}
              </span>
  
              <span className='old-price'>
                {formatPrice(product?.price)}
              </span>
            
              <span className='discount fw-6'>
                ({product?.discountPercentage}% Off)
              </span>
            </div>
              </div>
          </div>
        </a>
          
      </div>
    )
  }
  
  export default Product