  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
var hakim = document.getElementById("this-element")
var animations = hakim.getAnimations()

for(var i =1; i<hakim.clientHeight;i++){
  animations.values[i]= animations.values[i+1]
}
var hakim = document.getElementById("this-element")
var animations = hakim.getAnimations()

for(var i =1; i<hakim.clientHeight;i++){
  animations.values[i]= animations.values[i+1]
}