import React, { Component, ReactDOM } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello Dojo</h1>
                <Todos />
            </div>
        );
    }
}

class Todos extends React.Component {
    render() {
        return (
            <todo className="todos">
                <h2>Thins I need to do.</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Create Login and registration page</li>
                    <li>Get a Job</li>
                    <li>Start career</li>
                </ul>
            </todo>
        )
    }
}

export default TodoList;