import { useEffect, useState } from "react"
import Modal from "react-bootstrap/Modal";

function Filter({collections, setFilteredCollection, isMobile, setShowFilter, showFilter}){
  const [filterName, setFilterName] = useState(isMobile ? "suppliers" : "");
  const [markedSuppliers, setMarkedSuppliers] = useState([]);
  const [markedSareeFabric, setMarkedSareeFabric] = useState([]);
  const suppliers = [];
  const sareeFabric = [];

  useEffect(() => {
    let finalArray = collections;
    if(markedSuppliers.length > 0){
      finalArray = collections.filter((item) => {
        return markedSuppliers.indexOf(item.supplierName) >= 0; 
      })
    }
    if(markedSareeFabric.length > 0){
      finalArray = finalArray.filter((item) => {
        return markedSareeFabric.indexOf(item.sareeFabric) >= 0; 
      })
    }
    setFilteredCollection(finalArray);
  },[markedSuppliers, markedSareeFabric])

  collections.map((item) => {
    if(suppliers.indexOf(item.supplierName) === -1){
      suppliers.push(item.supplierName);
    }
    if(sareeFabric.indexOf(item.sareeFabric) === -1){
      sareeFabric.push(item.sareeFabric);
    }
    return 0
  });

  const onChange = (e, name, filterType) => {
    filterType === 'suppliersFilter'
      ? e.target.checked
        ? setMarkedSuppliers((prevState) => [...prevState, name])
        : setMarkedSuppliers((prevState) => {
            const x = [...prevState];
            x.splice(x.indexOf(name), 1);
            return x;
          })
      : e.target.checked
          ? setMarkedSareeFabric((prevState) => [...prevState, name])
          : setMarkedSareeFabric((prevState) => {
              const x = [...prevState];
              x.splice(x.indexOf(name), 1);
              return x;
            })
  };

  if(isMobile){
    return (
      <Modal
        data-wg-notranslate
        show={showFilter}
        onHide={() => { setShowFilter(false)}}
        backdropClassName={"w-100"}
        dialogClassName={`m-0`}
        scrollable={true}
      >
        <Modal.Header className={``}>
          <Modal.Title
            className=" mt-0"
            id="contained-modal-title-vcenter"
          >
            Filter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 pb-3">
          <div className="d-flex">
            <div className="" style={{backgroundColor: "#f5f5f6"}}>
              <div className={`font-size-14 p-2 ${filterName === "suppliers" ? "bg-white" : ""}`} onClick={() => {setFilterName("suppliers")}}>Suppliers</div>
              <div className={`font-size-14 p-2 ${filterName === "sareeFabric" ? "bg-white" : ""}`} onClick={() => {setFilterName("sareeFabric")}}>Saree Fabric</div>
            </div>
            <div style={{height: "25vh"}}>
              <div className="d-flex">
                { filterName === "suppliers" && <div className="bg-white ml-2 p-2">
                  {
                    suppliers.map((item) => {
                      return(
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={markedSuppliers.indexOf(item) >= 0}
                            onChange={(e) => {onChange(e, item, 'suppliersFilter')}}
                          />
                          <label className="form-check-label font-size-14">{item}</label>
                        </div>
                      )
                    })
                  }
                </div>}
                {filterName === "sareeFabric" && <div className="bg-white ml-2 p-2">
                  {
                    sareeFabric.map((item) => {
                      return(
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={markedSareeFabric.indexOf(item) >= 0}
                            onChange={(e) => {onChange(e, item, 'sareeFabricFilter')}}
                          />
                          <label className="form-check-label font-size-14">{item}</label>
                        </div>
                      )
                    })
                  }
                </div>}
              </div>
            </div>
          </div>
          <div className="btn w-100 border" style={{backgroundColor: "#f5f5f6"}} onClick={() => {setShowFilter(false)}}>close</div>
        </Modal.Body>
      </Modal>
    )
  }

  return(
    <div>
      <button className="btn filter-btn"
        onMouseEnter={() => {setFilterName("suppliers")}}
        onMouseLeave={() => {setFilterName("")}}
      >
          Suppliers
      </button>
      <button className="btn filter-btn" 
        onMouseEnter={() => {setFilterName("sareeFabric")}}
        onMouseLeave={() => {setFilterName("")}}
      >
          Saree Fabric
      </button>
      <div className="d-flex">
        {filterName === "suppliers" &&  <div className="position-absolute bg-white ml-2 p-2" 
            onMouseEnter={() => {setFilterName("suppliers")}}
            onMouseLeave={() => {setFilterName("")}}>
          {
            suppliers.map((item) => {
              return(
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={markedSuppliers.indexOf(item) >= 0}
                    onChange={(e) => {onChange(e, item, 'suppliersFilter')}}
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              )
            })
          }
        </div>}
        {filterName === "sareeFabric" && <div className="position-absolute bg-white ml-2 p-2" style={{left: "14%"}}
            onMouseEnter={() => {setFilterName("sareeFabric")}}
            onMouseLeave={() => {setFilterName("")}}
          >
          {
            sareeFabric.map((item) => {
              return(
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={markedSareeFabric.indexOf(item) >= 0}
                    onChange={(e) => {onChange(e, item, 'sareeFabricFilter')}}
                  />
                  <label className="form-check-label">{item}</label>
                </div>
              )
            })
          }
        </div>}
      </div>
    </div>
  )
}

export default Filter