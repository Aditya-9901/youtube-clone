import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import "./ChannelRow.css"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ChannelRow({ image, channel, subs, noOfVideos, description, verified }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <CheckCircleIcon />}
                </h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>

            </div>

            {/* <Button>SUBSCRIBE</Button> */}
        </div>
    )
}

export default ChannelRow
