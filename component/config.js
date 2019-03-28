 import React ,{ Component } from "react";
// import Show from './show.png';
// import Hide from './hide.png';
// import './config.css';
import Header from "./header";
import Mqtt from './mqtt';

class Config extends Component{
    constructor(props){
        super(props);
        this.state={
            ssid:"",
            password:"",
            toggleImage:"Hide"
        }
    }

    ssidChange=(event)=>{
        this.setState({
            ssid:event.target.value
        })
    }

    toggleImage = (event) => {
		event.preventDefault();
		this.setState({ toggleImage: !this.state.toggleImage });
    };

    onSubmit=(event)=>{
        event.preventDefault();
    }

    onMove=(event)=>{
        
        if(event.target.name === "configuration"){
            this.props.history.push('/config');
        }
        else if(event.target.name === "dashboard"){
            this.props.history.push('/dashboard');
        }
        else if(event.target.name === "personal"){
            this.props.history.push('/personal');
        }
        else if(event.target.name === "schedule"){
            this.props.history.push('/schedule');
        }
        else if(event.target.name === "notification"){
            this.props.history.push('/notification');
        }
        else if(event.target.name === "setting"){
            this.props.history.push('/setting')
        }
    }

    render(){
        return(
            <div className="configurat">
            <Header onConfig={this.onMove}/>
                    <div className="config">
                    <h4 className="h5">Configuration</h4>
                    <Mqtt/>
                    {/* <p><input type="text" className="ssid" required placeholder="Enter your SSID" onChange={this.ssidChange} /></p>
                    <p><input className="pass2" placeholder="Enter Your Password" type={this.state.toggleImage ? 'password' : 'text'} />
				    <button className="bt1" onClick={(event) => this.toggleImage(event)}>
				    <img src={this.state.toggleImage ? Hide : Show} className="passwordImg" alt="toogle" />
				    </button></p>
                    <button type="submit" className="bt2" onClick={this.onSubmit}><b>OK</b></button> */}
                    </div>
                </div>
        );
    }
}
export default Config;