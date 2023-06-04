import Header from "./Header";
import {product} from "../data/product"
import { useMedia } from "react-use";

function Details() {
  const {primaryImage, supplierName, name, listingPrice, mrp, discount} = product;
  const isMobile = useMedia('(max-width: 720px)');
  const isTab = useMedia("(max-width: 1220px)")
  return (
    <div className={`m-auto ${isMobile ? "w-100" : isTab ? "w-75": "w-50"}`}>
      <Header page={"details"} supplierName={supplierName}/>
      <img className="mt-2" src={primaryImage?.webpImages?.lImage} width="100%"/>
      <div className="mx-3">
        <div className="my-2">
          <div className="fw-light fs-6">{name}</div>
          <div className="my-1"><span className="fw-bold fs-6">Rs. {listingPrice}</span>&nbsp;&nbsp;<span className="font-size-14-16 opacity-50">MRP&nbsp;</span><span className="font-size-14-16 opacity-50 text-decoration-line-through">Rs. {mrp}</span>&nbsp;&nbsp;<span className="text-danger font-size-14-16">({discount}%OFF)</span> </div>
          <div className="fw-bold font-size-14-16 text-success">Inclusive of all taxes</div>
        </div>
        <div className="hr-strip my-3"></div>
        <div class="padding-md delivery-options-container ">
          <header class="card-header">
            <h4 class="card-title">CHECK DELIVERY &amp; SERVICES</h4>
          </header>
          <div>
            <div class="pincode-box pincode-input">
              <input type="tel" placeholder="Enter a PIN code" value=""/>
              <button type="submit" class="pincode-btn" style={{color: "rgb(191, 192, 198"}}>CHECK</button>
            </div>
          </div>
          <ul class="list-unstyled delivery-info-list"></ul>
          <ul class="delivery-descriptors list-unstyled">
            <li className="delivery-available">Pay on delivery might be available</li>
          </ul>
        </div>
      </div>
      <div className="d-flex px-3 py-2 position-sticky w-100 bottom-0 border-top bg-white">
        <button className="btn border w-100 m-1 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart pb-1 me-2" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg> Wishlist
        </button>
        <button className="btn border w-100 m-1 p-2 bg-danger text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag pb-1 me-2" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>Add to bag
        </button>
      </div>
    </div>
  )
}

export default Details;