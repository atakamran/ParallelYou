# Technical Architecture

This document outlines the technical architecture for the Parallel You mobile application.

### 1. **Frontend**

*   **Framework:** **React Native (with Expo)**
    *   **Why:** Expo provides a managed workflow that simplifies development, building, and deployment. It offers easy access to native APIs, over-the-air (OTA) updates, and a robust ecosystem of libraries. This accelerates development time significantly.
*   **Language:** **TypeScript**
    *   **Why:** For type safety, improved code quality, and better developer experience, especially in a growing codebase.
*   **State Management:** **Zustand**
    *   **Why:** A lightweight, simple, and unopinionated state management library. It avoids boilerplate and is easier to manage than Redux for a project of this scale.
*   **Data Fetching:** **Axios**
    *   **Why:** A promise-based HTTP client for making requests to our backend (Firebase Functions). It's widely used and supports request/response interception.
*   **Navigation:** **React Navigation**
    *   **Why:** The standard for routing and navigation in React Native, with support for stack, tab, and drawer navigators.

### 2. **Backend**

*   **Platform:** **Firebase (Google Cloud)**
    *   **Why:** A comprehensive BaaS (Backend-as-a-Service) that provides authentication, database, storage, and serverless functions out of the box. It's scalable, secure, and has excellent integration with mobile clients.
*   **Core Services:**
    *   **Firebase Authentication:** For user sign-up, login (Email/Password, Google, Apple), and session management.
    *   **Firestore:** A NoSQL, document-based database to store user data, goals, generated futures, roadmaps, and habits.
    *   **Firebase Storage:** To store any user-generated content if needed in the future (e.g., profile pictures).
    *   **Firebase Functions (Node.js/TypeScript):** Serverless functions to host our backend logic, including API endpoints for interacting with AI models and Stripe.

### 3. **AI Model Integration**

*   **Model:** **Google Gemini (via Vertex AI) or OpenAI GPT-4**
    *   **Why:** Both are highly capable generative models. The choice may depend on API cost, response time, and the quality of generation for our specific prompts. We will use the Firebase Genkit to integrate with the models.
*   **API Communication:**
    *   The React Native client will **not** call the AI model's API directly. This would expose our API keys.
    *   Instead, the client will call a secure Firebase Function (e.g., `generateFutureSelf`).
    *   This function will then securely call the AI model's API with the appropriate prompt and user data.

### 4. **Payments & Subscriptions**

*   **Provider:** **Stripe**
    *   **Why:** Industry-standard for payment processing with excellent developer APIs, documentation, and security.
*   **Integration:**
    *   We will use the `@stripe/stripe-react-native` library on the frontend for the UI components.
    *   The backend logic will be handled by Firebase Functions, which will communicate with the Stripe API to create customers, manage subscriptions, and handle webhooks.
    *   **RevenueCat** could be used as an abstraction layer on top of Stripe and native mobile payment APIs to simplify subscription management.

### 5. **API Routes (Firebase Functions)**

All endpoints are HTTPS-triggered Firebase Functions.

*   `POST /users/create`: Creates a user document in Firestore upon sign-up.
*   `GET /users/me`: Fetches the current user's profile.
*   `POST /ai/generateFuture`: The core AI endpoint.
    *   *Request:* `{ goal: string, userContext: object }`
    *   *Response:* `{ futureSelf: object }`
*   `POST /ai/generateRoadmap`: Generates the user's roadmap.
    *   *Request:* `{ futureSelf: object, currentUserState: object }`
    *   *Response:* `{ roadmap: object }`
*   `POST /payments/createSubscription`: Initiates a subscription flow with Stripe.
*   `POST /payments/stripeWebhook`: Handles subscription events from Stripe (e.g., `invoice.payment_succeeded`).

### 6. **Security**

*   **Firebase Security Rules:** Implemented for both Firestore and Storage to ensure users can only access their own data.
*   **Authenticated API Routes:** All Firebase Functions (except auth-related ones) will be protected and will only execute if a valid Firebase Auth token is provided in the request header.
*   **Environment Variables:** All sensitive keys (Stripe, OpenAI/Gemini) will be stored securely in Firebase Functions' environment configuration, not in the client-side code.

### 7. **Recommended Libraries**

*   `@react-native-firebase/app`: Core Firebase integration.
*   `@react-native-firebase/auth`: Authentication.
*   `@react-native-firebase/firestore`: Firestore database.
*   `@react-navigation/native`: Core navigation library.
*   `@react-navigation/stack`: Stack navigator.
*   `zustand`: State management.
*   `axios`: HTTP client.
*   `@stripe/stripe-react-native`: Stripe UI components.
*   `lottie-react-native`: For animations.
*   `react-native-svg`: For charts and vector graphics.
*   `react-native-reanimated`: For advanced animations.
