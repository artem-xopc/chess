import React, { useState, FC, useRef, useEffect } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [whiteTime, setWhiteTime] = useState(300);
  const [blackTime, setBlackTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => startTime(), [currentPlayer]);

  function startTime() {
    if (timer.current) clearInterval(timer.current);

    const callback =
      currentPlayer?.color === Colors.WHITE ? decrementWhiteTime : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }
  function decrementBlackTime() {
    setBlackTime((prev) => prev - 1);
  }
  function decrementWhiteTime() {
    setWhiteTime((prev) => prev - 1);
  }

  function handleRestart() {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  }

  return (
    <div>
      <div className="restart">
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <h2 className="blackTime">Чёрные {blackTime}</h2>
      <h2 className="whiteTime">Белые {whiteTime}</h2>
    </div>
  );
};

export default Timer;
