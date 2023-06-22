import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FiguresNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
