import  { Component } from 'react';
import User from './User';

class Users extends Component {

    users = [
        { name: 'Mahesh', course: 'react' },
        { name: 'David', course: 'react' },
        { name: 'Ketaki', course: 'react' },
        { name: 'Austin', course: 'react' },
    ];

    constructor() {
        super();
        this.state = {
            listOfusers: this.users,
            count: 0,
            school: "Edureka",
            course: "react"
        };
    }

    onIncreaseButtonClick = (e, myOwnValue) => {
        //this.state.count = this.state.count + 1;
        this.setState(
            {
                count: this.state.count + 1
            }
        );
    }

    onDecreaseButtonClick = (e) => {
        //this.state.count = this.state.count - 1;
        this.setState(
            {
                count: this.state.count - 1
            }
        );
    }

    render() {
        const { listOfusers, count } = this.state;
        const myOwnValue = "I am JS Developer";
        return (
            <>
                <h1>{ this.props.children }</h1>
                <h2>{ this.props.subtitle }</h2>
                <h3>Count value from parent: { this.props.count }</h3>
                <h3>Count value from Component state: { count }</h3>
                {
                    listOfusers.map((item, index) => {
                        return <User key={index} name={item.name} course={item.course}/>
                    })
                }
                <button onClick={(e) => { this.onIncreaseButtonClick(e, myOwnValue) }}>Increase Count</button>
                <button onClick={this.onDecreaseButtonClick}>Decrease Count</button>
            </>
        )
    }
}

export default Users;