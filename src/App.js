import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player';
import players_list from './data/players_list_20.json';

function App() {

  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
        setPlayers(players_list);
        setLoading(false);
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
      <div className="App">
          <h1>Select your team</h1>
          <div className="container">
              <div className="playersContainer">
                  {players.map((player) => (
                      <Player
                          player={player}
                          handleAddPlayer={() => handleAddPlayer(player)}
                          key={player.id}
                      />
                  ))}
              </div>

              <Cart players= {cart} />

          </div>
      </div>
  );

  function handleAddPlayer(player) {
    console.log('added!', player.name);
    const newCart = cart.includes(player) ? cart.filter(p => p !== player) : [...cart, player];
    setCart(newCart);

  }
}

export default App;
