import React from 'react';

const CharacterElement = props => {
    return (
        <div className='character-element-wrapper'>
        
            <h2 className='character-name-header'>
                {props.characterDataBeingLookedUp.name}
            </h2>
            <h3 className='character-information-header'>Information: </h3>
            <ul className='character-information-list'>
                <li> Birth: {props.characterDataBeingLookedUp.birth_year} </li>
                <li> Gender: {props.characterDataBeingLookedUp.gender} </li>
                <li> Height: {props.characterDataBeingLookedUp.height} </li>
                <li> Mass: {props.characterDataBeingLookedUp.mass} </li>
                <li> Coloring: {props.characterDataBeingLookedUp.skin_color} </li>

            </ul>
        </div>
    )
}

export default CharacterElement


//      birth_year: "19BBY"
// eye_color: "blue"
// films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
//      gender: "male"
// hair_color: "blond"
//  height: "172"
// homeworld: "https://swapi.co/api/planets/1/"
//      mass: "77"
//      name: "Luke Skywalker"
// skin_color: "fair"
// species: ["https://swapi.co/api/species/1/"]
// starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// url: "https://swapi.co/api/people/1/"
// vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
// __proto__: Object