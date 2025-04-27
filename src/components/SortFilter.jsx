// SortFilter.jsx
import React from 'react';

const SortFilter = ({ sortOrder, onSortChange }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl capitalize font-bold mb-5">Sort by Price</h3>
      <div className="space-y-3">
        <div>
          <input
            type="radio"
            id="lowToHigh"
            name="sort"
            value="lowToHigh"
            checked={sortOrder === 'lowToHigh'}
            onChange={(e) => onSortChange(e.target.value)}
          />
          <label htmlFor="lowToHigh" className="ml-2">Low to High</label>
        </div>

        <div>
          <input
            type="radio"
            id="highToLow"
            name="sort"
            value="highToLow"
            checked={sortOrder === 'highToLow'}
            onChange={(e) => onSortChange(e.target.value)}
          />
          <label htmlFor="highToLow" className="ml-2">High to Low</label>
        </div>
      </div>
    </div>
  );
};

export default SortFilter;
