import React from 'react';
import './Player.css';

const Player = (props) => {
    const {name, salary, country, image} = props.player;
    const {handleAddPlayer} = props;
    return (
        <div className="playerCard">
            <img src={image} alt="player image" />

            <div>
                <h3>{name}</h3>
                <p>{country}</p>
                <h2>${salary / 1000}K</h2>
                <button className="btn btn-success" onClick={handleAddPlayer}>
                    <i className="fas fa-user-plus"></i> Buy Player
                </button>
            </div>
        </div>
    );
};

export default Player;