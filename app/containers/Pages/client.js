const storageKey = 'ws_provideradmin';

export async function getCategories()
{
  await awaitRandomTime(100);

  return [
  {
    "Id": 0,
    "Name": "None",
    "NameTranslated": "None"
  },
  {
    "Id": 1,
    "Name": "Football",
    "NameTranslated": "Football",
    "SportsIds": [
      1
    ]
  },
  {
    "Id": 2,
    "Name": "Badminton",
    "NameTranslated": "Badminton",
    "SportsIds": [
      2
    ]
  },
  {
    "Id": 4,
    "Name": "Tennis",
    "NameTranslated": "Tennis",
    "SportsIds": [
      35
    ]
  },
  {
    "Id": 8,
    "Name": "Squash",
    "NameTranslated": "Squash",
    "SportsIds": [
      3
    ]
  },
  {
    "Id": 16,
    "Name": "Volleyball",
    "NameTranslated": "Volleyball",
    "SportsIds": [
      4,
      28
    ]
  },
  {
    "Id": 32,
    "Name": "Basketball",
    "NameTranslated": "Basketball",
    "SportsIds": [
      27
    ]
  },
  {
    "Id": 64,
    "Name": "Cycling",
    "NameTranslated": "Cycling",
    "SportsIds": [
      29,
      42,
      56,
      70
    ]
  },
  {
    "Id": 128,
    "Name": "Floorball",
    "NameTranslated": "Floorball",
    "SportsIds": [
      31
    ]
  },
  {
    "Id": 256,
    "Name": "Golf",
    "NameTranslated": "Golf",
    "SportsIds": [
      32
    ]
  },
  {
    "Id": 512,
    "Name": "Running",
    "NameTranslated": "Running",
    "SportsIds": [
      33,
      46
    ]
  },
  {
    "Id": 1024,
    "Name": "Swimming",
    "NameTranslated": "Swimming",
    "SportsIds": [
      34,
      37
    ]
  },
  {
    "Id": 2048,
    "Name": "Petanque",
    "NameTranslated": "Petanque",
    "SportsIds": [
      38
    ]
  },
  {
    "Id": 4096,
    "Name": "TableTennis",
    "NameTranslated": "Table Tennis",
    "SportsIds": [
      39
    ]
  },
  {
    "Id": 8192,
    "Name": "Padel",
    "NameTranslated": "Padel",
    "SportsIds": [
      40
    ]
  },
  {
    "Id": 16384,
    "Name": "Bowling",
    "NameTranslated": "Bowling",
    "SportsIds": [
      41,
      67
    ]
  },
  {
    "Id": 32768,
    "Name": "Yoga",
    "NameTranslated": "Yoga",
    "SportsIds": [
      43,
      47
    ]
  },
  {
    "Id": 65536,
    "Name": "Boxing",
    "NameTranslated": "Boxing",
    "SportsIds": [
      44
    ]
  },
  {
    "Id": 131072,
    "Name": "Dancing",
    "NameTranslated": "Dancing",
    "SportsIds": [
      45,
      85
    ]
  },
  {
    "Id": 262144,
    "Name": "Climbing",
    "NameTranslated": "Climbing",
    "SportsIds": [
      48
    ]
  },
  {
    "Id": 524288,
    "Name": "MartialArts",
    "NameTranslated": "Martial Arts",
    "SportsIds": [
      49,
      82
    ]
  },
  {
    "Id": 1048576,
    "Name": "Rowing",
    "NameTranslated": "Rowing",
    "SportsIds": [
      53,
      63,
      83,
      84
    ]
  },
  {
    "Id": 2097152,
    "Name": "Skiing",
    "NameTranslated": "Skiing",
    "SportsIds": [
      57
    ]
  },
  {
    "Id": 4194304,
    "Name": "Curling",
    "NameTranslated": "Curling",
    "SportsIds": [
      58
    ]
  },
  {
    "Id": 8388608,
    "Name": "Riding",
    "NameTranslated": "Riding",
    "SportsIds": [
      59
    ]
  },
  {
    "Id": 67108864,
    "Name": "Shooting",
    "NameTranslated": "Shooting",
    "SportsIds": [
      62
    ]
  },
  {
    "Id": 134217728,
    "Name": "Fencing",
    "NameTranslated": "Fencing",
    "SportsIds": [
      64
    ]
  },
  {
    "Id": 268435456,
    "Name": "Gymnastics",
    "NameTranslated": "Gymnastics",
    "SportsIds": [
      69
    ]
  },
  {
    "Id": 536870912,
    "Name": "Handball",
    "NameTranslated": "Handball",
    "SportsIds": [
      71
    ]
  },
  {
    "Id": 1073741824,
    "Name": "Skating",
    "NameTranslated": "Skating",
    "SportsIds": [
      72,
      81
    ]
  },
  {
    "Id": 2147483648,
    "Name": "UltimateFrisbee",
    "NameTranslated": "Ultimate",
    "SportsIds": [
      75
    ]
  },
  {
    "Id": 4294967296,
    "Name": "Surfing",
    "NameTranslated": "Surfing",
    "SportsIds": [
      77
    ]
  },
  {
    "Id": 8589934592,
    "Name": "Archery",
    "NameTranslated": "Archery",
    "SportsIds": [
      78
    ]
  },
  {
    "Id": 17179869184,
    "Name": "Baseball",
    "NameTranslated": "Baseball",
    "SportsIds": [
      80
    ]
  },
  {
    "Id": 34359738368,
    "Name": "Fitness",
    "NameTranslated": "Fitness"
  },
  {
    "Id": 68719476736,
    "Name": "Workout",
    "NameTranslated": "Workout",
    "SportsIds": [
      0
    ]
  },
  {
    "Id": 137438953472,
    "Name": "Hall",
    "NameTranslated": "Hall"
  }
];
}

const defaultData = {
    activities: [
            {
                id: 'ef995215-5377-4e38-842a-0e2933bc54fb',
                facilityId: '6807bae8-c51e-4343-bfef-31791a9f5488',
                name: 'Voksen Fjer',
                date: '2021-03-20',
                startTime: '18:00',
                endTime: '19:00',
                participants: 3,
                maxParticipants: 20,
                canCancel: true
            },
            {
                id: 'ef995215-5377-4e38-842a-0e2933bc54fb',
                facilityId: '6807bae8-c51e-4343-bfef-31791a9f5488',
                name: 'Voksen intro',
                date: '2021-03-10',
                startTime: '18:00',
                endTime: '20:00',
                participants: 1,
                maxParticipants: 20,
                canCancel: true
            }
        ],
    facilities : [{
      name: 'Fredericia Tennisklub',
      id: '6807bae8-c51e-4343-bfef-31791a9f5488'
    }, {
        name: 'Hermes Hallen',
        id: '3fc33045-21e6-494d-bc96-967ae26741b5'
      } ]
};

async function awaitRandomTime(time) {
    await new Promise(resolve => setTimeout(resolve, time));
}

export async function getFacilities()
{
  await awaitRandomTime(100);
  
  return getStorage().facilities;
}

export async function createActivity({
    title,
    sport,
    date,
    time,
    duration,
    description,
    facilityId,
    canCancel
})
{
    const storage = getStorage();
    await awaitRandomTime(1000);

    // if (!facilityId) throw errorWithMessage('FacilityId is mandatory');
    // if (storage.facilities.filter(x => x.id == facilityId).length == 0)
    //     throw errorWithMessage('Facility is id not valid');
    // if (!title) throw errorWithMessage('Title is mandatory');
    // if (title.length < 5 || title.length > 50) throw errorWithMessage('Title length should be between 5 and 50');
    // if (!sport) throw errorWithMessage('Sport is mandatory');
    // if (isNaN(sport)) throw errorWithMessage('Sport should be an integer');
    // if (!date) throw errorWithMessage('Date is mandatory');
    // if (!new Date(date).getTime()) throw errorWithMessage('Date is invalid');
    // if (!time) throw errorWithMessage('Time is mandatory');
    // if (!time.match(/\d\d:\d\d/)) throw errorWithMessage('Time format is wrong');
    // if (!duration) throw errorWithMessage('Duration is mandatory');
    // if (isNaN(duration)) throw errorWithMessage('Duration is mandatory');
    // if (!description) throw errorWithMessage('Title is mandatory');
    // if (description.length < 10 || description.length > 200) throw errorWithMessage('Description length should be between 10 and 200');

    let facilityId_valid = false;
    let title_valid = false;
    let sport_valid = false;
    let date_valid = false;
    let time_valid = false;
    let duration_valid = false;
    let description_valid = false;
    let message ="";
    if (!facilityId) 
    {
      message ='Facility id is mandatory';
       return message;
    } 
    else if (storage.facilities.filter(x => x.id == facilityId).length == 0)
    {
      message ='Facility id is mandatory';
       return message;
    } 
    else
      facilityId_valid ==true;


  if (!title) 
  {
    message = 'Title is mandatory';
    return message;
  }
  else if (title.length < 5 || title.length > 50)
  {
    message = 'Title length should be between 5 and 50';
    return message;
  } 
  else
    title_valid =true;

  if (!sport)
  {
    message = 'Sport is mandatory';
    return message;
  }
  else if(isNaN(sport)) 
  {
    message = 'Sport should be an integer';
    return message;
  }
  else
    sport_valid =true;

  if (!date) 
  {
    message = 'Date is mandatory';
    return message;
  }
  else if (!new Date(date).getTime()) 
  {
    message = 'Date is invalid';
    return message;
  }
  else
    date_valid =true;

  if (!time)
  {
    message = 'Time is mandatory';
    return message;
  }
  else if (!time.match(/\d\d:\d\d/)) 
  {
    message = 'Time format is wrong';
    return message;
  }
  else
    time_valid =true;

  if (!duration) 
  {
    message = 'Duration is mandatory';
    return message;
  }
  else if (isNaN(duration))
  {
    message = 'Duration is mandatory';
    return message;
  }
  else
    duration_valid =true;

  if (!description) 
  {
    message = 'Description is mandatory';
    return message;
  }
  else if (description.length < 10 || description.length > 200) 
  {
    message = 'Description length should be between 10 and 200';
    return message;
  }
  else
    description_valid =true;

  
  const id = uuidv4();
  storage.activities = storage.activities || [];
  storage.activities.push({
      id,
      title,
      sport,
      date,
      time,
      duration,
      description,
      facilityId,
      canCancel
  });
  
  persistStorage(storage);

  let result= "success";
  return result;
}


export async function getUser()
{
    await awaitRandomTime(100);

    return {
        name: 'John Doe',
        picture: 'https://static.wannasport.dk/misc/user.jpeg'
    }
}


export async function getActivities(facilityId, sorting, desc)
{
    if (!facilityId) {
        throw new Error('Facility id is mandatory');
    }
    if (sorting && ['date', 'name', 'participants'].indexOf(sorting) < 0) {
        throw new Error('Sorting rule not valid');
    }

    await awaitRandomTime(100);

    const greater = desc ? -1 : 1;
    const smaller = desc ? 1 : -1;

    return getStorage()
        .activities
        .filter(x => x.facilityId == facilityId)
        .sort((x, y) => 
            !sorting || sorting === 'date' ? 
                new Date(x.date + ' ' + x.startTime) > new Date(y.date + ' ' + y.startTime) ? greater : smaller :
            sorting === 'name' ? 
                x.name > y.name ? greater : smaller :
            sorting === 'participants' ? 
                x.participants > y.participants ? greater : smaller : 
            ''
            );
}


export async function getActivity(activityId)
{
    if (!activityId) {
        throw new Error('Facility id is mandatory');
    }

    await awaitRandomTime(100);

    const activity = getStorage().activities.filter(x => x.activityId = activityId)[0];

    if (!activity) {
        throw new Error('Activity not found');
    }

    return activity;
}


export async function cancelActivity(activityId, message)
{
    if (!activityId) {
        throw new Error('Facility id is mandatory');
    }

    await awaitRandomTime(100);

    const storage = getStorage();
    const activity = storage.activities.filter(x => x.activityId = activityId)[0];

    if (!activity) {
        throw new Error('Activity not found');
    }

    activity.participants = 0;
    activity.canCancel = false;

    persistStorage(storage);
}


function errorWithMessage(exceptionMessage, userMessage) {
    const error = new Error(exceptionMessage);
    error.message = userMessage || exceptionMessage;

    return error;
}

function newStorage() {
    persistStorage(defaultData);

    return defaultData;
}

function getStorage() {
    console.log('getting storage');

    let storage = localStorage[storageKey];

    if (!storage) {
        console.log('could not find data!');
        return newStorage();
    }
    console.log('serialized data found');

    try {
        console.log('attempting to parse and return parsed data');
        
        return JSON.parse(storage);
    } catch(e) {
        console.error('unable to parse storage. Resetting.');
    }

    return newStorage();
};

function persistStorage(data) {
    localStorage[storageKey] = JSON.stringify(data);
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
