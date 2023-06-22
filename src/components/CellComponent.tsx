import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProp {
  cell: Cell;
  selected: boolean;
  selectCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProp> = ({ cell, selected, selectCell }) => {
  return (
    <div
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      onClick={() => selectCell(cell)}
    >
      <div className={[cell.avaitable ? 'underAttack' : ''].join('')}>
        {cell.figure?.logo && <img src={cell.figure.logo} />}
      </div>
      {cell.avaitable && !cell.figure && <div className="available"></div>}
    </div>
  );
};

export default CellComponent;
