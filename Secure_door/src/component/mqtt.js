import React, {Component} from 'react';
import Paho from 'paho-mqtt';


class MQTT1 extends Component{
    
     render(){
       var client;
       var timeout = 2000;
       var host ="broker.hivemq.com";
       var port =8000;

const onConnect=() =>{
  client = new Paho.Client(host, port, "Ajith");
  client.connect({onSuccess:subscribe,onFailure:onConnectionLost,timeout:timeout})
  client.onMessageArrived=onMessageArrived
}

const subscribe = () => {
  console.log("onConnect");
  client.subscribe("welcome");
  var message = new Paho.Message("hello world");
  message.destinationName = "welcome"
  client.send(message);
  client.onMessageArrived=onMessageArrived
}

const reconnect = () => {
  client = new Paho.Client(host, port, "Ajith");
  client.connect({ onSuccess: subscribe, onFailure: onConnectionLost, timeout: timeout });
}

const onConnectionLost = () => {
  console.log("connection attempt to host"+host+"failure")
  setTimeout(onConnect, reconnect)
}
const onMessageArrived = (message) => {
  var out_msg="message received"+message.payloadString;
  var out_msg1=out_msg+"message received topic"+message.destinationName;
  console.log(out_msg1);
}
        return(
            <div>
                {onConnect}
            </div>
        );
}
}



export default MQTT1;