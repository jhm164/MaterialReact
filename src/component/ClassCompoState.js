import React from "react";

export default class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
      count:0
    };
  }

  changeText(e) {
    e.preventDefault();
    console.log("changeText");
    if (this.state.message == "Hello") {
      // this.state.message="World"
      this.setState({ message: "World" });
      console.log(this.state.message);
    } else {
      // this.state.message="Hello"
      this.setState({ message: "Hello" });
    }
  }


  counter(){
      setInterval(()=>{
      this.setState({count:this.state.count+1})
    },1500)
  }


  componentDidMount(){
      this.counter()
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h5>Counter : {this.state.count}</h5>
        <br />
        <button onClick={(e) => this.changeText(e)}>Change</button>
      </div>
    );
  }
}
