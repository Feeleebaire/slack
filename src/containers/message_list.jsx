import React, {Component} from 'react';
import Message from '../components/message'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchMessages} from '../actions';
import MessageForm from '../containers/message_form';


class MessageList extends Component{

  componentWillMount(){
    this.props.fetchMessages();
    console.log(this.props.messages);
  }

  componentDidMount(){
    this.refresher = setInterval(this.props.fetchMessages, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }


  render(){
    return(
      <div className="col-sm-9 msg-liste">
        {this.props.messages.map((message)=> <Message key={message.id} message={message.content}/>)}
        <div className="formulaire">
          <MessageForm/>
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { fetchMessages: fetchMessages }, dispatch
  );
}

function mapStateToProps(state){
  return{
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
