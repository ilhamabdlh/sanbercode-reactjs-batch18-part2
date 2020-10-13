import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
        time: 100,
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerUS = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerUS);
  }

  tick() {
    this.setState({
 
      time: this.state.time -1
    });
  }


  render(){
    return(
      <>
        <h1 style={{textAlign: "right"}}>
            Hitung mundur: <space></space>
          { this.state.time}
        </h1>
      </>
    )
  }
}

export default Timer