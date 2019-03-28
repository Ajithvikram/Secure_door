import React, {Component} from 'react';
import Paho from 'paho-mqtt';


class MQTT1 extends Component{
  constructor(props){
    super(props);
      this.State={
        ipaddress:"",
        port:"",
        userid:""
      }
  }

  ipaddressChange=(event)=>{
      this.setState({
        ipaddress:event.target.value
      });
  }

  portChange=(event)=>{
    this.setState({
      port:event.target.value
    });
  }

  useridChange=(event)=>{
    this.setState({
      userid:event.target.value
    });
  }

  onSubmit=()=>{
      var client;
      var timeout = 2000;
      console.log(this.state.ipaddress+this.state.port+ this.state.userid)

     const onConnect = () => {
      client = new Paho.Client(this.state.ipaddress, this.state.port, this.state.userid);
      console.log(this.state.ipaddress+ this.state.port+ this.state.userid)
      client.connect({ onSuccess: subscribe, onFailure: onConnectionLost, timeout: timeout });
      
      }

      const subscribe = () => {
      client.subscribe("Hello world");
      const message = new Paho.Message("Hello");
      message.destinationName = "Hello world"
      client.send(message);
      client.onMessageArrived = onMessageArrived(message);
      }

      const reconnect = () => {
      client = new Paho.Client(this.state.ipaddress, this.state.port, this.state.userid);
      client.connect({ onSuccess: subscribe, onFailure: onConnectionLost, timeout: timeout });
      }

      const onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
      alert("onConnectionLost:" + responseObject.errorMessage);
      }
      setTimeout(onConnect, reconnect)
      }

      const onMessageArrived = (message) => {
      console.log("onMessageArrived:" + message.payloadString);
      }
  }
    
     render(){
      
        return(
            <div>
              <input type="text" placeholder="Enter your IpAddress" required className="ipaddress" onChange={this.ipaddressChange}/>
              <input type="text" placeholder="Enter Your Port" required className="port" onChange={this.portChange} />
              <input type="text" placeholder="Enter Your UserID" required className="userid" onChange={this.useridChange}/> 
              <button type="submit" onClick={this.onSubmit}>connect</button>
            </div>
        );
}
}



export default MQTT1;