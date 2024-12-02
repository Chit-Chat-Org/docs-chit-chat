# CDN Integration Guide

## Overview

This guide explains how to integrate a chatbot into your webpage. The chatbot will be powered by a model called **Gemini** or **OpenAI**. The configuration requires an API key, which can be obtained through the [`dashboard`](http://chit-chat.fun/dashboard). route of your application.

:::danger Api KEY

Don't Expose API Key to Anything.

:::
## Steps to Obtain Your API Key

1. Log into your application.
2. Go to the [`dashboard`](http://chit-chat.fun/dashboard) route.
3. Train AI Model, it requires information file.
4. Copy the API key for use in the next steps.


## Integration

### 1. Add CSS CDN
Include the CSS file in the `<head>` of your HTML document:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css">
```

### 2. Add Chatbot Interface
Insert the chatbot's container where you want it to appear in `<Body>` :

```html
<div id="chatbot"></div>
```
### 3. Add JavaScript CDN
Place the following script before the closing `</body>` tag or between the `</body>` and `</html>`:

```html
<script src="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js"></script>
```
### 4. Configure the Chatbot
Set up your chatbot using the following script:

```javascript
chatbot.setChatBotConfiguration({
    apiKey: "your-api-key-here",  <!-- Replace with your actual API key -->
    chatbotTitle: "Chat Bot",
    LLM: "Gemini",
    initialMessage: "Hello! How Can I Assist You?",
    brandImage: "https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png",
    suggestions: [],
    rateLimitDuration: 5000
});
```


## HTML Template

Below is the HTML template you can use to integrate the chatbot into your webpage:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    // highlight-start
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Chit-Chat-Org/chit-chat-v2/js-interface/style.css">
    // highlight-end
    <title>Chat Bot</title>
</head>
<body>
    // highlight-start
    <div id="chatbot"></div>
    // highlight-end
</body>
// highlight-start
<script src="https://cdn.jsdelivr.net/gh/Chit-Chat-Org/chit-chat-v2/js-interface/script.js"></script>
<script>
chatbot.setChatBotConfiguration({
    apiKey: "your-api-key-here",  <!-- Replace with your actual API key -->
    chatbotTitle: "Chat Bot",
    LLM: "Gemini",
    initialMessage: "Hello! How Can I Assist You?",
    brandImage: "https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png",
    suggestions: [],
    rateLimitDuration: 5000
});
</script>
// highlight-end
</html>
```

### Key Props:
- APIKey: Replace it with your actual API key.
- ChatbotTitle: The title displayed for the chatbot.
- LLM: The language model to use (e.g., Gemini,OpenAI).
- initialMessage: The first message displayed when the chat loads.
- brandImage: The URL for the chatbot’s brand image (can be a logo).
- suggestions: An array of suggested responses (optional).
- rateLimitDuration: The rate limit duration to prevent excessive API calls.
