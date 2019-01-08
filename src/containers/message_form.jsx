import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {sendMessage} from '../actions';

class MessageForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.sendMessage('general', 'philou', this.state.value);
    event.preventDefault();
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
          <input className= "form-control" type="text" value={this.state.value} onChange={this.handleChange} />
        <div className="btn" type="submit" value="Submit">Envoyer</div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { sendMessage: sendMessage }, dispatch
  );
}

export default connect(null, mapDispatchToProps)(MessageForm);
