import React, {Component} from 'react'

class Jam extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount(){
        this.timerID= setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Sekarang Jam <n></n>:<n></n> {this.state.date.toLocaleTimeString()} PM </h1>
        </div>
      );
    }
  }
  
  class Clock extends Component{
      render (){
          return(
              <>
              <Jam/>
              </>
          )
      }
  }
  export default Clock;