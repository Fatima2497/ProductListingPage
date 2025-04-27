import React from 'react'
import { categoryList } from '../utils/data'

const CategoryFilter = ({ selectedCategory, onSelectedCategory }) => {
    return (
        <div className='mt-10'>
            <h3 className="text-xl capitalize font-bold mb-5">Categories</h3>
            <ul className="space-y-3">
                <li>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="radio"
                            name="category"
                            value=""
                            checked={selectedCategory === ''}
                            onChange={() => onSelectedCategory('')}
                            className="accent-blue-500"
                        />
                        <span>All</span>
                    </label>
                </li>

                {
                    categoryList.map((elem, index) => (
                        <li key={index}>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"          
                                    value={elem.name}
                                    checked={selectedCategory === elem.name}
                                    onChange={() => onSelectedCategory(elem.name)}
                                    className="accent-blue-500"
                                />
                                <span>{elem.name}</span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryFilter
