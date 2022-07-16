import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import cards from "./cards"

export default function App() {
    const renderedCards = cards.map( card => {
        return (
                <Card
                key={card.id}
                // most efficient way, see
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
                // parameters must match object properties ofc
                {...card}

                // 2 others ways to do this :

                // title={card.title}
                // description={card.description}
                // etc etc etc...
                // openSpots={card.openSpots}

                // OR

                // card={card}
                />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cardsContainer">
                {renderedCards}
            </div>
        </div>
    )
}




