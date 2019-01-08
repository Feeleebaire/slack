import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li
        key={channel.id}
        role="presentation"
      >
        #{channel}
      </li>
    );
  }

  render() {
    console.log(this.props.channels);
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
          <ul>
            {this.props.channels.map(this.renderChannel)}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, null)(ChannelList);
