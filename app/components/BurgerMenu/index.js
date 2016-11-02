/**
 *
 * BurgerMenu.react.js
 *
 * A burger menu using React Burger Menu with Redux
 * https://github.com/negomi/react-burger-menu
 */

import {createStore, combineReducers} from 'redux';
import {reducer as burgerMenu} from 'redux-burger-menu';

const reducers = {
  // Your other reducers go here
  burgerMenu // Must be mounted at 'burgerMenu'
}

const reducer = combineReducers(reducers);
const store = createStore(reducer);

// Menu.js

import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

export default reduxBurgerMenu(Menu);