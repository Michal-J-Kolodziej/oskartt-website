import React, {useState, useEffect} from 'react';
import { StaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import SectionWrapper from '../Section_wrapper/SectionWrapper';
import NumberContainer from '../Number_container/NumberContainer';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const NumberSection = ({visible, data: { spotify, instagram, soundcloud, youtube }}) => {

    const [spotifyFollowersNumber, setSpotifyFollowersNumber] = useState(0);
    const [youtubeSubscribersNumber, setYoutubeSubscribersNumber] = useState(0);
    const [instagramFollowersNumber, setInstagramFollowersNumber] = useState(0);
    const [soundcloudFollowersNumber, setSoundcloudFollowersNumber] = useState(0);
    
    useEffect(() => {
        setSpotifyFollowersNumber(spotify.followers);
        setYoutubeSubscribersNumber(youtube.subscribers);
        setInstagramFollowersNumber(instagram.followers);
        setSoundcloudFollowersNumber(soundcloud.followers);
    }, []);

    return (
        <SectionWrapper >
            <StyledWrapper>
                <NumberContainer title={"Spotify"} subtitle={"followers"} number={spotifyFollowersNumber} color={"pink"} animate={visible} />
                <NumberContainer title={"Youtube"} subtitle={"subscribers"} number={youtubeSubscribersNumber} color={"blue"} animate={visible} />
                <NumberContainer title={"Instagram"} subtitle={"followers"} number={instagramFollowersNumber} color={"pink"} animate={visible} />
                <NumberContainer title={"Facebook"} subtitle={"fanpage likes"} number={"20000"} color={"blue"} animate={visible} />
                <NumberContainer title={"Soundcloud"} subtitle={"followers"} number={soundcloudFollowersNumber} color={"pink"} animate={visible} />
            </StyledWrapper>
        </SectionWrapper>
    )
}

export default function NumberQuery(props) {
    return (
      <StaticQuery
        query={graphql`
          query {
            spotify {
                followers
            }
            youtube {
                subscribers
            }
            soundcloud {
                followers
            }
            instagram {
                followers
            }
          }
        `}
        render={data => <NumberSection data={data} visible={props.visible} />}
      />
    )
  }