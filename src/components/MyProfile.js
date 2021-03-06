import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    Input: 'You name',
    Gender: "Male",
    Description: "Description about yourself",
    read: false    
  };

  nameChange=(event) => {
    this.setState({     
     Input: event.target.value
    });
  }

  genderChange=(event)=>{
    this.setState({
      Gender: event.target.value
    });
  }

  textarearChange=(event)=>{
    this.setState({
     Description: event.target.value
    });
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }
  readChange=(event)=>{
    this.setState({
      read: event.target.type === "checkbox"?event.target.checked:event.target.value
    })
  }

  render() {
    return (
      
      <div className='formName' onSubmit={this.handleSubmit}>
        
        <form className='content' onSubmit={this.handleSubmit}>
        <div className='profile'>MyProfile</div>
        <label>
          Name:
          <input className='input' type='text' name='name' value={this.state.Input} onChange={this.nameChange}/>
        </label>

        <label>
          Gender:
          <select value={this.state.Gender} onChange={this.genderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>  
        </label>  

        <label>
          Description:
          <textarea value={this.state.Description} onChange={this.textarearChange} />
        </label>

        
        <label style={{fontSize:'10px', with:'200px'}}><input  type='checkbox' value= {this.state.read} onChange={this.readChange}/>I have read the terms of conduct</label>
      

        <input 
          className='submit' 
          type='submit'
          value='Submit'
          disabled={!this.state.Input 
            || this.state.Input == 'You name'
            || !this.state.Description
            || this.state.Description == 'Description about yourself'
            || !this.state.read == true}  
          />  
      </form>
      </div>
    );
  }
}

export default MyProfile;


