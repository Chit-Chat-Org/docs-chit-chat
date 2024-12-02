# Next Integration Guide

This guide demonstrates how to integrate the **Chit-Chat** bot into your React application.

:::danger Api KEY

Don't Expose API Key to Anything.

:::
## Steps to Obtain Your API Key

1. Log into your application.
2. Go to the [`dashboard`](http://chit-chat.fun/dashboard) route.
3. Train AI Model, it requires information file.
4. Copy the API key for use in the next steps.



## 1. Install the Dependency

To get started, you need to install the `chit-chat-react` package. Run the following command:

```bash
npm install chit-chat-react
```
This will install the required library to integrate the chatbot into your React app.

## 2. Configuration & Usage
Once the dependency is installed, you can use the ChatBot component in your React app.

```JSX title="src/app/Chatbot/page.jsx"
import React from 'react';
import ChatBot from 'chit-chat-react';

const page = () => {
    return (
        <ChatBot
            apiKey="YOUR_API_KEY"  // Replace with your actual API key
            chatbotTitle="Chat bot"
            LLM="Gemini"
            initialMessage="Hello! How Can I Assist You?"
            brandImage="https://cdn.jsdelivr.net/gh/Lake-ai/cdn-interface/chatbot.png"
            suggestions={[]}  // Add any suggestions if needed
            rateLimitDuration={5000}  // Set the rate limit duration
        />
    );
}
export default page;
```
### Key Props:
- APIKey: Replace it with your actual API key.
- ChatbotTitle: The title displayed for the chatbot.
- LLM: The language model to use (e.g., Gemini,OpenAI).
- initialMessage: The first message displayed when the chat loads.
- brandImage: The URL for the chatbot’s brand image (can be a logo).
- suggestions: An array of suggested responses (optional).
- rateLimitDuration: The rate limit duration to prevent excessive API calls.

