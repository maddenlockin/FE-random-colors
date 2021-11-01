import React, { Component } from 'react';

export default class RandomColor extends Component {
    state = {
        color: '',
    };

    handleRandomColor = (color) => {
        this.setState({ currentColor: color });
    }
    render() {
        return (
            <></>
        )
    }
}