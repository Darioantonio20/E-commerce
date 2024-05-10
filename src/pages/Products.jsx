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
        </div>
    </div>
));

export default Products;