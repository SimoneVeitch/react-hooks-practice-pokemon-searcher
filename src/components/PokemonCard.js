import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, sprites, hp }) {
  const [isFront, setIsFront] = useState(true);

  const toggleSprite = () => {
    setIsFront((prevState) => !prevState);
  };

  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img src={isFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;