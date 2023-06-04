import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Sorting({collections, setFilteredCollection, isMobile}) {
  const [action, setAction] = useState("");
  const handleItemClick = (eventKey) => {
    setAction(eventKey);
    const sortedArray = collections.sort((a, b) => {
      if(eventKey === 'priceLowHigh'){
        return a.listingPrice - b.listingPrice
      } else if(eventKey === 'priceHighLow'){
        return b.listingPrice - a.listingPrice
      } 
      return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    })
    setFilteredCollection([...sortedArray]);
  };

  return (
    <Dropdown onSelect={handleItemClick} className={`p-2 ${isMobile ? "w-100" : ""}`}>
      <Dropdown.Toggle variant="primary" id="dropdown-hover" className='bg-white text-dark border-dark rounded-0 border-0 w-100'>
        {
          isMobile ? <>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-sort-up pb-1 me-2" viewBox="0 0 16 16">
              <path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707V12.5zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
            </svg> Sort</> 
            : action === "priceLowHigh" 
            ? "Sort by : Price low to high" 
            : action === "priceHightLow" 
            ? "Sort by : Price high to low" 
            : "Sort by : Name Ascending"
        }
      </Dropdown.Toggle>
      <Dropdown.Menu className='w-100'>
        <Dropdown.Item eventKey="priceLowHigh">Price low to high</Dropdown.Item>
        <Dropdown.Item eventKey="priceHighLow">Price high to low</Dropdown.Item>
        {/* <Dropdown.Item eventKey="rating">Rating high to low</Dropdown.Item> */}
        <Dropdown.Item eventKey="name">Name Ascending</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Sorting;