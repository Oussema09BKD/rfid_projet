import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/user/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//import LineChart from "../../components/caissier/LineChart";
import { Context } from "../../context/Context";
import axios from "axios";
const ObjectifDuVendeur = () => {
  const { user, dispatch } = useContext(Context);
  const [data, setData] = useState();

 
  useEffect(() => {
    axios.get('http://localhost:9000/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);
  

  return (
    <div>
      <Header />
      <SideBar />

      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Home</h1>
              </div>
              {/* /.col */}

              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="d-flex justify-content-around">
             
              {data?.map((item) => (
              <div className='card p-5'>
      <h2 className='card-title'>Box {item.reader}</h2>
      <p className='card-text'>état: <span className={item.etat === "p" ? "present" : "absent"}></span></p>
    </div>
      ))}
                         </div>
           
            
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ObjectifDuVendeur;
