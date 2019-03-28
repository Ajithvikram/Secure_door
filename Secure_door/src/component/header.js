import React ,{ Component } from "react";
import Sidebar from "./sidebar";
import security from './security.png';
import mail from './mail.png';
import support from './support.png';
import account from './Account.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:true
        }
    }

    onChange=(event)=>{
        event.preventDefault();
        this.setState({
            menu:!this.state.menu
        })
    }
    render(){
        return(
            <div>
                {this.state.menu ? null : <Sidebar onChange={this.onChange} onNav={this.props.onConfig}/> }
                <header className="h3">
                <button className="btn2" onClick={this.onChange}><img src={security} alt="menu" className="menu"/> </button>
                <label  className="b">Secure Door</label>
                <label className="con"><img src={mail} className="con" alt="mail"/><b className="con1">Contact</b>
                <img src={support} className="support" alt="support"/><b className="support1">Support</b> 
                <img src={account} className="account" alt="account"/><b className="account1">Account</b></label>
                </header>
            </div>
        );
    }
}

export default Header;
