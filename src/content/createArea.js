import {
  createIDFactory,
  forEachCount,
} from '../utils';

const addPath = (idToRoom, addressA, addressB) => {
  const addressAString = JSON.stringify(addressA);
  const addressBString = JSON.stringify(addressB);

  const roomA = idToRoom[addressAString];
  const roomB = idToRoom[addressBString];

  roomA.paths.add(addressBString);
  roomB.paths.add(addressAString);
};

const addRoomsToArea = ({
  addressParts,
  layout,
  idToRoom,
  createRoomID,
}) => {
  forEachCount(layout.size, (i) => {
    const roomAddress = [
      ...addressParts,
      ['room', i],
    ];

    idToRoom[JSON.stringify(roomAddress)] = {
      address: roomAddress,
      paths: new Set(),
    };
  });

  forEachCount(layout.size - 1, (i) => {
    addPath(idToRoom, [
      ...addressParts,
      ['room', i],
    ], [
      ...addressParts,
      ['room', i + 1],
    ]);
  });

  layout.branches.forEach((branch, i) => {
    const branchAddressParts = [
      ...addressParts,
      ['branch', i],
    ];

    addRoomsToArea({
      addressParts: branchAddressParts,
      layout: branch.layout,
      idToRoom,
      createRoomID,
    });

    addPath(idToRoom, [
      ...addressParts,
      ['room', branch.entryIndex],
    ], [
      ...branchAddressParts,
      ['room', 0],
    ]);

    if (branch.exitIndex != null) {
      addPath(idToRoom, [
        ...addressParts,
        ['room', branch.exitIndex],
      ], [
        ...branchAddressParts,
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
    addressParts: JSON.parse(address),
    layout,
    idToRoom: area.idToRoom,
    createRoomID: createIDFactory(),
  });

  Object.values(area.idToRoom).forEach((room) => {
    room.paths = [...room.paths];
  });

  return area;
};

export default createArea;
