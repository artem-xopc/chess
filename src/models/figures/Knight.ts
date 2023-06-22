import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/black-knight.png';
import whiteLogo from '../../assets/white-knight.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FiguresNames.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
