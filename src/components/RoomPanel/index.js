import React from 'react';
import * as ReactRedux from 'react-redux';

import {
  getRoom,
} from '../../content';

import Panel from '../Panel';

const RoomPanel = ({
  room,
  setTarget,
}) => {
  return (
    <Panel>
      {room && room.paths.map((path) => {
        return (
          <span
            key={path}
            onClick={() => {
              setTarget({
                type: 'path',
                value: path,
              });
            }}
          >
            {path}
          </span>
        );
      })}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  const {
    addressToRoomDelta,
    idToCharacter,
    playerID,
  } = state;
  const player = idToCharacter[playerID];
  const roomDelta = addressToRoomDelta[player.address];

  const room = getRoom(player.address, roomDelta);

  return { room };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTarget: (target) => {
      dispatch({
        type: "setTarget",
        target,
      });
    },
    setAddress: (address) => {
      dispatch({
        type: "setAddress",
        address,
      });
    },
  };
};

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomPanel);
