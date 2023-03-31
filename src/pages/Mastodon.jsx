import React from "react"

export default function Mastodon() {

    const [toots, setToots] = React.useState([])

    React.useEffect(() => {
        fetch('https://techhub.social/api/v1/accounts/109370809940829202/statuses?exclude_replies=true')
            .then(res => res.json())
            .then(data => setToots(data))
    }, [])

    const displayToots = toots.map(toot => <p><div dangerouslySetInnerHTML={{__html: toot.content}} /></p>)
    console.log(displayToots)

    return (
        <>
        <h1>Mastodon Feed</h1>
        <h3>{displayToots}</h3>
        </>
    )
}