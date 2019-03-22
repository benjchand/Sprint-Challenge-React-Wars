import React from 'react'
import CharacterElement from './CharacterElement';

const Character = props => {
    return (
        <div className="character-wrapper">
            <h1>CHARACTER LIST</h1>
            {props.dataArrayBeingReferenced.map(characterDataBeingExamined =>
                <CharacterElement 
                    key = {characterDataBeingExamined.created}
                    characterDataBeingLookedUp = {characterDataBeingExamined} 
                />
                )}

        </div>
    )}


export default Character
