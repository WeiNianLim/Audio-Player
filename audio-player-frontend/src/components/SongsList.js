import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SongsList extends Component {

    playSong = (index) => {
        this.props.playSong(index)
    }

    render() {
        const {songs} = this.props
        const mappedsongs = songs.map((song, index) => {
            return <tr>
                    <th scope="row" key={index}><img src="/images/play.png" onClick={() => this.playSong(index)}/></th>
                    <td><Link to={`/${index}`}>{song.title}</Link></td>
                    <td>{song.artist}</td>
                    <td>{song.length}</td>
                  </tr>
        })
        return (
            <div>
                {songs.length > 0 
                    ? <div><h1 className="text-center">MUZIK</h1>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Title</th>
                                <th scope="col">Artist</th>
                                <th scope="col">Time</th>
                            </tr>
                            </thead>
                            <tbody>{mappedsongs}</tbody>
                        </table>
                        </div>
                    : <h1>Loading</h1>}
            </div>
        )
    }
}

export default SongsList