import { combineReducers } from 'redux'
import GameStateReducer from './gameStateReducer'
import TicketStateReducer from './ticketStateReducer'

const rootReducer = combineReducers({
  gameState: GameStateReducer,
  ticketState: TicketStateReducer,
})

export default rootReducer