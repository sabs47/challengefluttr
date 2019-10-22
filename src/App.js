import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {selectUser} from './action/index';
import {selectCar} from './action/carindex';
import {getrand} from './action/getvaluesR'
import distance from './img/distance.png';
import gold from './img/gold.png';
import space from './img/space.png';
import starwars from './img/starwars.jpg';
import {bindActionCreators} from 'redux';
var tmp=[]
var count = 1;
var df=[];
var dc=[];
var dr =[];
function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
 class  App extends Component {

  renderList() {
   
    var i =1
    
 const shuffledPosts = shuffleArray(this.props.users);
        return shuffledPosts.map((user,key) => {
 if(i==2){
      df.push(user)

          return (
               
          <td key={user.id}  style={{"width":"100%"}}  >
           <h1 style={{"color":"white","width":"150%","fontSize":"16px"}}> {user.name}</h1><p style={{"marginTop":"-10px","color":"white","fontSize":"20px"}} >{user.gender}</p>
         </td>
           
      );}
       i++     
      
    
    });
      
    }

    rendercar() {
      
      var i =1
      
   const getradomcar = shuffleArray(this.props.cars);
          return getradomcar.map((car,key) => {
 
       if(i==2){
        dc.push(car)

            return (
                 
            <td key={car.id}  style={{"width":"100%"}}  >
            <h1 style={{"color":"white","width":"150%","fontSize":"15px"}}> {car.name}</h1>
               
           </td>
             
        );}
         i++     
        
      
      });
        
      }
 
 refreshPage(){ 
  window.location.reload(); 
 }
  getuserselected(){
  
this.props.selectUser(df)
this.props.selectCar(dc)
this.props.getrand(this.props.values)
 
}
  render(){
  
   var background = {
    width:'100%',
    height:'100%'
  };
   var player1 = {
     position: 'absolute', 
     top: '7%', 
     left: '22%',
color:"blue"
   };
    
   var player2 = {
     position: 'absolute', 
     top: '7%', 
     right: '22%',
     color:"red"
   };
   var space1 = {
    position: 'absolute', 
    marginTop: '18%',
    right: '23%',
    width:'5%',
  };
  var space2 = {
    position: 'absolute', 
    marginTop: '18%',
    left: '23%',
    width:'5%',
  
    
  };
   var vs = {
     position: 'absolute', 
     top: '5%', 
      right:'50%',
     left:'50%',
     color:"#fff",
     height:'80%',
     width:'50%',
    
   };
   var home = {
    position: 'absolute', 
    top: '13%', 
     right:'65%',
    left:'45%',
    color:"#fff",
   
  };
  var visitors = {
    position: 'absolute', 
    top: '13%', 
     right:'45%',
    left:'57%',
    color:"#fff"
   
  };
  var between= {
    position: 'absolute', 
    top: '11.5%', 
     right:'50%',
    left:'50%',
    color:"#fff"
   
  };
   var golds = {
     position: 'absolute', 
     top: '49%', 
      right:'50%',
     left:'48%',
     width:'5%',
     
    
   };
   var godlweigh = {
    position: 'absolute', 
    top: '51%', 
     right:'50%',
    left:'53%',
    width:'5%',
    color:'white'
    

    
   
  };
  var km = {
    position: 'absolute', 
    top: '67%', 
     right:'50%',
    left:'53%',
    width:'5%',
    color:'white'
    
   
  };
   var distances = {
     position: 'absolute', 
     top: '65%', 
      right:'50%',
     left:'48%',
     width:'5%',
     
    
   };
    var presstoRestart = {
      position: 'absolute', 
       top: '87%', 
        right:'5%',
        borderRadius:10,
         backgroundColor: '#3498db',
        padding:10, height:30, overflow:'hidden',
        color: 'white',
        width:'7%'
       
 };
 var presstostart = {
  position: 'absolute', 
  textDecoration: 'none',
  top: '88%', 
   //right:'45%',
  left:'50%',
  width:'8%',
    borderRadius:10,
    backgroundColor: '#e67e22',
   padding:10, height:45, overflow:'hidden',
   color: 'white',
   
   
 
};



    return(

<div>
       
        <img src={ starwars  } style={background}/>
        <h1 style={home}>{this.props.scores[0]}</h1>
        <h1 style={visitors}>{this.props.scores[1]}</h1>
        <h1 style={vs}>VS</h1>
         <h1 style={between}>__</h1>

          <h1 style={player1}>player1</h1>
          <h1 style={player2}>player2</h1>
          <img src={space } style={space1}/>
          <img src={space } style={space2}/>
      <img src={gold} style={golds}/>
          <h1 style={godlweigh}>{this.props.values[0]}KG</h1>
          <img src={distance } style={distances}/>
          <h1 style={km}>{this.props.values[1]}KM</h1>
          
      <a style={presstoRestart} onClick={()=>{{this.refreshPage()}}}>Change Player</a>
      <Link to ="GamesResults" style={presstostart}  onClick={()=>{this.getuserselected()}}><h1 style={{"fontSize":"25px","textAlign":"center"}}>Play</h1></Link> 
      <ul style={{"marginTop":"-48%", "position": 'absolute',"marginLeft":"20%","marginRight":"10%","width":"53%"}}>
     {this.renderList()}
    </ul>
   
    <ul style={{"marginTop":"-32%", "position": 'absolute',"marginLeft":"20%","marginRight":"10%","width":"53%"}}>
{this.rendercar()}
</ul>
</div>
);




  }}

  function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser,selectCar:selectCar,getrand: getrand}, dispatch);
}
  function mapStateToProps(state) {
    return {
        users: state.player,
        cars :state.vehicle,
        values:state.getramdomvalue,
        scores:state.loadscore
    };

  }
  export default connect(mapStateToProps,matchDispatchToProps)(App);
