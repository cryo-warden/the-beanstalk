import React from 'react';
import * as ReactRedux from 'react-redux';

import {
  createLayout,
  createArea,
} from '../../content';
import {
  createRange,
} from '../../utils';

import Panel from '../Panel';

const RoomPanel = ({
  address,
  areaAddress,
  setAddress,
}) => {
  const layout = createLayout({
    address: areaAddress,
    sizeRange: createRange(3, 12),
    branchCountRange: createRange(2, 5),
    complexity: 1,
  });
  const area = createArea({
    address: areaAddress,
    layout,
  });
  const room = area.idToRoom[JSON.stringify(address)];

  return (
    <Panel>
      <h3>{JSON.stringify(address)}</h3>
      <div>
        {room.paths.map((path) => {
          return (
            <div
              key={path}
              onClick={() => {
                setAddress(JSON.parse(path));
              }}
            >
              {path}
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

const mapStateToProps = (state) => {
  return {
    address: state.address,
    areaAddress: [state.address[0]],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
