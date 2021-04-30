module.exports = [

  {
    key: 'partner',
    name: '  Partner',
    icon: 'business',
    title: true
  },
  {
    key: 'partnerinfo',
    icon: 'bookmark',
    name: 'Partner Info',
    linkParent: '/app',

  },
  {
    key: 'createfacility',
    icon: 'bookmark',
    name: 'Create Facility',
    linkParent: '/app',
  },
  {
    key: 'facility',
    name: '  Facility',
    icon: 'business',
    title: true,
  },
  {
    key: 'choose',
    name: 'Choose facility',
    icon: 'undo',
    select: true,
    option: [
      'facility1',
      'facility2',
      'facility3'
    ]
  },
  {
    key: 'facilityinfo',
    icon: 'bookmark',
    name: 'Facility Infos',
    linkParent: '/app'
  },
  // {
  //   key: 'forms',
  //   name: 'Create Activity',
  //   linkParent: '/app/form',
  //   icon: 'account_circle',
  // },
  {
    key: 'forms',
    name: 'Create Activity',
    // linkParent: '/app/1/form',
    //linkFacility: (facilityId) => `/app/${facilityId}/form`,
    linkFacility: '/app/{facilityId}/create-activity',
    icon: 'playlist_add',
  },
  {
    key: 'tables',
    name: 'Activities',
    icon: 'dashboard',
    linkFacility: '/app/{facilityId}/list-activities'
  },
  {
    key: 'booking',  
    name: 'Bookings',
    icon: 'event_note',
    linkParent: '/app'
  },    
  {
    key: 'setting',
    icon: 'settings',
    name: 'Setting',
    linkParent: '#'
  },
  

];
