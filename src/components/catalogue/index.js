import {collections} from "../../data/collection"
import ProductCard from "./ProductCard"
import Filters from "./Filter"
import { useState } from "react"
import Sorting from "./Sorting"
import { useMedia } from "react-use";
import Header from "../Header";

function ListingPage() {
  const [filteredCollection, setFilteredCollection] = useState(collections);
  const [showFilter, setShowFilter] = useState(false);
  const isMobile = useMedia('(max-width: 720px)');
  const isTab = useMedia("(max-width: 1220px)")
  return(
    isMobile ? <>
      <Header/>
      <div className="container mt-1">
        <div className="row">
        {
          filteredCollection.map((item) => {
            return (
              <div className="col-6 mb-5 p-0">
                <ProductCard {...item} isMobile={isMobile}/>
              </div>
            )
          })
        }
        </div>
      </div>
      <div className="d-flex position-sticky w-100 bottom-0 border-top bg-white">
        <Sorting collections={filteredCollection} setFilteredCollection={setFilteredCollection} isMobile={isMobile}/>
        <button className="btn border w-100 p-2 rounded-0" onClick={() => {setShowFilter(true)}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-funnel pb-1 me-2" viewBox="0 0 16 16">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
          </svg>Filter
        </button>
        <Filters collections={collections} setFilteredCollection={setFilteredCollection} isMobile={isMobile} setShowFilter={setShowFilter} showFilter={showFilter}/>
      </div>
    </> 
    : <div className="mx-5 px-5">
      <div className="d-flex justify-content-between py-4 px-3 shadow mb-4">
        <Filters collections={collections} setFilteredCollection={setFilteredCollection}/>
        <Sorting collections={filteredCollection} setFilteredCollection={setFilteredCollection}/>
      </div>
        <div className="container">
          <div className="row">
          {
            filteredCollection.map((item) => {
              return (
                <div className={`mb-5 ${isTab ? "col-3" : "col-2"}`}>
                  <ProductCard {...item} isTab={isTab}/>
                </div>
              )
            })
          }
          </div>
        </div>
    </div>
  )
}

export default ListingPage