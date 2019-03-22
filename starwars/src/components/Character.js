import React from 'react'
import CharacterElement from './CharacterElement';

const Character = props => {
    return (
        <div className="character-wrapper">
            {props.dataArrayBeingReferenced.map(characterDataBeingExamined =>
                <CharacterElement 
                    key = {characterDataBeingExamined.created}
                    characterDataBeingLookedUp = {characterDataBeingExamined} 
                />
                )}

        </div>
    )}


export default Character
