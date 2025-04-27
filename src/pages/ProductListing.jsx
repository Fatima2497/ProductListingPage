import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { productDataList } from '../utils/data'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import SortFilter from '../components/SortFilter'
import CartPopup from '../components/CartPopup'


const ProductListing = () => {


    const [searchItem, setSearchItem] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [sortOrder, setSortOrder] = useState('')
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    let filteredProducts = productDataList.filter(product =>
        (product?.title || '')?.toLowerCase().includes(searchItem?.toLowerCase())
    );


    if (selectedCategory) {
        filteredProducts = filteredProducts?.filter(product =>
            product?.category?.name === selectedCategory
        )
    }

    if (sortOrder === 'lowToHigh') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'highToLow') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
    }


    const productsToShow = filteredProducts

    const handleAddToCart = (product) => {
        console.log(product);
        
        setCartItems((prevCartItems) => {
          const existingProduct = prevCartItems.find(item => item.id === product.id);
          if (existingProduct) {
            return prevCartItems.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCartItems, { ...product, quantity: 1 }];
          }
        });
        setIsCartOpen(true);
      };
      
    
      const handleIncreaseQuantity = (product) => {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      }

      const handleDecreaseQuantity = (product) => {
        setCartItems((prevItems) =>
          prevItems
            .map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0)
        );
      };



    return (
        <>
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-white px-10 py-10 rounded-lg shadow-lg ">
                    <SearchBar
                        searchItem={searchItem}
                        onSearchChange={setSearchItem}
                    />
                    <CategoryFilter
                        selectedCategory={selectedCategory}
                        onSelectedCategory={setSelectedCategory}
                    />

                    <SortFilter
                        sortOrder={sortOrder}
                        onSortChange={setSortOrder}
                    />

                </div>

                <div className="col-span-2">
                    <div className='w-full mx-auto py-2 grid grid-cols-2 gap-5'>
                        {
                            productsToShow.length > 0 ? (
                                productsToShow.map((elem, index) => (
                                    <ProductCard
                                        key={index}
                                        data={elem}
                                        onAddToCart={handleAddToCart}
                                    />
                                ))
                            ) : (
                                <p className="text-red-400 text-center col-span-2 text-base text-semibold ">
                                    No products found.
                                </p>
                            )
                        }
                    </div>
                </div>


            </div>

            {/* CART POPUP */}
            {isCartOpen && (
                <CartPopup
                    cartItems={cartItems}
                    onClose={() => setIsCartOpen(false)}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                />
            )}

        </>
    )
}

export default ProductListing

