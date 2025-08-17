![1000476284](https://github.com/user-attachments/assets/5c8eaf63-ec30-447a-b7f6-fdc0dbec4532)

# JKT48 CORE

A Node.js module for accessing JKT48 data from the v2.jkt48connect.my.id API.

> **Documentation:** For complete details about data output and API usage, visit [docs.jkt48connect.my.id](https://docs.jkt48connect.my.id)

## Installation

```bash
npm install @jkt48/core
```

## Features

This package provides easy access to JKT48 data through the following features:

### Members
- Get all JKT48 members
- Get member details by name
- Get member birthdays

### Events
- Get JKT48 events information

### Recent and Live
- Get recent activities
- Get recent activity details
- Get live information
- Get live YouTube information
- Get live IDN information
- Get live Showroom information
- Get YouTube content

### News
- Get news information
- Get news details by ID

### Theater
- Get theater information
- Get theater details by ID

### Replay 
- Get all replay theater & live 

### Chat Stream
- Get all chat stram for idn live & showroom

### System
- ApiKey Validation

## Module System Support

This package supports both CommonJS and ES Modules (ESM):

- ✅ **CommonJS** - Traditional `require()` syntax
- ✅ **ES Modules** - Modern `import` syntax

## Usage

All functions in this package require an API key that should be passed as a parameter.

### CommonJS Example

```javascript
const jkt48Api = require('@jkt48/core');

// Example: Get all JKT48 members
async function getMembers() {
  try {
    const apiKey = 'your-api-key-here';
    const members = await jkt48Api.members(apiKey);
    console.log(members);
  } catch (error) {
    console.error(error.message);
  }
}

getMembers();
```

### ES Modules (ESM) Example

```javascript
import jkt48Api from '@jkt48/core';

// Example: Get all JKT48 members
async function getMembers() {
  try {
    const apiKey = 'your-api-key-here';
    const members = await jkt48Api.members(apiKey);
    console.log(members);
  } catch (error) {
    console.error(error.message);
  }
}

getMembers();
```

#### Named Imports (ESM)
```javascript
import { members, memberDetail, birthday } from '@jkt48/core';

// Example: Get member details
async function getMemberInfo() {
  try {
    const apiKey = 'your-api-key-here';
    const allMembers = await members(apiKey);
    const memberInfo = await memberDetail('Feni', apiKey);
    const birthdays = await birthday(apiKey);
    
    console.log({ allMembers, memberInfo, birthdays });
  } catch (error) {
    console.error(error.message);
  }
}

getMemberInfo();
```

## API Keys

### Free API Keys

You can use the following free API keys provided by the JKT48Connect team:
- `J-D55B`
- `J-QV0Z`

### Custom API Keys

For custom API keys with various plans such as Premium and PremiumPlus (Premium+), please contact Valzy on WhatsApp:
- WhatsApp: [wa.me/6285701479245](https://wa.me/6285701479245)

## API Reference

### Members

#### Get all members
```javascript
// CommonJS
const members = await jkt48Api.members(apiKey);

// ESM
import { members } from '@jkt48/core';
const memberList = await members(apiKey);
```

#### Get member details by name
```javascript
// CommonJS
const memberName = 'Feni';
const memberDetail = await jkt48Api.memberDetail(memberName, apiKey);

// ESM
import { memberDetail } from '@jkt48/core';
const memberName = 'Feni';
const memberInfo = await memberDetail(memberName, apiKey);
```

#### Get birthdays
```javascript
// CommonJS
const birthdays = await jkt48Api.birthday(apiKey);

// ESM
import { birthday } from '@jkt48/core';
const birthdays = await birthday(apiKey);
```

### Events

#### Get events
```javascript
// CommonJS
const events = await jkt48Api.events(apiKey);

// ESM
import { events } from '@jkt48/core';
const eventList = await events(apiKey);
```

### Recent and Live

#### Get recent activities
```javascript
// CommonJS
const recent = await jkt48Api.recent(apiKey);

// ESM
import { recent } from '@jkt48/core';
const recentList = await recent(apiKey);
```

#### Get recent activity details
```javascript
// CommonJS
const liveId = '123456';
const recentDetail = await jkt48Api.recentDetail(liveId, apiKey);

// ESM
import { recentDetail } from '@jkt48/core';
const liveId = '123456';
const detail = await recentDetail(liveId, apiKey);
```

#### Get live information
```javascript
// CommonJS
const live = await jkt48Api.live(apiKey);

// ESM
import { live } from '@jkt48/core';
const liveInfo = await live(apiKey);
```

#### Get live YouTube information
```javascript
// CommonJS
const liveYoutube = await jkt48Api.liveYoutube(apiKey);

// ESM
import { liveYoutube } from '@jkt48/core';
const ytLive = await liveYoutube(apiKey);
```

#### Get live IDN information
```javascript
// CommonJS
const liveIdn = await jkt48Api.liveIdn(apiKey);

// ESM
import { liveIdn } from '@jkt48/core';
const idnLive = await liveIdn(apiKey);
```

#### Get live Showroom information
```javascript
// CommonJS
const liveShowroom = await jkt48Api.liveShowroom(apiKey);

// ESM
import { liveShowroom } from '@jkt48/core';
const srLive = await liveShowroom(apiKey);
```

#### Get YouTube content
```javascript
// CommonJS
const youtube = await jkt48Api.youtube(apiKey);

// ESM
import { youtube } from '@jkt48/core';
const ytContent = await youtube(apiKey);
```

### News

#### Get news
```javascript
// CommonJS
const news = await jkt48Api.news(apiKey);

// ESM
import { news } from '@jkt48/core';
const newsList = await news(apiKey);
```

#### Get news details
```javascript
// CommonJS
const newsId = '123456';
const newsDetail = await jkt48Api.newsDetail(newsId, apiKey);

// ESM
import { newsDetail } from '@jkt48/core';
const newsId = '123456';
const detail = await newsDetail(newsId, apiKey);
```

### Theater

#### Get theater information
```javascript
// CommonJS
const theater = await jkt48Api.theater(apiKey);

// ESM
import { theater } from '@jkt48/core';
const theaterInfo = await theater(apiKey);
```

#### Get theater details
```javascript
// CommonJS
const theaterId = '123456';
const theaterDetail = await jkt48Api.theaterDetail(theaterId, apiKey);

// ESM
import { theaterDetail } from '@jkt48/core';
const theaterId = '123456';
const detail = await theaterDetail(theaterId, apiKey);
```

### Replay

#### Get replay data
```javascript
// CommonJS
const replay = await jkt48Api.replay(apiKey);

// ESM
import { replay } from '@jkt48/core';
const replayData = await replay(apiKey);
```

### Chat Stream  

#### Get chat stream idn
```javascript
// CommonJS
const chatStream = await jkt48Api.chatStream(username, slug, apiKey);

// ESM
import { chatStream } from '@jkt48/core';
const chat = await chatStream(username, slug, apiKey);
```

#### Get chat stream Showroom
```javascript
// CommonJS
const chatStreamSR = await jkt48Api.chatStreamSR(roomId, apiKey);

// ESM
import { chatStreamSR } from '@jkt48/core';
const srChat = await chatStreamSR(roomId, apiKey);
```
### Video call schedule [NEW]

### Video Call
```javascript
// CommonJS
const videoCall = await jkt48Api.videoCall(apiKey) // no params
const videoCall = await jkt48Api.videoCall(sesi, apiKey) // sesi params
const videoCall = await jkt48Api.videoCall(date, apiKey) // date params
const videoCAll = await jkt48Api.videoCall(member, apiKey) // member params
const videoCAll = await jkt48Api.videoCall(sesi, date, member, apiKey) // combine params

//ESM
import { videoCall } from '@jkt48/core';
const getVC = await videoCall(apiKey);
```

### Video Call Today
```javascript
// CommonJS
const videoCallToday = await jkt48Api.videoCallToday(apiKey)
//ESM
import { videoCallToday } from '@jkt48/core';
const getVCToday = await videoCallToday(apiKey);
```

#### ApiKey Validation
```javascript
// CommonJS
const check = await jkt48Api.check(apiKey);

// ESM
import { check } from '@jkt48/core';
const validation = await check(apiKey);
```

## Error Handling

This package throws errors with descriptive messages when:
- API key is not provided
- Required parameters are missing
- The API returns an error
- Network errors occur

Example of error handling:

### CommonJS
```javascript
try {
  const members = await jkt48Api.members(apiKey);
  console.log(members);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

### ESM
```javascript
import { members } from '@jkt48/core';

try {
  const memberList = await members(apiKey);
  console.log(memberList);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

## About the Team

This module was created by the JKT48Connect team, which consists of several specialized teams:

- **J-Force**: Focuses on package and module development
- **Zenova**: Focuses on website and bot development (WhatsApp/Discord/Telegram)
- **JKT48Connect**: The parent team that oversees all projects

All these teams were founded by **Valzyy**, who created the entire ecosystem.

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome!
