// import  { Component } from 'react';

// class User extends Component {
//     render() {
//         return (
//             <>
//                 <h4>User Details:</h4>
//                 <h5>{this.props.name} - {this.props.course}</h5>
//             </>
//         )
//     }
// }

const User = (props) => {
    return (
        <h5>User Details: {props.name} - {props.course}</h5>
    )
}

export default User;