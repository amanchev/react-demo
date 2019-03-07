import React, { Component } from 'react'

class Task1 extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitorderTrackingForm = this.submitorderTrackingForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submitorderTrackingForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["ordernum"] = "";
        fields["emailid"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (typeof fields["ordernum"] === "undefined") {
      formIsValid = false;
      errors["ordernum"] = "Please enter your order number.";
    } else if (fields["ordernum"].length <4) {
      formIsValid = false;
      errors["ordernum"] = "Order number is too short";
    } else if (fields["ordernum"].length >=15 ) {
      formIsValid = false;
      errors["ordernum"] = "Order number is too Long";
    }


    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please enter your email.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Please enter valid email.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  render() {
    return (
      <form method="post" name="orderTrackingForm" onSubmit= {this.submitorderTrackingForm} style={formStyle} >
        <input type="text" name="ordernum" placeholder="Order number" value={this.state.fields.ordernum} onChange={this.handleChange} style={inputStyle} />
        <div style={errorMsgStyle}>{this.state.errors.ordernum}</div>
        <input type="text" name="emailid" placeholder="Email address" value={this.state.fields.emailid} onChange={this.handleChange} style={inputStyle} />
        <div style={errorMsgStyle}>{this.state.errors.emailid}</div>
        <input type="submit" value="Proceed"/>
      </form>
    )
  }
}

let formStyle = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: '40px',
}

let inputStyle = {
  marginBottom: '20px',
}

let errorMsgStyle = {
  color: '#cc0000',
  marginBottom: '12px',
}

// eslint-disable-next-line
const orders = [
  {
    number: '10230',
    email: 'john.smith@gmail.com',
    address: '790 7th Ave, New York, NY 10019, USA'
  },  
  {
    number: '10231',
    email: 'Abd.Manaf@gmail.com',
    address: '12244، Riyadh 12244, Saudi Arabia'
  },  
  {
    number: '10232',
    email: 'Aharon@gmail.com',
    address: 'פרץ ברנשטיין 7, רמת גן'
  },  
  {
    number: '10233',
    email: 'serghei@gmail.com',
    address: 'Русаковская ул., 13, строение 5, Москва, 107140'
  },
]

export default Task1
