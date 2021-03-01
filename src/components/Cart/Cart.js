import React from 'react';
import './Cart.css';

const Cart = ({players}) => {
    return (
        <div className="cart">
            <p>
                <i className="fas fa-users"></i> {players.length}
            </p>
            {players.map((player) => (
                <div>
                    <p className="player">
                        <i className="fas fa-user"></i>{" "}
                        {player.name}: ${player.salary / 1000}K
                    </p>
                </div>
            ))}
            <p>
                <i className="fas fa-money-check-alt"></i>
                {" $"}
                {totalBudget()}
            </p>
        </div>
    );
function totalBudget() {
    const t = players.reduce((total, player) => total + player.salary, 0)
    return `${t/100000} Lakh`
}
};

export default Cart;