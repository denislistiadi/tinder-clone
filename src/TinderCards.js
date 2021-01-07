import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Via Vallen",
            url:
            "https://non-indonesia-distribution.brta.in/2018-11/8fc3bcf67183042565804b1992964f277fb188e4.jpg",
        },
        {
            name: "Denny Caknan",
            url:
            "https://cdn.idntimes.com/content-images/community/2020/06/denny-caknan-20200626-204037-0-b12a88914497e9470ccec73caec562b9_600x400.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete );
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen= {() => outOfFrame(person.name)}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.url})`}}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))};
            </div>
        </div>
    )
}

export default TinderCards;
