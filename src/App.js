import React,{Component} from 'react';
import BuahBuah from '../src/Tugas-10/BuahBuah';
import BuahLanjutan from '../src/Tugas-10/BuahLanjutan';
import ListBuah from './Tugas-9/ListBuah';
import Timer from '../src/Tugas-11/TimerWaktu';
import Jam from '../src/Tugas-11/JamWaktu';
import Clock from '../src/Tugas-11/JamWaktu';

class App extends Component{
  render(){
    return(
      <>
      <ListBuah/>
      <BuahBuah/>
      <Timer/>
      <Clock/>
      </>
    )
  }
}
export default App;