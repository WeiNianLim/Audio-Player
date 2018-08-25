import React, {Component} from 'react';

class SongDetails extends Component {

    playSong = (index) => {
        this.props.playSong(index)
    }
    render() {
        const {song, id} = this.props
        return (
            <div id="songDetails" className="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <img id="kendrick" src="/images/kendrick.jpg" alt="kendrick"/>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <p>Artist</p>
                    <h1 className="display-4">{song.artist}</h1>
                    <h3>Title : {song.title}</h3>
                    <button type="button" class="btn btn-success" onClick={() => this.playSong(id)}>Play</button> 
                </div>
                
            </div>
        )
    }
}

export default SongDetails