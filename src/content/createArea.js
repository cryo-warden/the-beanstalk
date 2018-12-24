import {
  createIDFactory,
  createRNG,
  forEachCount,
} from '../utils';

const addPath = (idToRoom, addressA, addressB) => {
  const addressAString = JSON.stringify(addressA);
  const addressBString = JSON.stringify(addressB);

  const roomA = idToRoom[addressAString];
  const roomB = idToRoom[addressBString];

  roomA.paths.push(addressBString);
  roomB.paths.push(addressAString);
};

const addRoomsToArea = ({
  address,
  layout,
  idToRoom,
  createRoomID,
}) => {
  forEachCount(layout.size, (i) => {
    const roomAddress = [
      ...address,
      ['room', i],
    ];

    idToRoom[JSON.stringify(roomAddress)] = {
      address: roomAddress,
      paths: [],
    };
  });

  forEachCount(layout.size - 1, (i) => {
    addPath(idToRoom, [
      ...address,
      ['room', i],
    ], [
      ...address,
      ['room', i + 1],
    ]);
  });

  layout.branches.forEach((branch, i) => {
    const branchAddress = [
      ...address,
      ['branch', i],
    ];

    addRoomsToArea({
      address: branchAddress,
      layout: branch.layout,
      idToRoom,
      createRoomID,
    });

    addPath(idToRoom, [
      ...address,
      ['room', branch.entryIndex],
    ], [
      ...branchAddress,
      ['room', 0],
    ]);

    if (branch.exitIndex != null) {
      addPath(idToRoom, [
        ...address,
        ['room', branch.exitIndex],
      ], [
        ...branchAddress,
        ['room', branch.layout.size - 1],
      ]);
    }
  });
};

const createArea = ({
  address,
  layout,
}) => {
  const area = {
    address,
    idToRoom: {},
  };

  addRoomsToArea({
    address,
    layout,
    idToRoom: area.idToRoom,
    createRoomID: createIDFactory(),
  });

  return area;
};

export default createArea;
