import { gameState, ticketStates } from './gameState'
import { generateTickets } from './helpers/generateTickets'


export const advanceDay = () => {
  gameState.currentDay += 1
}

export const calculateMoney = (currentMoney) => {
  let earned = 0
  ticketStates.deployed.forEach(ticket => { earned += ticket.moneyPerDay})
  let lost = 0
  ticketStates.requiredTickets.forEach(ticket => {
    if(gameState.currentDay > ticket.requiredBy && ticket.releaseDay === null) {
      lost += ticket.penaltyPerDay
    }
  })
  return currentMoney + earned - lost
}


if (gameState.currentDay === 0) {
  generateTickets(15)
}
else {
  advanceDay()
  calculateMoney()
}


