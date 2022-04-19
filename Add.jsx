import {Component} from 'react';
import "./cal.css"

class Add extends Component
{
   /*  constructor(props) {
        super(props);
        this.state = {
            x: "",
            y: "",
            z:""
                  };
      } */
      state = {
        x: "",
        y: "",
        z:"",
        a:""
              };

    add = () =>{
        let num1 = parseInt(this.state.x);
        let num2 = parseInt(this.state.y);
        let ans = num1 + num2;
        this.setState({a:"+"})
        this.setState({z:ans});
    }
    substract = () =>{
        let num1 = parseInt(this.state.x);
        let num2 = parseInt(this.state.y);
        let ans = num1 - num2;
        this.setState({a:"-"})
        this.setState({z:ans});
    }
    multiply = () =>{
        let num1 = parseInt(this.state.x);
        let num2 = parseInt(this.state.y);
        let ans = num1 * num2;
        this.setState({a:"x"})
        this.setState({z:ans});
    }
    divide = () =>{
        let num1 = parseInt(this.state.x);
        let num2 = parseInt(this.state.y);
        let ans = num1 / num2;
        this.setState({a:"/"})
        this.setState({z:ans});
    }
    clear = () =>{
        this.setState({x:""});
        this.setState({y:""});
        this.setState({z:""});
    }
    render()
    {
         
        return(
            <div className='cal'>
            <input className='cal' type="number" onChange = { (e) => this.setState({ x: e.target.value })} value={this.state.x} />
            <h2>{this.state.a}</h2>
            <input className='cal' type="number" onChange = { (e) => this.setState({ y: e.target.value })} value={this.state.y} />
            <h2 id='total'>{this.state.z}</h2>
            <button className='cal' title='Add' onClick={this.add}>Add</button>
            <button className='cal' title='Substract' onClick={this.substract}>Substract</button>
            <button className='cal' title='multiply' onClick={this.multiply}>Multiply</button>
            <button className='cal' title='divide' onClick={this.divide}>Divide</button>
            <button className='cal' title='clear' onClick={this.clear}>Clear</button>
            
            </div>
        )
    }

}

export default Add;