/**
 * JKT48 API Client
 * A module to access JKT48 data from v2.jkt48connect.my.id API
 */

const jkt48Api = {
  members: require('./src/features/jkt48/members'),
  memberDetail: require('./src/features/jkt48/memberDetail'),
  birthday: require('./src/features/jkt48/birthday'),
  
  events: require('./src/features/jkt48/events'),
  
  recent: require('./src/features/jkt48/recent'),
  replay: require('./src/features/jkt48/replay'),
  recentDetail: require('./src/features/jkt48/recentDetail'),
  live: require('./src/features/jkt48/live'),
  liveYoutube: require('./src/features/jkt48/liveYoutube'),
  liveIdn: require('./src/features/jkt48/liveIdn'),
  liveShowroom: require('./src/features/jkt48/liveShowroom'),
  youtube: require('./src/features/jkt48/youtube'),

  chatStream: require('./src/features/jkt48/chatStream'),
  chatStreamSR: require('./src/features/jkt48/chatStreamSr'),

  news: require('./src/features/jkt48/news'),
  newsDetail: require('./src/features/jkt48/newsDetail'),
  
  theater: require('./src/features/jkt48/theater'),
  theaterDetail: require('./src/features/jkt48/theaterDetail'),
  
  videoCall: require('.src/features/jkt48/videoCall'),
  videoCallToday: require('.src/features/jkt48/videoCallToday),
                          
  admin: require('./src/features/admin/admin'),
  
  database: require('./src/features/database/database'),
  
  check: require('./src/features/system/check'),
  
  gag: require('./src/features/gag/data')
};

module.exports = jkt48Api;
