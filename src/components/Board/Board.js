import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { moveColumn } from '../../redux/actions'
import './Board.css'

import Ticket from '../Ticket/Ticket'

const onDragOver = (e) => {
  e.preventDefault()
}

const onDrop = (e, target, props) => {
  const ticketId = e.dataTransfer.getData('ticketId')
  const origin = e.dataTransfer.getData('origin')
  props.moveColumn(ticketId, origin, target)
}

function Board(props) {
  return (
    <div className="board">
      <div className='board-header'>
        <div>Backlog</div>
        <div>Analysis</div>
        <div>Development</div>
        <div>Testing</div>
        <div>Ready For Release</div>
        <div>Done</div>
      </div>
      <div className='board-body'>
        <div className="board-column" 
          id="backlog"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {onDrop(e, 'backlog', props)}} >
            {props.ticketState.backlog.map(ticket => <Ticket ticket={ticket} key={ticket.id}/>)}
        </div>
        <div className="board-column"
          id="inAnalysis"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {onDrop(e, 'inAnalysis', props)}} >
            {props.ticketState.inAnalysis.map(ticket => <Ticket key={ticket.id} />)}
        </div>
        <div className="board-column"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {onDrop(e, 'inDevelopment', props)}} >
          {props.ticketState.inDevelopment.map(ticket => <Ticket key={ticket.id} />)}
        </div>
        <div className="board-column" 
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {onDrop(e, 'inTesting', props)}} >
          {props.ticketState.inTesting.map(ticket => <Ticket key={ticket.id} />)}
        </div>
        <div className="board-column"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => {onDrop(e, 'readyForDeployment', props)}} >
          {props.ticketState.readyForDeployment.map(ticket => <Ticket key={ticket.id} />)}
        </div>
        <div className="board-column"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {onDrop(e, 'deployed', props)}} >
          {props.ticketState.deployed.map(ticket => <Ticket key={ticket.id} />)}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
	return {
    ticketState: state.ticketState
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    moveColumn
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)