import React, { Component } from 'react';
import md5 from 'md5';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      password:'',
      Data:[]
    }
  }

  nameChange=(event)=>{
    this.setState({
      name:event.target.value,
    });
  };

  passwordChange=(event)=>{
    this.setState({
      password:md5(event.target.value)
    });
    console.log(this.state.password);
  };

  onSubmit=(event)=>{
    event.preventDefault();
    Axios.get('http://localhost:3001/posts')
    .then(res =>{
      const owner = res.data
      this.setState({Data: owner});
      console.log("Owner",this.state.Data);
      const dat =this.state.Data.filter(data => (data.name === this.state.name && data.password === this.state.password));
      console.log("data filter",dat);
      const datalen = dat.length;
      console.log("length",datalen);
      if(datalen === 1)
      {
        if((this.state.name === dat[0].name) && (this.state.password === dat[0].password)){
          this.props.history.push('/dashboard');
        }
      }
      else{
        window.alert("Incorrect username and password");
      }
    })
  }
  render() {
    return (
      <div>
      <div className="secure">
        <div>
          <header className="h1"><b>SECURE DOOR</b></header>
        </div>
        <div className="login">
          <h1 className="h2">LOGIN</h1>
          <p><input type="text" className="inp1" placeholder="Enter your Name" required onChange={this.nameChange}/></p>
          <p><input type="password" className="pass1" placeholder="Enter your password" required onChange={this.passwordChange} /></p>
          <button type="submit" className="btn1" onClick={this.onSubmit}><b>Login</b></button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
