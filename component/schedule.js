import React,{ Component } from "react";
import Header from "./header";


class Schedule extends Component{
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
            <div>
                <Header onConfig={this.onMove}/>
                Schedule
            </div>
        );
    }
}
export default Schedule;