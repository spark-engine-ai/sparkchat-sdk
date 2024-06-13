# sparkchat-sdk

A lightweight AI chatbot template built with Spark Engine, Next.js, and Mantine UI.

![Spark Engine Chatbot](readme-img.png)

## Introduction

Spark Engine is an autonomous solutions company with a no-code engine for making advanced multi-agent systems and early AGI systems. This project leverages the Spark Engine API to create an AI chatbot that can interact with users through a web interface built with Next.js and Mantine UI.

## Getting Started

Follow these steps to set up and run your Spark Engine chatbot project:

### Step 1: Get an API Key

1. Go to [Spark Engine](https://sparkengine.ai).
2. Navigate to `Account > Keys`.
3. Copy your API key.

### Step 2: Configure the Project

1. Open the project and navigate to `/components/chatbot.tsx`.
2. Find and replace the `SPARKENGINE_PROJECT_ID` with the ID of any public or personal project on Spark Engine. You can use the example provided or your own project ID.

    ```typescript
    const PROJECT_ID = "your-project-id-here"; // Replace with your project ID
    ```

3. Ensure that you have set your API key in the `.env.local` file in the root of your project:

    ```plaintext
    SPARKENGINE_API_KEY=your-api-key
    ```

### Step 3: Run the Project

1. Install the project dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open your browser and go to `http://localhost:3000` to see your chatbot in action.

## Project Structure

Here's a brief overview of the project structure:

- **components**: Contains the main React components (`chatbot.tsx`, `input.tsx`, `message.tsx`, `markdown.tsx`, `loader.tsx`, `navbar.tsx`).
- **styles**: Contains the CSS modules for styling components.
- **app**: Contains the API route for proxying requests to the Spark Engine API.
- **.env.local**: File for storing environment variables such as your Spark Engine API key.

## Features

- **Chatbot Interface**: Interact with your Spark Engine projects through a conversational interface.
- **Loader**: Shows a loading indicator while waiting for responses from the Spark Engine API.
- **Responsive Design**: Built with Mantine UI for a responsive and accessible design.

## About Spark Engine

Spark Engine is an autonomous solutions company with a no-code engine for making advanced multi-agent systems and early AGI systems. It allows users to create complex AI-driven projects without writing code, leveraging the power of multi-agent systems to achieve sophisticated tasks.

## Contributing

Feel free to fork this project and contribute by submitting pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

For more information about Spark Engine, visit [sparkengine.ai](https://sparkengine.ai).