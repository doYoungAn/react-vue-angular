import React, { Component } from 'react';

class Item extends Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div>
                <div>{ this.props.item.title }</div>
                <div>{ this.props.item.content }</div>
            </div>
        )
    }
}

export default Item;