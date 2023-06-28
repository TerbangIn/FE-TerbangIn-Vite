
const initialState = { counterAdult: 0, counterChild: 0, counterBaby: 0, counterAmount: 2 + ' Penumpang', showCounter: true, showCounterAdult: true, showCounterChild: true, showCounterBaby: true }

const passengersReducer = (state = initialState, action) => {
    if (action.type === 'plusAdult') {
        return {
            ...state,
            counterAdult: state.counterAdult + 1,
            showCounterAdult: state.showCounterAdult
        }
    }
    if (action.type === 'minusAdult') {
        return {
            ...state,
            counterAdult: state.counterAdult - 1,
            showCounterAdult: state.showCounterAdult
        }
    }
    if (action.type === 'plusChild') {
        return {
            ...state,
            counterChild: state.counterChild + 1,
            showCounterChild: state.showCounterChild
        }
    }
    if (action.type === 'minusChild') {
        return {
            ...state,
            counterChild: state.counterChild - 1,
            showCounterChild: state.showCounterChild
        }
    }
    if (action.type === 'plusBaby') {
        return {
            ...state,
            counterBaby: state.counterBaby + 1,
            showCounterBaby: state.showCounterBaby
        }
    }
    if (action.type === 'minusBaby') {
        return {
            ...state,
            counterBaby: state.counterBaby - 1,
            showCounterBaby: state.showCounteBaby
        }
    } if (action.type === 'amountPassengers') {
        return {
            ...state,
            counterAmount: state.counterAdult + state.counterChild + state.counterBaby + ' Penumpang',
            showCounter: state.showCounter
        }
    }

    return state
}

export default passengersReducer;