import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 20,
      bgClass: "bg-green-700",
    };
    
  }
  addTemp () {
    if(this.state.temp >= 23) {
      this.setState({
        bgClass : "bg-red-400"
      }) 
    }
     if(19 <=this.state.temp && this.state.temp <= 23) {
      this.setState({
        bgClass : "bg-green-700"
      })
    }
    this.setState((prevState) => {
     return {temp: prevState.temp +1}
    })
  }
  reduceTemp () {
    if(this.state.temp <= 19) {
      this.setState({
        bgClass : "bg-sky-400"
      })
    }
    if(19 <=this.state.temp && this.state.temp <= 23) {
      this.setState({
        bgClass : "bg-green-700"
      })
    } 
    this.setState((prevState) => {
      return {temp: prevState.temp -1}
    })
  }
  render() {
    return (
      <>
        <div className="container mx-auto h-screen flex justify-center items-center">
          <div className="bg-cyan-600 w-96 rounded-xl h-[500px] p-10 flex flex-col justify-center items-center gap-10">
            <div className={`w-60 h-60 ${this.state.bgClass} rounded-full border-2 border-white flex justify-center items-center text-5xl text-white`}>{this.state.temp}</div>
            <div className="flex justify-between items-center w-full">
              <div onClick={this.addTemp.bind(this)} className="w-24 cursor-pointer h-24 bg-slate-500 rounded-full relative border-2 border-white flex justify-center items-center text-5xl text-white font-bold">+</div>
              <div onClick={this.reduceTemp.bind(this)} className="w-20 cursor-pointer h-20 bg-slate-500 rounded-full border-2 border-white flex justify-center items-center text-5xl text-white font-bold"> - </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
