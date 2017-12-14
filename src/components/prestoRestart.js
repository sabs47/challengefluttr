import React, { Component } from 'react';
import playerscontainer from '../containers/playerscontainer'

export default class prestoRestart extends playerscontainer {


  render () {
    var presstoRestart = {
      position: 'absolute', 
       top: '87%', 
        right:'5%',
        borderRadius:4,
         backgroundColor: '#3498db',
        padding:10, height:30, overflow:'hidden',
        color: 'white'
       
 };
 function refreshPage(){ 
  window.location.reload(); 
}
    return (
 
      <prestoRestart style={presstoRestart}    >
       
  Change Playersss
       
       </prestoRestart>
    );
  }
}
