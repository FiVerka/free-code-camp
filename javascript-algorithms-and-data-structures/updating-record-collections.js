/*
We have an object literal representing a part of your musical album collection.
Each album has a unique id number as its key and several other properties.
Not all albums have complete information.

An "updateRecords" function takes an object literal, "records", containing
the musical album collection, an "id", a "prop" (like "artist" or "tracks"), and a "value".
The function uses the rules below to modify the object passed to the function.

* The function always returns the entire record collection object.
* If "prop" isn't "tracks" and "value" isn't an empty string,
  the function updates or sets that album's "prop" to "value".
* If "prop" is "tracks" but the album doesn't have a "tracks" property,
  the function creates an empty array and adds "value" to it.
* If "prop" is "tracks" and "value" isn't an empty string,
  the function adds "value" to the end of the album's existing "tracks" array.
* If "value" is an empty string,
  the function deletes the given "prop" property from the album.

*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop == "tracks") {
    if (records[id].hasOwnProperty(prop)) {
      if (value === "") {
        delete records[id][prop];
      } else {
        records[id][prop].push(value);
      }
    } else {
      if (value === "") {
        // pass;
      } else {
        records[id][prop] = [value];
      }
    }
  } else {
    if (value === "") {
      delete records[id][prop];
    } else {
      records[id][prop] = value;
    }
  }
  return records;
}

// Examples
updateRecords(recordCollection, 5439, 'artist', 'ABBA');  // "artistL should be the string "ABBA"
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");  // "tracks" should have the string "Take a Chance on Me" as the last element
updateRecords(recordCollection, 2548, "artist", "");  // "artist" should not be set
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");  // "tracks" should have the string "Addicted to Love" as the last element
updateRecords(recordCollection, 2468, "tracks", "Free");  // "tracks" should have the string "1999" as the first element
updateRecords(recordCollection, 2548, "tracks", "");  // "tracks" should not be set
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");  // "albumTitle" should be the string "Riptide"
