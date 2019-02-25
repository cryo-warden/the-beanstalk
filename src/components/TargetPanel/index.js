import React from 'react';
import * as ReactRedux from 'react-redux';

import Panel from '../Panel';

const TargetPanel = ({
  target,
  room,
}) => {
  return (
    <Panel>
      {JSON.stringify({
        target,
        room,
      })}
    </Panel>
  );
};

const mapStateToProps = (state) => {
  const target = state.target;
  const room = state.target;

  return {
    target,
    room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps,
)(TargetPanel);
