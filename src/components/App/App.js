import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { startGame } from '../../redux/actions'

import Board from '../Board/Board'

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Board />
      <button onClick={props.startGame}>Start Game</button>
    </div>
  );
}

function mapStateToProps(state) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    startGame
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)