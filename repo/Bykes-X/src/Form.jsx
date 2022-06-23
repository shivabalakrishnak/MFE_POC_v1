import React, {Component} from "react";

class FormSubscribe extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", phone:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    console.log( this.state);
    event.preventDefault();

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data:this.state })
    };
    fetch('https://putsreq.com/0ZM9DjwpN76YE4Oxyxp2', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));


  }

  handleInputChange(event){
    this.setState({ phone: event.target.value });
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit} className="interest-form">
      
        <h2 className="font-bold">Get notified to prebook!</h2>
      
        <label>
          Name: 
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />{" "}
        </label>
      
        <label>
          Phone number: 
          <input
            name="phonenumber"
            value={this.state.phonenumber}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input className="bg-red-500" type="submit" value="Submit" />
      </form>
    );
  }
}

export default FormSubscribe;
