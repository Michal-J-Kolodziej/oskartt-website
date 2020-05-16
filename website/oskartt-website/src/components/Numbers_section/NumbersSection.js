import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../Section_wrapper/SectionWrapper';
import NumberContainer from '../Number_container/NumberContainer';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const NumberSection = ({visible}) => {

    const [spotifyFollowersNumber, setSpotifyFollowersNumber] = useState(0);
    const [youtubeSubscribersNumber, setYoutubeSubscribersNumber] = useState(0);
    const [instagramFollowersNumber, setInstagramFollowersNumber] = useState(0);
    const [soundcloudFollowersNumber, setSoundcloudFollowersNumber] = useState(0);
    // const [facebookLikesNumber, setFacebookFanpageLikes] = useState(0);

    useEffect(() => {
        getSpotifyFollowersNumber();
        getYoutubeSubscribersNumber();
        getInstagramFollowersNumber();
        // getFacebookLikesNumber();
        getSoundcloudFollowersNumber();
    }, []);

    // const getSpotifyFollowersNumber = () => {
    //     const oskarID = "2OVetJ63mx7fvwt2xKPfYY";
    //     const link = "https://api.spotify.com/v1/artists/";
    //     const authId = "";

    //     fetch(link + oskarID, { headers: { Authorization: 'Bearer ' + authId} })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     // .then(data => setSpotifyFollowersNumber(parseInt(data.followers.total)))
    //     .catch(err => console.log(err));
    // }


    const getSpotifyFollowersNumber = async () => {
        const oskarID = "2OVetJ63mx7fvwt2xKPfYY";
        const link = "https://api.spotify.com/v1/artists/";
        const clientID = btoa("fc847cbd8e6e43c995ef3c40843dcb12");
        const clientSecret = btoa("3bbb9770daf6451a9118e776983f2679");

        const auth = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': "Basic " + clientID + ':' + clientSecret
            },
            body: {
                grant_type: 'client_credentials'
            }
        });

        console.log(auth);
    }

    const getYoutubeSubscribersNumber = () => {
        const oskarID = "UC2tut2uPQ03NJuWt9vERSlw";
        const apiKey = "AIzaSyCYQNff-B28PImGKYyjqBWdu3aYUhIoUY4"
        const link = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${oskarID}&key=${apiKey}`;

        fetch(link)
        .then(response => response.json())
        .then(data => setYoutubeSubscribersNumber(parseInt(data.items[0].statistics.subscriberCount)))
        .catch(err => console.log(err));
    }

    const getInstagramFollowersNumber = () => {
        const oskarUsername = "oskarttofficial";
        const link = `https://www.instagram.com/${oskarUsername}/?__a=1`;
        fetch(link)
        .then(response => response)
        .then(data => data.json())
        .then(data => setInstagramFollowersNumber(data.graphql.user.edge_followed_by.count))
        .catch(err => console.log(err));
        
    }

    const getSoundcloudFollowersNumber = () => {
        const link = `https://api.soundcloud.com/users/oskarttofficial?consumer_key=8bcccc3476eaa137a084c9f0c041915f`;

        fetch(link)
        .then(response => response.json())
        .then(data => setSoundcloudFollowersNumber(data.followers_count))
        .catch(err => console.log(err));
    }

    const getFacebookLikesNumber = () => {
        // const oskarID = '556344861218935';
        // const link = `graph.facebook.com/v7.0/${oskarId}/likes`;
        
        fetch("https://stackoverflow.com/questions/11117745/facebook-how-to-show-the-facebook-page-likes-count-and-like-button-to-like-the")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

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

export default NumberSection;