import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import prestoRestart from '../components/prestoRestart'
import App from '../App'
import {selectUser} from '../action/index'
require('../css/style.scss');
var tmp=[]
var count = 1;
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
var player1 = {
      position: 'absolute', 
      top: '10%', 
      right: '10%',
      color:"red"
    };
    var player2 = {
      position: 'absolute', 
      top: '10%', 
      padding: "20px",
    
    };
class playerscontainer extends Component {
    constructor(props) {
        super(props);
        this.renderList= this.renderList.bind(this);
    }
       
    renderList() {
    var i =1
 const shuffledPosts = shuffleArray(this.props.users);
        return shuffledPosts.map((user,key) => {
//            selectUser.arguments(this.props.selectUser(user))
         
     if(i==2){
        this.props.selectUser(user)
          return (
               
          <td key={user.id}  style={{"height" : "100%", "width" : "50%","padding":"0px 500px 0px 210px","color":"red"}}  >
             {user.first}<br /> {user.age}        
         </td>
       
        
        
            );}
       i++       
    });
                
    }

    render() {
        return (
           
           <tr>
            {this.renderList()}
         
              
              </tr>
              
              
                      );
                      return (
                      <prestoRestart >dedeed
                      </prestoRestart>)
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.player
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser}, dispatch);
}
// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps,matchDispatchToProps)(playerscontainer);
