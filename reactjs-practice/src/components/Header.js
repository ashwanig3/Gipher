import React, { Component } from 'react';
import { searchGif } from '../actionCreator/action';
import { connect } from 'react-redux';


class Header extends Component {
    state = {
        queryResult: []
    }

    handleChange = (e) => {
        const q = e.target.value;
       this.props.dispatch(searchGif(q))
    }
    
    render() {
        return (
            <div className="header-wrapper">
               <h1 className="heading">Gipher</h1> 
               <form className="search-form">
                   <input type="text" placeholder="Search Gifs" name="gif" onChange={this.handleChange} /> 
               </form>
            </div>
        );
    }
}

export default connect()(Header);