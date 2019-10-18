import React from 'react';
import './Ticket.css'

const onDragStart = (e, ticket) => {
  e.dataTransfer.setData('ticketId', ticket.id)
  e.dataTransfer.setData('origin', document.getElementById(ticket.id).parentNode.id)
}

function Ticket(props) {
  const { ticket } = props
  return (
    <div draggable id={ticket.id} className="ticket" onDragStart={(e) => onDragStart(e, ticket)}>
      <div className="ticket-name">{ticket.id}</div>
      <div className="money-gain"></div>      
      <div className="work-needed">
        <div className="analysis">Analysis: {ticket.analysisDone}/{ticket.analysis}</div>
        <div className="development">Development: {ticket.developmentDone}/{ticket.development}</div>
        <div className="testing">Testing: {ticket.testingDone}/{ticket.testing}</div>
      </div>
      <div className="cycle-time"></div>
    </div>
  );
}

export default Ticket