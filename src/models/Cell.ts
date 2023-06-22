import { Board } from './Board';
import { Colors } from './Colors';
import { Figure } from './figures/Figure';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  avaitable: boolean; // для перемещения выбранной фигуры на определённую клетку
  id: number;

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.avaitable = false;
    this.id = Math.random();
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) return false;
    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
  }
  isEmptyHorizontal(target: Cell): boolean {
    return true;
  }
  isEmptyDyagonal(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
