# API Integration Guide

This guide demonstrates how to fetch information from the **Chit-Chat** API using different programming languages. The API allows querying by providing a prompt (user question) and a `llm` type (e.g., **Gemini**).

:::danger Api KEY

Don't Expose API Key to Anything.

:::
## Steps to Obtain Your API Key

1. Log into your application.
2. Go to the [`dashboard`](http://chit-chat.fun/dashboard) route.
3. Train AI Model, it requires information file.
4. Copy the API key for use in the next steps.

The API endpoint to fetch the answer is:
```bash
https://chit-chat.fun/api/v1/QnARetrieval?key=YOUR_API_KEY
```

Where `YOUR_API_KEY` should be replaced with your actual API key.

### Payload:
```json
{
  "prompt": "userQuestion",
  "llm": "Gemini"
}
```

### 1. Bash (cURL)
To call the API in Bash using cURL, use the following command:

```curl
curl -X POST "https://chit-chat.fun/api/v1/QnARetrieval?key=YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "userQuestion", "llm": "Gemini"}'
```
Replace YOUR_API_KEY with your actual API key and userQuestion with the question you want to ask.

### 2. JavaScript
In JavaScript, you can use the fetch() function to make the request:

```javascript title="index.js"
async function generateAnswer(userQuestion) {
    const response = await fetch("https://chit-chat.fun/api/v1/QnARetrieval?key=YOUR_API_KEY", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: userQuestion,
            llm: "Gemini"
        })
    });

    const data = await response.json();
    console.log(data);
}
```

Make sure to replace YOUR_API_KEY and userQuestion with appropriate values.

### 3. Java
In Java, you can use the HttpClient to make the request:

```java title="ChatbotAPI.java"
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpHeaders;
import java.nio.charset.StandardCharsets;

public class ChatbotAPI {
    public static void main(String[] args) throws Exception {
        String apiKey = "YOUR_API_KEY";
        String userQuestion = "What is the weather today?";

        String jsonPayload = String.format("{\"prompt\": \"%s\", \"llm\": \"Gemini\"}", userQuestion);
        
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://chit-chat.fun/api/v1/QnARetrieval?key=" + apiKey))
            .header("Content-Type", "application/json")
            .POST(HttpRequest.BodyPublishers.ofString(jsonPayload, StandardCharsets.UTF_8))
            .build();
        
        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        
        System.out.println(response.body());
    }
}
```

### 4. Python
In Python, you can use the requests library to make the request:

``` python title="main.py"
import requests
import json

def generate_answer(user_question):
    url = "https://chit-chat.fun/api/v1/QnARetrieval?key=YOUR_API_KEY"
    payload = {
        "prompt": user_question,
        "llm": "Gemini"
    }
    headers = {"Content-Type": "application/json"}
    
    response = requests.post(url, json=payload, headers=headers)
    
    return response.json()

# Example usage:
user_question = "How does weather work?"
response = generate_answer(user_question)
print(response)
```
Ensure to replace YOUR_API_KEY and user_question accordingly.

### 5. Node.js
If you are working in a Node.js environment, you can use the axios library:

```javascript title="index.js"
const axios = require('axios');

async function generateAnswer(userQuestion) {
    const response = await axios.post("https://chit-chat.fun/api/v1/QnARetrieval?key=YOUR_API_KEY", {
        prompt: userQuestion,
        llm: "Gemini"
    });
    
    console.log(response.data);
}

// Example usage:
generateAnswer("What is AI?");
```
To run this code, you need to install the axios package first:

```bash
npm install axios
```
### 6. PHP (cURL)
In PHP, you can use cURL to make the request:

```php title="index.php"
<?php
function generateAnswer($userQuestion) {
    $apiKey = "YOUR_API_KEY";
    $url = "https://chit-chat.fun/api/v1/QnARetrieval?key=$apiKey";

    $payload = json_encode(array(
        "prompt" => $userQuestion,
        "llm" => "Gemini"
    ));

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
    ));
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}

// Example usage:
$response = generateAnswer("How does gravity work?");
print_r($response);
?>
```