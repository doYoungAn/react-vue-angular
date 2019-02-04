import React, { Component } from 'react';
import axios from 'axios';
import Item from './components/item.jsx';

class App extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        axios.get('/static/posts.json').then((res) => {
            this.setState({ items: res.data });
        }).catch((err) => {

        });
    }

    render() {
        return (
            <div class="wrapper">
                <h1>React</h1>
                { this.state.items.map((item, index) => {
                    return ( <Item item={item} /> )
                }) }
            </div>
        );
    }
}

export default App;