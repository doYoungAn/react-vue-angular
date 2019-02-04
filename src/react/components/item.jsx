import React, { Component } from 'react';

class Item extends Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <div class="item-wrapper card">
                <div class="bg-img-wrapper">
                    <img class="bg-img" src={ this.props.item.image } alt="" />
                </div>
                <div class="content">
                    <div class="item-title">{ this.props.item.title }</div>
                    <div class="item-content">{ this.props.item.content }</div>
                    <br/>
                    <div>{ this.props.item.owner.name }</div>
                    <div>{ this.props.item.owner.email }</div>
                </div>
            </div>
        )
    }
}

export default Item;