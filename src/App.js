import React,{Component} from 'react';
import BuahBuah from '../src/Tugas-10/BuahBuahh';
import BuahLanjutan from '../src/Tugas-10/BuahLanjutan';
import ListBuah from './Tugas-9/ListBuah';
import Timer from '../src/Tugas-11/TimerWaktu';
import Jam from '../src/Tugas-11/JamWaktu';
import Clock from '../src/Tugas-11/JamWaktu';
import BuahBuahh from '../src/Tugas-12/NamaBuah';
import TambahBuah from '../src/Tugas-12/TambahBuah';

class App extends Component{
  render(){
    return(
      <>
      {/* <ListBuah/> */}
      <BuahBuahh/>
      {/* <Timer/>
      <Clock/> */}
      {/* <Lists/> */}
      
      <TambahBuah/>
      </>
    )
  }
}
export default App;