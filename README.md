
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
- Get all chat stream for IDN live & Showroom

### System
- ApiKey Validation

### Video call schedule
- Video call
- Video call today

## Enhanced Authentication Support

**NEW!** This package now supports enhanced authentication options with both API keys and priority tokens:

### Authentication Options

1. **API Key Only** (backward compatible)
```javascript
await jkt48Api.members('your-api-key');
```

2. **Priority Token Only**
```javascript
await jkt48Api.members({ priorityToken: 'your-priority-token' });
```

3. **Both API Key and Priority Token**
```javascript
await jkt48Api.members({ 
  apiKey: 'your-api-key',
  priorityToken: 'your-priority-token' 
});
```

4. **No Authentication** (for public endpoints)
```javascript
await jkt48Api.members();
```

### Priority Tokens

Priority tokens provide enhanced access and may offer:
- Higher rate limits
- Priority queue processing
- Access to premium features
- Reduced latency

For priority tokens, please contact Valzy on WhatsApp: [wa.me/6285701479245](https://wa.me/6285701479245)

## Module System Support

This package supports both CommonJS and ES Modules (ESM):

- ✅ **CommonJS** - Traditional `require()` syntax
- ✅ **ES Modules** - Modern `import` syntax

## Usage

All functions in this package support flexible authentication options. You can use API keys, priority tokens, or both.

### CommonJS Example

```javascript
const jkt48Api = require('@jkt48/core');

// Example with API key (backward compatible)
async function getMembersWithApiKey() {
  try {
    const apiKey = 'your-api-key-here';
    const members = await jkt48Api.members(apiKey);
    console.log(members);
  } catch (error) {
    console.error(error.message);
  }
}

// Example with enhanced authentication
async function getMembersWithAuth() {
  try {
    const members = await jkt48Api.members({
      apiKey: 'your-api-key-here',
      priorityToken: 'your-priority-token'
    });
    console.log(members);
  } catch (error) {
    console.error(error.message);
  }
}

getMembersWithAuth();
```

### ES Modules (ESM) Example

```javascript
import jkt48Api from '@jkt48/core';

// Example with enhanced authentication
async function getMembers() {
  try {
    const members = await jkt48Api.members({
      priorityToken: 'your-priority-token'
    });
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

// Example: Get member details with different auth methods
async function getMemberInfo() {
  try {
    // Using API key only
    const allMembers = await members('your-api-key');
    
    // Using priority token only
    const memberInfo = await memberDetail('Feni', { 
      priorityToken: 'your-priority-token' 
    });
    
    // Using both
    const birthdays = await birthday({
      apiKey: 'your-api-key',
      priorityToken: 'your-priority-token'
    });
    
    console.log({ allMembers, memberInfo, birthdays });
  } catch (error) {
    console.error(error.message);
  }
}

getMemberInfo();
```

## API Keys and Authentication

### Free API Keys

You can use the following free API keys provided by the JKT48Connect team:
- `J-D55B`
- `J-QV0Z`

### Custom API Keys and Priority Tokens

For custom API keys with various plans such as Premium and PremiumPlus (Premium+), or to get priority tokens, please contact Valzy on WhatsApp:
- WhatsApp: [wa.me/6285701479245](https://wa.me/6285701479245)

## API Reference

All API functions now support enhanced authentication. Below are examples showing both old and new usage patterns:

### Members

#### Get all members
```javascript
// Backward compatible (API key as string)
const members = await jkt48Api.members(apiKey);

// Enhanced authentication
const members = await jkt48Api.members({ priorityToken: 'token' });
const members = await jkt48Api.members({ apiKey: 'key', priorityToken: 'token' });

// ESM
import { members } from '@jkt48/core';
const memberList = await members({ priorityToken: 'your-token' });
```

#### Get member details by name
```javascript
// Backward compatible
const memberDetail = await jkt48Api.memberDetail('Feni', apiKey);

// Enhanced authentication
const memberDetail = await jkt48Api.memberDetail('Feni', { priorityToken: 'token' });

// ESM
import { memberDetail } from '@jkt48/core';
const memberInfo = await memberDetail('Feni', { apiKey: 'key', priorityToken: 'token' });
```

#### Get birthdays
```javascript
// Backward compatible
const birthdays = await jkt48Api.birthday(apiKey);

// Enhanced authentication
const birthdays = await jkt48Api.birthday({ priorityToken: 'token' });

// ESM
import { birthday } from '@jkt48/core';
const birthdays = await birthday({ priorityToken: 'token' });
```

### Events

#### Get events
```javascript
// Backward compatible
const events = await jkt48Api.events(apiKey);

// Enhanced authentication
const events = await jkt48Api.events({ priorityToken: 'token' });

// ESM
import { events } from '@jkt48/core';
const eventList = await events({ apiKey: 'key', priorityToken: 'token' });
```

### Recent and Live

#### Get recent activities
```javascript
// Enhanced authentication examples
const recent = await jkt48Api.recent({ priorityToken: 'token' });

// ESM
import { recent } from '@jkt48/core';
const recentList = await recent({ apiKey: 'key' });
```

#### Get recent activity details
```javascript
// Enhanced authentication with parameters
const recentDetail = await jkt48Api.recentDetail('123456', { priorityToken: 'token' });

// ESM
import { recentDetail } from '@jkt48/core';
const detail = await recentDetail('123456', { apiKey: 'key', priorityToken: 'token' });
```

#### Get live information
```javascript
// Enhanced authentication
const live = await jkt48Api.live({ priorityToken: 'token' });

// ESM
import { live } from '@jkt48/core';
const liveInfo = await live({ priorityToken: 'token' });
```

#### Get live YouTube information
```javascript
const liveYoutube = await jkt48Api.liveYoutube({ priorityToken: 'token' });
```

#### Get live IDN information
```javascript
const liveIdn = await jkt48Api.liveIdn({ apiKey: 'key', priorityToken: 'token' });
```

#### Get live Showroom information
```javascript
const liveShowroom = await jkt48Api.liveShowroom({ priorityToken: 'token' });
```

#### Get YouTube content
```javascript
const youtube = await jkt48Api.youtube({ priorityToken: 'token' });
```

### News

#### Get news
```javascript
const news = await jkt48Api.news({ priorityToken: 'token' });
```

#### Get news details
```javascript
const newsDetail = await jkt48Api.newsDetail('123456', { priorityToken: 'token' });
```

### Theater

#### Get theater information
```javascript
const theater = await jkt48Api.theater({ priorityToken: 'token' });
```

#### Get theater details
```javascript
const theaterDetail = await jkt48Api.theaterDetail('123456', { priorityToken: 'token' });
```

### Replay

#### Get replay data
```javascript
const replay = await jkt48Api.replay({ priorityToken: 'token' });
```

### Chat Stream  

#### Get chat stream IDN
```javascript
// Enhanced authentication
const chatStream = await jkt48Api.chatStream('username', 'slug', { priorityToken: 'token' });

// ESM
import { chatStream } from '@jkt48/core';
const chat = await chatStream('username', 'slug', { apiKey: 'key', priorityToken: 'token' });
```

#### Get chat stream Showroom
```javascript
// Enhanced authentication
const chatStreamSR = await jkt48Api.chatStreamSR('roomId', { priorityToken: 'token' });

// ESM
import { chatStreamSR } from '@jkt48/core';
const srChat = await chatStreamSR('roomId', { priorityToken: 'token' });
```

### Video call schedule [NEW]

#### Video Call
```javascript
// Enhanced authentication examples
const videoCall = await jkt48Api.videoCall({ priorityToken: 'token' }); // no params
const videoCall = await jkt48Api.videoCall('sesi', { priorityToken: 'token' }); // sesi params
const videoCall = await jkt48Api.videoCall('date', { apiKey: 'key' }); // date params
const videoCall = await jkt48Api.videoCall('member', { priorityToken: 'token' }); // member params
const videoCall = await jkt48Api.videoCall('sesi', 'date', 'member', { apiKey: 'key', priorityToken: 'token' }); // combine params

//ESM
import { videoCall } from '@jkt48/core';
const getVC = await videoCall({ priorityToken: 'token' });
```

#### Video Call Today
```javascript
const videoCallToday = await jkt48Api.videoCallToday({ priorityToken: 'token' });

//ESM
import { videoCallToday } from '@jkt48/core';
const getVCToday = await videoCallToday({ priorityToken: 'token' });
```

#### ApiKey Validation
```javascript
// Note: Validation typically requires API key
const check = await jkt48Api.check(apiKey); // Still uses string for validation

// ESM
import { check } from '@jkt48/core';
const validation = await check(apiKey);
```

## Migration Guide

### From Old API Key Pattern to Enhanced Authentication

If you're upgrading from the old version, your existing code will continue to work:

```javascript
// Old way (still supported)
const members = await jkt48Api.members('your-api-key');

// New way with same functionality
const members = await jkt48Api.members({ apiKey: 'your-api-key' });

// New way with priority token
const members = await jkt48Api.members({ priorityToken: 'your-priority-token' });

// New way with both
const members = await jkt48Api.members({ 
  apiKey: 'your-api-key',
  priorityToken: 'your-priority-token' 
});
```

## Error Handling

This package throws errors with descriptive messages when:
- API key is not provided (when required)
- Required parameters are missing
- The API returns an error
- Network errors occur

Example of error handling with enhanced authentication:

### CommonJS
```javascript
try {
  const members = await jkt48Api.members({ priorityToken: 'token' });
  console.log(members);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

### ESM
```javascript
import { members } from '@jkt48/core';

try {
  const memberList = await members({ apiKey: 'key', priorityToken: 'token' });
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
