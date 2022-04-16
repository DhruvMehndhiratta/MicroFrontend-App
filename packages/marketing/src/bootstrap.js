import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}

if(process.env.NODE_ENV === "development"){
  const el = document.getElementById("_marketing_dev_root");
  if(el){
    mount(el)
  }
}

export  { mount };
// mount function to start up the project
// in this we have 2 cases if we recall if its a dev mode then we are going to just run the mount function
// otherwise we are in prod mode then we are expected to export this function so that contianer can load this function.