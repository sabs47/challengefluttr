import React, { Component} from 'react';
import distance from '../img/distance.png';
import gold from '../img/gold.png';
import space from '../img/space.png';
import {connect} from 'react-redux';
import {selectUser} from '../action/index';
import {selectCar} from '../action/index';
import starwars from '../img/starwars.jpg';
import { Link } from 'react-router-dom'
var tab =[];
var nplay1 
var nplay2 
var timplay1
var timeplay2
var TOTALTIMEPLAY1
var TOTALTIMEPLAY2
var scor1 = 0
var scor2 = 0
var winner 
var lossercolor
var bgColors 


class GamesResults extends Component {

renderplayers() {

  
  return this.props.user.map((users) => {
      return (
        <td key={users.id}  style={{"width":"100%"}}  >
           <h1 style={{"color":"white","width":"150%","fontSize":"16px"}}> {users.name}</h1><p style={{"marginTop":"-10px","color":"white","fontSize":"20px"}} >{users.gender}</p>
         </td>
           
      );
  });
}



rendercars() {
  
      return this.props.car.map((cars,key) => {
        return (
             
          <td key={cars.id}  style={{"width":"100%"}}  >
          <h1 style={{"color":"white","width":"150%","fontSize":"15px"}}>{cars.name}</h1><p style={{"marginTop":"100px","color":"white","fontSize":"20px"}} >Speed:{cars.max_atmosphering_speed}km/h</p><p style={{"marginTop":"10px","color":"white","fontSize":"20px"}} >Cargo{cars.cargo_capacity}kg</p>
             
         </td>
      
    );
  })
    
   
  }

  refreshPage(){ 
    window.location.reload(); 
   }
 
getresul(){
/*
to get the total of trips i've get the random amont of glod / the cargo capacity 
*/
 nplay1 = Math.floor(this.props.value[0]/this.props.car[0].cargo_capacity)
nplay2 =  Math.floor(this.props.value[0]/this.props.car[1].cargo_capacity)
/*
to get the total of times i've taken the random distance /vitesse of the car /km/h and then i add the same value i've got to the time + 2*/

timplay1 = Math.floor(this.props.value[1]/this.props.car[0].max_atmosphering_speed+2+this.props.value[1]/this.props.car[0].max_atmosphering_speed)
timeplay2 = Math.floor(this.props.value[1]/this.props.car[1].max_atmosphering_speed+2+this.props.value[1]/this.props.car[1].max_atmosphering_speed)

TOTALTIMEPLAY1 = nplay1*timplay1
TOTALTIMEPLAY2 = nplay2*timeplay2

if(TOTALTIMEPLAY1<TOTALTIMEPLAY2){
scor1 = this.props.score[0]+1
 lossercolor ="blue" 
 bgColors = this.props.getcolor[1]
 

}
else if(TOTALTIMEPLAY1>TOTALTIMEPLAY2){

scor2 = this.props.score[1]+1
lossercolor =this.props.getcolor[1] 
bgColors = "blue"

}

}

  render() {


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
 top: '7%', 
  right:'65%',
 left:'45%',};
var visitors = {
 position: 'absolute', 
 top: '7%', 
  right:'45%',
 left:'57%',

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
 var youwin = {
   position: 'absolute', 
   top: '-2%', 
    right:'30%',
   left:'45%',
   color:"green",
   with:'80%',
   height:'51%'


 };
 

  var presstoRestart = {
    position: 'absolute', 
     top: '87%', 
      right:'5%',
      borderRadius:4,
       backgroundColor: '#3498db',
      padding:10, height:30, overflow:'hidden',
      color: 'white'
     
};
var presstostart = {
position: 'absolute', 
 top: '87%', 
  right:'45%',
 left:'52',
 
   borderRadius:4,
   backgroundColor: '#e67e22',
  padding:10, height:45, overflow:'hidden',
  color: 'white'
};

var tripsplayer1 = {
  position: 'absolute', 
  marginTop: '-27%', 
 left: '22%',
  color:"blue"
};
var tripsplayer2 = {
  position: 'absolute', 
  marginTop: '-27%', 
  right: '24%',
  color:"red"
};

var timeplayer1 = {
  position: 'absolute', 
  marginTop: '-29%', 
  left: '22%',
  color:"blue",
};
var timeplayer2 = {
  position: 'absolute', 
  marginTop: '-29%', 
  right: '22%',
  color:"red",
};
   
var presstoreload = {
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

return (
     
      <div >
           <h1 style={youwin}>YOU WON</h1>
     <img src={starwars} style={background}/>  
     <ul style={{"marginTop":"-48%", "position": 'absolute',"marginLeft":"20%","marginRight":"10%","width":"53%"}}>
     {this.renderplayers()}
    </ul>
      
<ul style={{"marginTop":"-32%", "position": 'absolute',"marginLeft":"20%","marginRight":"10%","width":"53%"}}>
{this.rendercars()}
</ul>
{this.getresul()}
          
          <h1 style={player1}>player1</h1>
         
          <h1 style={player2}>player2</h1>
          <h1 style={home}><h2 style={{"color":lossercolor}}>{scor1 }</h2></h1>
        <h1 style={visitors}><h2 style={{"color": bgColors}}>{scor2 }</h2></h1>
        <h1 style={vs}>VS</h1>
        <h1 style={timeplayer1}>{TOTALTIMEPLAY1} hours</h1>
        <h1 style={tripsplayer1}>{nplay1} trips</h1>
        <h1 style={timeplayer2}>{TOTALTIMEPLAY2} hours</h1>
        <h1 style={tripsplayer2}>{nplay2} trips</h1>
        
         <h1 style={between}>__</h1>
          <img src={gold} style={golds}/>
          <h1 style={godlweigh}>{this.props.value[0]}KG</h1>
          <img src={distance } style={distances}/>
          <h1 style={km}>{this.props.value[1]}KM</h1>
          <img src={space } style={space1}/>
          <img src={space } style={space2}/>
          
          <Link to ="App" style={presstoreload}  onClick={this.refreshPage}><h1 style={{"fontSize":"25px","textAlign":"center"}}>Nex Match</h1></Link> 
         
     
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      user: state.activeUser,
      car:state.aciveCar,
      value:state.activerand,
      score:state.loadscore,
      getcolor:state.checkcolor
  };
}

export default connect(mapStateToProps)(GamesResults);

