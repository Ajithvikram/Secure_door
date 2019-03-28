import React, {Component} from 'react';
import './sidebar.css';
import Arrow from 'C:/Users/Professional/secure-door/src/component/left.png';
import Personal from 'C:/Users/Professional/secure-door/src/component/profile.png';
import Notification from 'C:/Users/Professional/secure-door/src/component/notification.png';
import Schedule from 'C:/Users/Professional/secure-door/src/component/schedule.png';
import Setting from 'C:/Users/Professional/secure-door/src/component/setting.png';
import Configuration from 'C:/Users/Professional/secure-door/src/component/configid.png'
import Dash from 'C:/Users/Professional/secure-door/src/component/dashboard.png'

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="h4">
                    <label><b className="hel">Welcome</b>
                    <button type="submit" className="btn4" onClick={this.props.onChange}><img src={Arrow} className="arrow" alt="arrow"/></button></label>
                </div>
                <input type="text" placeholder="Search" className="inp2"/> 
                <div>
                    <button type="submit" name="dashboard" className="btn9" onClick={this.props.onNav}>
                    <img src={Dash} className="dashboard" alt="dashboard"/><b className="dashboard1">Dashboard</b></button>
                    <button type="submit" name="personal" className="btn5" onClick={this.props.onNav}>
                    <img src={Personal} className="personal" alt="personal"/><b className="personal1">Personal Details</b></button>
                    <button type="submit" name="notification" className="btn3" onClick={this.props.onNav}>
                    <img src={Notification} className="notification" alt="notification"/><b className="notification1">Notification</b></button>
                    <button type="submit" name="schedule" className="btn6" onClick={this.props.onNav}>
                    <img src={Schedule} className="schedule" alt="schedule"/><b className="schedule1">Schedule</b></button>
                    <button type="submit" name="configuration" className="btn7" onClick={this.props.onNav}>
                    <img src={Configuration} className="configuration" alt="configuration"/><b className="configuration1">Configuration</b></button> 
                    <button type="submit" name="setting" className="btn8" onClick={this.props.onNav}>
                    <img src={Setting} className="setting" alt="setting"/><b className="setting1">Setting</b></button> 
                </div>
            </div>
        );
    }
}

export default Sidebar;