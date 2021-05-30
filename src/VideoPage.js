import React from 'react';
import "./VideoPage.css"
import ReactPlayer from "react-player";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import { Avatar } from '@material-ui/core';

function VideoPage({ url , title , subs , channelImage , views , channelName}) {

    

    return (
        <div className="video__page">

            <div className="video__video">

            <ReactPlayer 
              url={url}
              controls
              width="720px"
              height="480px"
              />
<h2 className="video__title">{ title }</h2>
            <div className="video__icons">
                <div className="video__left">
                   <h4>{ views }</h4>
                </div>
                <div className="video__right">

               <p><ThumbUpAltIcon className="video__icon"/>2.2k</p>
               <p><ThumbDownIcon className="video__icon"/>100</p>
               
               <p className="video__icon">SHARE<ReplySharpIcon /></p>
               <ViewHeadlineIcon className="video__icon"/>
               <p className="video__icon"><strong>...</strong></p>
                </div>
            </div>

            <div className="video__info">
            <Avatar 
                className="video__avatar"
                alt={channelName}
                src={channelImage}
            />
                
                <div className="video__text">
                <p>{channelName}</p>
                <h5>{ subs }</h5>
            

           
                {/* <button className="video__subButton">SUBSCRIBE</button> */}
            
            </div>
            </div>

            </div>

              
        </div>
    )
}

export default VideoPage
