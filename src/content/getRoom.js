import {
  createRange,
} from '../utils';

import createArea from './createArea';
import createLayout from './createLayout';

const applyRoomDelta = (room, roomDelta) => {
  // TODO Implement room mutability.
  return room;
};

const getRoom = (address, roomDelta) => {
  const areaAddress = JSON.stringify([JSON.parse(address)[0]]);

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

  console.log({ area, address });

  const room = area.idToRoom[address];

  return applyRoomDelta(room, roomDelta);
};

export default getRoom;
