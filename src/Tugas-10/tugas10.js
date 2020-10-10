import React from 'react';
import tugas9 from '../Tugas-9/tugas9';
import App from '../App';
import tugas10 from '../Tugas-10/tugas10';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]



class TableInfo extends React.Component {
    render(){
        return(
            <>
            {dataHargaBuah.map(item=>{
                return(
                    <h1 style={{textAlign:"center", marginTop:"20px", margin:"0 auto"}}>Tabel Harga Buah</h1>
                    <table style={{border:'1px solid', marginTop:'20px', margin:'0 auto'}}>
                        <tr style={{ color:'gray', }} >
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Berat</td>
                        </tr>
                        <tr style={{margin: '0 auto', color:"orange", padding:"5px"}}>
                            <td>{this.props.nama}</td>
                            <td>{this.props.harga}</td>
                            <td>{this.props.berat}</td>
                        </tr>
                        <tr style={{margin: '0 auto', color:"orange", padding:"5px"}}>
                            <td>{this.props.nama}</td>
                            <td>{this.props.harga}</td>
                            <td>{this.props.berat}</td>
                        </tr>
                        <tr>
                            <td>{this.props.nama}</td>
                            <td>{this.props.harga}</td>
                            <td>{this.props.berat}</td>
                        </tr>
                        <tr style={{margin: '0 auto', color:"orange", padding:"5px"}} >
                            <td>{this.props.nama}</td>
                            <td>{this.props.harga}</td>
                            <td>{this.props.berat}</td>
                        </tr>
                        <tr style={{margin: '0 auto', color:"orange", padding:"5px"}}>
                            <td>{this.props.nama}</td>
                            <td>{this.props.harga}</td>
                            <td>{this.props.berat}</td>
                        </tr>
                    </table>
                )
            })
            }
            </>
        )
    }
}


export default tugas10