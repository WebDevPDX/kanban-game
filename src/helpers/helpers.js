export const randomIntBetween = function(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

export const moveTicket = (newState, { ticketId, origin, target } ) => {
  console.log(newState, ticketId, origin, target)
  const ticket = newState[origin].find(ticket => ticket.id === ticketId)
  const index = newState[origin].findIndex(ticket => ticket.id === ticketId)
  newState[target].push(ticket)
  newState[origin].splice(index, 1)
  return newState
}