import EditPointView from '../view/edit-view';
import BoardView from '../view/board-view';
import AddNewPointView from '../view/add-point-view';


import { render } from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  editPointView = new EditPointView();
  addPointView = new AddNewPointView();


  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.editPointView, this.boardContainer);
    render(this.addPointView, this.boardContainer);
  }
}
