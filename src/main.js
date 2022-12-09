import SortView from './view/sort-view';
import FilterView from './view/filter-view.js';
import PointsView from './view/points-view';
import BoardPresenter from './presenter/board-presenter';

import { render } from './render.js';

const sort = document.querySelector('.trip-events');
const siteMainElement = document.querySelector('.trip-events');
const points = document.querySelector('.trip-events');
const filters = document.querySelector('.trip-main__trip-controls');


render(new SortView(), sort);
render(new FilterView(), filters);

const boardPresenter = new BoardPresenter({ boardContainer: siteMainElement });
boardPresenter.init();
render(new PointsView(), points);
