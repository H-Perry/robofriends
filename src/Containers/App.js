import React, { Component } from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import '../Containers/App.css';

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return  response.json(); })
            .then(users => {this.setState({robots: users}) })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        //return !robots.length ? :;

        if (!robots.length) {
            return <h1>Loading...</h1>
        } else { 
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                       <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}


//const App = () => {
//    return (
//        <div className='tc'>
//            <h1>RoboFriends</h1>
//            <SearchBox />
//            <CardList robots={robots} />
//            </div>
//    )
//}
export default App;