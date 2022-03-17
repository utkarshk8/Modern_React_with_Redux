import React from "react";
import Youtube from "../Api/Youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
const KEY = 'AIzaSyC8GjG5WbgKrMmQhy3n2H_65jCcRbZ4fQc';

class App extends React.Component{
    state={videos: [],
    selectedVideo: null}
    componentDidMount(){
        this.onSearchSubmit('Ranveer Brar')
    }
    onSearchSubmit= async term => {
            const response= await Youtube.get("/search", {
            params: {
                q: term,
                type: 'video',
                part: "snippet",
                maxResults: 5,
                key: KEY
            }
        });
        this.setState({videos: response.data.items,
        selectedVideo: response.data.items[0]});
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video });
    }
    render() {
        return(
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default App;