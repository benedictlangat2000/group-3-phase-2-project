import React, { useState, useEffect } from 'react';

function OrderTracking(props) {
  const [orders, setOrders] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching orders from an API or database
    setIsLoading(true);
    setTimeout(() => {
      const fetchedOrders = [
        { id: 1, customerName: 'Mercy Chep', status: 'Delivered' },
        { id: 2, customerName: 'Obadia Maasai', status: 'In Transit' },
        { id: 3, customerName: 'Michael Mutunga', status: 'Delivered' },
        { id: 4, customerName: 'Sharon Asaja', status: 'Delivered' },
        { id: 5, customerName: 'Benedict Langat', status: 'To be delivered with 4 working days' },
      
      ];
      setOrders(fetchedOrders);
      setIsLoading(false);
    }, 2000); // Simulate a delay for fetching data
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    // Filter orders based on the search text
    const filteredOrders = orders.filter((order) =>
      order.customerName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredOrders);
  }, [searchText, orders]);

  const handleSearch = () => {
       //  filter orders by customerName
    setSearchResults(
      orders.filter((order) =>
        order.customerName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div>
      <h1>Order Tracking</h1>
      <input
        type="text"
        placeholder="Enter Customer Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      {isLoading ? (
        <p>Loading orders...</p>
      ) : (
        <div>
          {searchResults.length > 0 ? (
             searchResults.map((order) => (
               <div key={order.id}>
             <p>Customer Name: {order.customerName}</p>
               <p>Status: {order.status}</p>
       </div>
           ))
       ) : (
         <p>No orders found.</p>
     )}

        </div>
      )}
    </div>
  );
}

export default OrderTracking;
