import cloneDeep from 'lodash.clonedeep'
import { moveTicket } from '../../helpers/helpers'
import { generateTickets } from "../../helpers/generateTickets"

const initialTicketStates = {
  backlog: [],
  waitingForAnalysis: [],
  inAnalysis: [],
  waitingForDevelopment: [],
  inDevelopment: [],
  waitingForTesting: [],
  inTesting: [],
  readyForDeployment: [],
  deployed: [],
  requiredTickets: [],  
}

export default function(state = initialTicketStates, action) {
  const newState = cloneDeep(state)
  switch (action.type) {
    case 'START_GAME':
      generateTickets(newState, 15)
      return newState
    case 'MOVE_COLUMN': 
      moveTicket(newState, action.payload)
      console.log(newState)
      return newState
    default:
      return state
  }

}
