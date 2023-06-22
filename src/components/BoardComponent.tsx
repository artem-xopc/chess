import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function selectCell(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    underAttackCells();
  }, [selectedCell]);

  function underAttackCells() {
    board.underAttackCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              selectCell={selectCell}
              key={cell.id}
              cell={cell}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;

// <div className="cell black">1</div>
// <div className="cell white">2</div>
// <div className="cell black">3</div>
// <div className="cell white">4</div>
// <div className="cell black">5</div>
// <div className="cell white">6</div>
// <div className="cell black">7</div>
// <div className="cell white">8</div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell black">1</div>
// <div className="cell white">2</div>
// <div className="cell black">3</div>
// <div className="cell white">4</div>
// <div className="cell black">5</div>
// <div className="cell white">6</div>
// <div className="cell black">7</div>
// <div className="cell white">8</div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell black">1</div>
// <div className="cell white">2</div>
// <div className="cell black">3</div>
// <div className="cell white">4</div>
// <div className="cell black">5</div>
// <div className="cell white">6</div>
// <div className="cell black">7</div>
// <div className="cell white">8</div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell black">1</div>
// <div className="cell white">2</div>
// <div className="cell black">3</div>
// <div className="cell white">4</div>
// <div className="cell black">5</div>
// <div className="cell white">6</div>
// <div className="cell black">7</div>
// <div className="cell white">8</div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
// <div className="cell white"></div>
// <div className="cell black"></div>
