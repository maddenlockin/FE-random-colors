import React, { Component } from 'react';
import ColorDisplay from '../components/random-color/colorDisplay';

export default class RandomizeColor extends Component {
    state = {
        color: '#000000',
    };

    createRandomHex() {
        const newHex = () => Math.floor(Math.random() * 256).toString(16);

        return `#${newHex()}${newHex()}${newHex()}`.padEnd(7, '0')
    }

    handleRandomColor = () => {
        const newColor = this.createRandomHex();

        this.setState(({ color }) => ({
            color: newColor
        }));

        console.log(this.state)
    }

    componentDidMount() {
        setInterval(this.handleRandomColor.bind(this), 1000);
    }

    render() {
        return (
            <>
                <ColorDisplay
                    color={this.state.color}
                />
            </>
        )
    }
}