import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel';
const App = () => {
  return (
    <div className="app container">
      <div className = "row flex">

          <ChannelList/>

        <MessageList/>
      </div>
    </div>
  );
};

export default App;
