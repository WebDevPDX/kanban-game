import { randomIntBetween } from './helpers'

const generateTicket = () => {
  const ticket = {
    id: Math.random().toString(36).substr(2, 12),
    dayPicked: null,
    analysis: randomIntBetween(1, 15),
    analysisDone: 0,
    development: randomIntBetween(1, 15),
    developmentDone: 0,
    testing: randomIntBetween(1, 15),
    testingDone: 0,
    releaseDay: null,
    currentState: null,
    moneyPerDay: null,
    isRequired: Math.random() < 0.2, 
    requiredBy: null,
    penaltyPerDay: null,
  }
  ticket.moneyPerDay = ((ticket.analysis + ticket.development + ticket.testing) * 100) + (randomIntBetween(1, 10) * 20)

  if (ticket.isRequired) {
    ticket.penaltyPerDay = ticket.moneyPerDay * randomIntBetween(1, 5)
    ticket.requiredBy = randomIntBetween(3, 18)
  }
  return ticket
}

export const generateTickets = (newState ,number) => {
  for(let i = 0; i < number; i += 1) {
    const newTicket = generateTicket()
    newState.backlog.push(newTicket)
    if (newTicket.isRequired) {
      newState.requiredTickets.push(newTicket)
    }
  }
}