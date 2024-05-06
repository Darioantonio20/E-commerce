import React, { useState, useCallback, memo } from 'react';
import { products } from '../js/dataProducts';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FormPay from '../components/FormPay';
import "../assets/style/Products.css";

function Products() {
    const [currentImageIndices, setCurrentImageIndices] = useState(Array(products.length).fill(0));

    const handlePrevClick = useCallback((productIndex) => {
      setCurrentImageIndices(prevIndices => {
        const newIndices = [...prevIndices];
        newIndices[productIndex] = newIndices[productIndex] > 0 ? newIndices[productIndex] - 1 : products[productIndex].imgSrc.length - 1;
        return newIndices;
      });
    }, []);

    const handleNextClick = useCallback((productIndex) => {
      setCurrentImageIndices(prevIndices => {
        const newIndices = [...prevIndices];
        newIndices[productIndex] = newIndices[productIndex] < products[productIndex].imgSrc.length - 1 ? newIndices[productIndex] + 1 : 0;
        return newIndices;
      });
    }, []);

    return ( 
        <>
            <NavBar isProductsPage={true}/>
            <div className='mt-5'>
                <FormPay/>
            </div>
            <div className="d-flex justify-content-center text-center">
                <div className="product-grid text-center mt-5 mb-5">
                    {products.map((product, index) => (
                        <ProductCard 
                            key={index} 
                            product={product} 
                            currentImageIndex={currentImageIndices[index]} 
                            handlePrevClick={() => handlePrevClick(index)} 
                            handleNextClick={() => handleNextClick(index)} 
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
     );
}

const ProductCard = memo(({ product, currentImageIndex, handlePrevClick, handleNextClick }) => (
    <div className="cardProduct">
        <div>
            <div className="image_container">
                <img className="img-fluid" loading='lazy' src={product.imgSrc[currentImageIndex]} />
            </div>
            <div className="size">
                <ul className="list-size">
                    <li className="item-list">
                        <button className="item-list-button" onClick={handlePrevClick}>&larr;</button>
                        <button className="item-list-button" onClick={handleNextClick}>&rarr;</button>
                    </li>
                </ul>
            </div>
        </div>
        <div className="title">
            <span>{product.title}</span>
        </div>
        <div className="action">
            <div className="price">
                <span>{product.price}</span>
            </div>
            <button className="cart-button">
                <svg className="cart-icon" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" strokeLinejoin="round" strokeLinecap="round"></path>
                </svg>
                <span>Generar PDF</span>
            </button>
        </div>
    </div>
));

export default Products;