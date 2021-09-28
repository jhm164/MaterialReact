import React from "react";
// import exports from 'webpack';

//code reusablity
export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    console.log("Class Props",props)
  }
 
  render() {
    return <div >
       <CardImage img={this.props.img} />
        <h1>Name : {this.props.name}</h1>
        <h5>ADDRESS : {this.props.address}</h5></div>;
  }
}

//avoid css repetation
//jsx reusabity
function CardImage(props){

    return  <img src={props.img} height="200" width="200" />

}