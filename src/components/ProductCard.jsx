import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import Button from './Button';


const ProductCard = (props) => {

    const {data, onAddToCart} = props
    console.log(data);
    

    const {
        id,
        title,
        category,
        description,
        price,
        images,
    } = props.data


    return (
        <div className='w-96 bg-white rounded-xl shadow-lg flex flex-col justify-betweens'>
            <img src={`${images[0]}.jpeg`} alt="image" className='w-full h-60 object-cover rounded-xl'/>
            <div className="px-5">
            <h6 className='text-md font-semibold mt-5 text-gray'>{title}</h6>
                <p className='text-gray-500 text-sm'>{category.name}</p>
                <p className='text-gray-500 text-sm line-clamp-2 mt-2'>{description}</p>
            
            <div className="mt-4 flex justify-between items-center p-5">
                <span className='text-lg font-bold text-gray-900'>${price}</span>
                <Button onClick={() => onAddToCart(data)}>add to cart</Button>
            </div>
            </div>
        </div>
    )
}

export default ProductCard