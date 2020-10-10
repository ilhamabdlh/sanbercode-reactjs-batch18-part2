import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from "../App";

class TugaSembilan extends React.Component {
    render() {
      return <h1> {this.props.judul}</h1>;
    }
  }
  
  <div>
        <header>
          <form style={{width:"50%", borderRadius:'20px', padding:"30px" , margin:"0 auto", border:"3px solid"}}> 
          
          <h1 style={{textAlign: "center"}}> Form Pembelian Buah</h1>
            <h3 style= {{width:"180px", margin:"0 auto", display:"inline-flex"}}>Nama Pelanggan  </h3>
            <label>
            <input type="text" name="input" style={{marginLeft:"50px", width:"200px"}} /> <br></br>
            </label>
            <br></br>
            <label style={{marginLeft:"90px", width:"200px", display:"inline-block"}}>
            <input type="checkbox" />Semangka</label>
            <br/>
            <label style={{marginLeft:"53px", width:"200px", display:"inline-block"}}>
            <input type="checkbox" name="Jeruk" value=""/>Jeruk </label>
            <br/>
            <label style={{marginLeft:"61px", width:"200px", display:"inline-block"}}>
              <input type="checkbox" name="Nanas" value=""/>Nanas </label>
            <br/>
            <label style={{marginLeft:"52px",}}>
              <input type="checkbox" name="Salak"/>Salak </label>
            <br/>
            <h3 style={{marginRight:"65px ", width:"186px", display:"inline-block"}}>Daftar Item  </h3>
            <label style={{marginRight:"57px", width:"200px", display:"inline-flex"}}>
              <input type="checkbox" />Anggur </label>
            <br/>
            <button type="submit" style={{borderRadius:'20px', float:"left"}}>Kirim!</button>
          </form>
        </header>
      </div>
    ;
  

export default tugas9;