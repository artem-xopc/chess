import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';
import { Cell } from '../Cell';
import { Colors } from '../Colors';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FiguresNames.PAWN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
