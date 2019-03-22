import React from 'react';

class CarouseImg extends React.Component {
    render() {
        return (
            <img src={this.props.src}  alt={this.props.title}/>
        )
    }
}

export default CarouseImg;