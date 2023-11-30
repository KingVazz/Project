import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const AddOrder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Fungsi untuk menangani perubahan pada input pencarian
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Implementasi logika pencarian disini, misalnya dari API atau data statis
    // Contoh data statis untuk simulasi
    const mockData = ['Burger', 'Pizza', 'Salad', 'Pasta'];
    const results = mockData.filter(food => food.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  // Fungsi untuk menambahkan makanan ke pesanan
  const addFoodToOrder = (food) => {
    // Implementasikan logika penambahan makanan ke pesanan disini
    console.log(`Added ${food} to the order`);
  };

  return (
    <Layout>
      <div>
        <h1>Add Order</h1>
        <div>
          <label htmlFor="foodSearch">Search for food:</label>
          <input 
            type="text" 
            id="foodSearch" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Type to search..." 
          />
        </div>
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map(food => (
              <li key={food}>
                {food}
                <button onClick={() => addFoodToOrder(food)}>Add to Order</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AddOrder;
