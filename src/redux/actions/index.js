export const startGame = () => ({
	type: 'START_GAME',
})

export const moveColumn = (ticketId, origin, target) => ({
	type: 'MOVE_COLUMN',
	payload: { ticketId, origin, target}
})