import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.audio = React.createRef();
    this.state = {
      songs : [],
      prev : 0,
      current : 1,
      next : 2,
      playStatus : "/images/play.png"
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
        .then((response)=>{
          this.setState({
            songs : response.data.songs 
          })
        })
        .catch((err) => {
          console.log(err)
        })
  }

  play = () => {
    this.audio.current.play() 
    this.setState({
      playStatus : "/images/pause.png"
    })
  }

  pause = () => {
    this.audio.current.pause()
    this.setState({
      playStatus : "/images/play.png"
    })
  }
  
  changeSong = (status) => {
      this.props.changeSong(status)      
  }

  componentDidUpdate(){
    if (this.state.songs.length > 0){
      if (this.audio.current.paused) {
        this.audio.current.load()
        this.audio.current.pause()
      } else {
        this.audio.current.load()
        this.audio.current.play()
      }
    }
  }

  playSong = (id) => {
    this.setState({
      prev : +id,
      current : +id+1,
      next : +id+2
    })
    this.play()
  }

  changeSong = (status) => {
    if (status === "next"){
      if (this.state.next < this.state.songs.length+1){
        this.setState({
          prev : this.state.current,
          current : this.state.next,
          next : this.state.next+1
        })
      } else {
        this.setState({
          prev : this.state.prev,
          current : this.state.current,
          next : this.state.next 
        })
      }
    } else {
      if (this.state.prev > 0){
        this.setState({
          prev : this.state.prev-1,
          current : this.state.prev,
          next : this.state.current
        })
      } else {
        this.setState({
          prev : this.state.prev,
          current : this.state.current,
          next : this.state.next
        })
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.songs.length > 0 
        ? <div>
            <Router>
              <Switch>
                <Route exact path="/" render={ 
                  reactProps => <SongsList songs={this.state.songs} playSong={this.playSong} match={reactProps.match}
                                    playStatus={this.state.playStatus}/>
                }/>
                <Route path='/:songId' render={
                  reactProps => <SongDetails song={this.state.songs[reactProps.match.params.songId]} id={reactProps.match.params.songId}
                              playSong={this.playSong} />
                }/>
              </Switch>
            </Router>
            <section className="text-center">
              <div id="playerTitle">
                <h4>{this.state.songs[this.state.current-1].title}</h4>
              </div>
              <div id="playerControls">
                <img src="/images/prev.png" onClick={() => this.changeSong("prev")}/>
                <img src={this.state.playStatus} onClick={this.state.playStatus === "/images/play.png" ? this.play : this.pause}/>
                <img src="/images/next.png" onClick={() => this.changeSong("next")}/>
              </div>
              <audio ref={this.audio}>
                <source src={this.state.songs[this.state.current-1].url} type="audio/mp3"/>
                <p>Your browser doesn't support HTML5 audio. Here is
                  a <a href="myAudio.mp4">link to the audio</a> instead.</p>
              </audio>
            </section>
          </div>
        : <h1>Loading</h1>}
      </div>
    );
  }
}
export default App;
