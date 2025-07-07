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

## Usage

All functions in this package require an API key that should be passed as a parameter.

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
const members = await jkt48Api.members(apiKey);
```

#### Get member details by name
```javascript
const memberName = 'Feni';
const memberDetail = await jkt48Api.memberDetail(memberName, apiKey);
```

#### Get birthdays
```javascript
const birthdays = await jkt48Api.birthday(apiKey);
```

### Events

#### Get events
```javascript
const events = await jkt48Api.events(apiKey);
```

### Recent and Live

#### Get recent activities
```javascript
const recent = await jkt48Api.recent(apiKey);
```

#### Get recent activity details
```javascript
const liveId = '123456';
const recentDetail = await jkt48Api.recentDetail(liveId, apiKey);
```

#### Get live information
```javascript
const live = await jkt48Api.live(apiKey);
```

#### Get live YouTube information
```javascript
const liveYoutube = await jkt48Api.liveYoutube(apiKey);
```

#### Get live IDN information
```javascript
const liveIdn = await jkt48Api.liveIdn(apiKey);
```

#### Get live Showroom information
```javascript
const liveShowroom = await jkt48Api.liveShowroom(apiKey);
```

#### Get YouTube content
```javascript
const youtube = await jkt48Api.youtube(apiKey);
```

### News

#### Get news
```javascript
const news = await jkt48Api.news(apiKey);
```

#### Get news details
```javascript
const newsId = '123456';
const newsDetail = await jkt48Api.newsDetail(newsId, apiKey);
```

### Theater

#### Get theater information
```javascript
const theater = await jkt48Api.theater(apiKey);
```

#### Get theater details
```javascript
const theaterId = '123456';
const theaterDetail = await jkt48Api.theaterDetail(theaterId, apiKey);
```

### Replay

#### Get replay data
```javascript
const replay = await jkt48Api.replay(apiKey);
```

### Chat Stream [NEW] 

#### Get chat stream idn
```javascript
const chatStream = await jkt48Api.chatStream(username, slug, apiKey);
```

#### Get chat stream Showroom
```javascript
const chatStreamSR = await jkt48Api.chatStreamSR(roomId, apiKey);
```

#### ApiKey Validation
```javascript
const check = await jkt48Api.check(apiKey);
```

## Error Handling

This package throws errors with descriptive messages when:
- API key is not provided
- Required parameters are missing
- The API returns an error
- Network errors occur

Example of error handling:

```javascript
try {
  const members = await jkt48Api.members(apiKey);
  console.log(members);
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