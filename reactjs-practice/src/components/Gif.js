import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../animate.css'

class Gif extends Component {
    render() {
        const gifId = this.props.match.params.id
        return (
            <div className="gif-modale bounceIn">
                <Link to="/" className="cross-btn">X</Link>
               <img src={`https://media2.giphy.com/media/${gifId}/giphy.gif`} alt="gif-img" />
            </div>
        );
    }
}

export default Gif;