import React, {Component} from "react"
import BuahBuahh from '../Tugas-12/NamaBuah'

class TambahBuah extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        namaBuah : [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ],
          inputName: ""
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState(
          {inputName: event.target.value},
          {harga: event.target.value},
          {berat: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.inputName)
        console.log(this.state.harga)
        console.log(this.state.berat)
        this.setState({
            namaBuah: [...this.state.namaBuah, this.inputName],
            inputName: ""
        })
      
    }
  
    render() {
      return (
        <form style={{textAlign:'center', width:'40%', margin:'0 auto'}} onSubmit={this.handleSubmit}>
          <label style={{textAlign:"center"}}>
            <a>Nama :<space></space></a>
            <input type="text" value={this.state.nama} onChange={this.handleChange} /><br></br>
            <a>Harga :<space></space></a>
            <input type="text" value={this.state.harga} onChange={this.handleChange} /><br></br>
            <a>Beratt :<space></space></a>
            <input type="text" value={this.state.berat} onChange={this.handleChange} /><br></br>
          </label>
          <input type="submit" value="Submit" />
        </form>
        
      );
    }
  }
  export default TambahBuah