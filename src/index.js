import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';

const First = () => {
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="#" className="avatar">
          <img alt="Profile Pic" />
        </a>
      </div>
      <div className="content">
        <a href="#" className="author">
          Karthi
        </a>
      </div>
      <div className="metadata">
        <span className="date">Today 6.03am</span>
      </div>
      <div className="text">
        Hi Myself karthikeyan, I Have Learning Web Developing
      </div>
    </div>
  );
};

//Display Using Id

ReactDom.render(<First />, document.querySelector('#root'));
