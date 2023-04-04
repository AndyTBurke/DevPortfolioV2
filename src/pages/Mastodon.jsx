import React from "react"
import TootCard from "../components/TootCard"
import "../styles/MastodonPage.css"

export default function Mastodon() {

    const [toots, setToots] = React.useState([])

    React.useEffect(() => {
        fetch('https://techhub.social/api/v1/accounts/109370809940829202/statuses?exclude_replies=true')
            .then(res => res.json())
            .then(data => setToots(data))
    }, [])

    const tootCards = toots.map(toot => <TootCard 
        content={toot.content}
        timestamp={toot.created_at}
        boostCount={toot.reblogs_count}
        repliesCount={toot.replies_count}
        favoritesCount={toot.favourites_count}
        tootUrl={toot.url}
        />)
    console.log(toots[0])

    return (
        <div className="Mastodon-Page">
            <h1>Mastodon Feed</h1>
            {tootCards}
        </div>
    )
}