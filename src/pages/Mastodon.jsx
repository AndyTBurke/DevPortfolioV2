import React from "react"
import TootCard from "../components/TootCard"
import mastodon_full_logo from "../assets/mastodon_full_logo.svg"
import "../styles/MastodonPage.css"

export default function Mastodon() {
    const [mastoProfile, setMastoProfile] = React.useState(null)
    const [toots, setToots] = React.useState([])

    React.useEffect(() => {
        fetch('https://techhub.social/api/v1/accounts/109370809940829202/statuses?exclude_replies=true')
            .then(res => res.json())
            .then(data => setToots(data))
    }, [])

    React.useEffect(() => {
        fetch('https://techhub.social/api/v1/accounts/lookup?acct=andyb')
            .then(res => res.json())
            .then(data => setMastoProfile(data))
    }, [])

    const tootCards = toots.map(toot => <TootCard 
        content={toot.content}
        timestamp={toot.created_at}
        boostCount={toot.reblogs_count}
        repliesCount={toot.replies_count}
        favoritesCount={toot.favourites_count}
        tootUrl={toot.url}
        />)
    console.log(mastoProfile)

    return (
        <div className="Mastodon-Page">
            <div className="Mastodon-Page-Header">
                <img src={mastodon_full_logo} />
                <div className="masto-profile-info">
                    <img 
                        className="masto-profile-pic" 
                        src={mastoProfile && mastoProfile.avatar} 
                    />
                    <div>
                        <p>{`Posts:
                            ${mastoProfile && mastoProfile.statuses_count}`}
                        </p>
                        <p>{`Followers:
                            ${mastoProfile && mastoProfile.followers_count}`}
                        </p>
                        <p><a href={mastoProfile && mastoProfile.url}>
                            {mastoProfile && mastoProfile.url.slice(8)}
                        </a></p>
                    </div>
                </div>
            </div>
            {tootCards}
        </div>
    )
}