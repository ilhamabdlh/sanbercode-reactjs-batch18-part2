import React, {Component} from "react";

class BuahLanjutan extends Component{

  render(){
    return(
      <tr>
        <td style={{textAlign:'center'}}>{this.props.item.nama}</td>
        <td style={{textAlign:'center'}}>{this.props.item.harga}</td>
        <td style={{textAlign:'center'}}>{this.props.item.berat} gram</td>
        <td style={{textAlign:'center'}}><button onClick={this.props.item.ubah}>Edit</button>
        <button onClick={this.props.item.ubah}>Delet</button>
        </td> 
      </tr>
    )
  }
}
export default BuahLanjutan