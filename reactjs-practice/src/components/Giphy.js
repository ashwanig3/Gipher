import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

class Giphy extends Component {
    state = {
        gifs: [],
        loading: false
    }
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=kids&api_key=KWfYGPcB4o7FDqXP8VTx6cB8MT9V6L9E')
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.data,
                loading: true
            })
        })
    }
    render() {
        const { gifs, loading } = this.state;
        const { allGifs } = this.props;
   
        if(allGifs.length) { 
        return (
            loading ?
            <div className="gif-wrapper">
            {
            allGifs && allGifs.map(gif => 
                <div key={gif.slug}>
                    <img src={gif.images.downsized.url} alt="gif-img" className="gif-img" />
                    <p><b>{gif.title}</b></p>
                </div>
        )
             }
             </div>  : <Loader />
        )
        } else {
        return (
            loading ? 
            <div className="gif-wrapper">
               {
                   gifs && gifs.map(gif => 
                    <div key={gif.slug}>
                        <img src={gif.images.downsized.url} alt="gif-img" className="gif-img" />
                        <p className="gif-title"><b>{gif.title}</b></p>
                    </div>
                    )
                }
            </div> : <Loader />
        );
    }
}
}

const mapStateToProps = (state) => {
    return {
        allGifs: state.searchedGif
    }
}

export default connect(mapStateToProps)(Giphy);