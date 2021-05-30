import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./VideoPage";
import VideoDisplay from "./VideoDisplay";


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/click1">
          <div className="app__page">
              <VideoPage 
                 url="https://www.youtube.com/watch?v=NT299zIk2JY&t=12493s" 
                 title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                 views="148,429 views • 300 days ago"
                 channelImage='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj'
                 channelName="Clever Programmer"
                 subs= "916K subscriber"
              />
            </div>
          </Route>

          <Route path="/click2">
          <div className="app__page">
              <VideoPage 
                 url="https://www.youtube.com/watch?v=ju6ERMA_5xE&t=4s" 
                 title="Unboxing The $3000 Bluetooth Speaker"
                 views="18,174,874 views•Apr 12, 2017"
                 channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s88-c-k-c0x00ffffff-no-rj'
                 channelName="Unbox Therapy"
              />
            </div>
          </Route>

          <Route path="/click3">
          <div className="app__page">
              <VideoPage 
                 url="https://www.youtube.com/watch?v=sE8MsprwvHU" 
                 title="Call of Duty Mobile HANDCAM + SETTINGS GAMEPLAY"
                 views="1,573,280 views•Oct 12, 2019 "
                 channelImage= 'https://yt3.ggpht.com/ytc/AAUvwnhPQe1adl_vaPemx-c8t1lzz_9VPfwgB5JyGNX8fw=s88-c-k-c0x00ffffff-no-rj'
                 channelName="Jokesta"
              />
            </div>
          </Route>

          <Route path="/click4">
          <div className="app__page">
              <VideoPage 
                 url="https://www.youtube.com/watch?v=auGDo8WwCyg" 
                 title="Don't be Afraid | Motivational Video by Aman Dhattarwal"
                 views="173,022 views•Jun 15, 2019"
                 channelImage='https://yt3.ggpht.com/ytc/AAUvwnhR37PK6iKoTY_YvdcUkAGMURzrmEvgk2C22K3ZMQ=s88-c-k-c0x00ffffff-no-rj'
                 ChannelName="Aman Dhattarwal"
              />
            </div>
          </Route>

          {/* <Route path="/display">
          <div className="app__page">
              <VideoDisplay />
            </div>
          </Route> */}

          <Route  path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
