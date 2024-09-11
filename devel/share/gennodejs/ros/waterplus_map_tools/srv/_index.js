
"use strict";

let AddNewWaypoint = require('./AddNewWaypoint.js')
let GetWaypointByName = require('./GetWaypointByName.js')
let GetChargerByName = require('./GetChargerByName.js')
let SaveWaypoints = require('./SaveWaypoints.js')
let GetNumOfWaypoints = require('./GetNumOfWaypoints.js')
let GetWaypointByIndex = require('./GetWaypointByIndex.js')

module.exports = {
  AddNewWaypoint: AddNewWaypoint,
  GetWaypointByName: GetWaypointByName,
  GetChargerByName: GetChargerByName,
  SaveWaypoints: SaveWaypoints,
  GetNumOfWaypoints: GetNumOfWaypoints,
  GetWaypointByIndex: GetWaypointByIndex,
};
