import React from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  const res1 = list[0].productList1;
  const res2 = list[1].productList2;
  // console.log(res2)
  return (
    <section>

      <div className="container-fuild">
        <div className="col-md-12">
          <div className="row">

            <div className="col-md-12">
              <center><button className='btn btn-secondary my-4 p-2' style={{ fontWeight: 'bold' }} >Cosmetics Prducts</button></center>
              <div className="row">

                {
                  res1.map((item, ...input) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                  ))}

              </div>
            </div>

            <div className="col-md-12">
              <center><button className='btn btn-secondary my-4 p-2' style={{ fontWeight: 'bold' }} >Household Prducts</button></center>
              <div className="row">

                {
                  res2.map((item, ...input) => (
                    <Cards key={item.id} item={item} handleClick={handleClick} />
                  ))}

              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Amazon;
