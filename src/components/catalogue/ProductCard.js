import { Link } from "react-router-dom";

function ProductCard({primaryImage, supplierName, name, listingPrice, mrp, discount, isMobile, isTab}){
  return(
    <div>
      <Link to="/product-details">
        <img src={primaryImage?.webpImages?.lImage} width="100%" style={isMobile ? {maxHeight: "250px"} : isTab ? {maxHeight: "205px"} : {maxHeight: "220px"}}/>
      </Link>
      <div className="d-flex" style={{position :"relative"}}>
        <div>
          <div className="ms-2 mt-2 fw-bold font-size-14-16">{supplierName}</div>
          <div className="ms-2 fw-light font-size-12-14">{name}</div>
          <div className="ms-2"><span className="fw-bold font-size-12-14">Rs. {listingPrice}</span>&nbsp;&nbsp;<span className="font-size-12-14 opacity-50 text-decoration-line-through">Rs. {mrp}</span>&nbsp;&nbsp;<span className="text-warning font-size-12-14">({discount}%OFF)</span> </div>
        </div>
        <div className="m-2 ms-3 heart-productCard">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProductCard; 