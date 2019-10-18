const initialGameState = {
  currentDay: 0,
  currentMoney: 0,
}

export default function(state = initialGameState, action) {
  switch (action.type) {
    case 'START_GAME':
      return state  
    default:
      return state
  }

}