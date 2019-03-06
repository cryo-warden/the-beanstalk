import * as Redux from 'redux';

const defaultState = {
  playerID: 'player',
  target: {
    type: null,
    id: null,
  },
  idToCharacter: {
    player: {
      address: JSON.stringify([
        ['area', 0],
        ['room', 0],
      ]),
    },
  },
  addressToRoomDelta: {},
};

export default Redux.createStore((state = defaultState, action) => {
  if (action.type === 'setTarget') {
    return {
      ...state,
      target: action.target,
    };
  }

  if (action.type === 'setAddress') {
    return {
      ...state,
      address: action.address,
    };
  }

  return state;
});
