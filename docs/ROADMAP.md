# Developer Tasks Roadmap

This document provides a 4-week development plan for building the Parallel You app.

### **Week 1: Authentication & Core UI**

**Goal:** Set up the project, implement user authentication, and build the main UI shell and reusable components.

*   **Project Setup:**
    *   Initialize a new React Native (Expo) project.
    *   Set up TypeScript, ESLint, and Prettier for code quality.
    *   Install core dependencies: React Navigation, Firebase, Zustand, Axios.
    *   Configure path aliases (e.g., `@/components`) in `babel.config.js` and `tsconfig.json`.

*   **Firebase Setup:**
    *   Create a new Firebase project.
    *   Set up Firebase Authentication (Email/Password, Google Sign-In).
    *   Configure Firestore and set up initial security rules.

*   **Authentication Flow:**
    *   Build the sign-up, login, and password reset screens.
    *   Implement the authentication logic using Firebase Auth.
    *   Create a global state with Zustand to manage the user's auth state.
    *   Set up navigation to switch between the auth flow and the main app.

*   **Core UI:**
    *   Implement the main tab navigator (e.g., Dashboard, Roadmap, Habits, Profile).
    *   Build reusable UI components based on the design system (`src/ui`):
        *   `Button`
        *   `Card`
        *   `Section`
        *   `Input`
        *   `Typography` components (e.g., `H1`, `Body`)

### **Week 2: AI & Firestore**

**Goal:** Integrate the AI model, generate the "parallel future self," and save data to Firestore.

*   **Firebase Functions Backend:**
    *   Initialize Firebase Functions with TypeScript.
    *   Create the `generateFutureSelf` HTTPS-triggered function.
    *   Add environment variables for the AI model's API key.
    *   Secure the function to only allow authenticated requests.

*   **AI Integration:**
    *   Implement the logic within the Firebase Function to call the AI model's API using the prompt from `docs/PROMPTS.md`.
    *   Parse the JSON response from the AI and return it to the client.

*   **Frontend Integration:**
    *   Build the "Goal Selector" screen where users can input their dream path.
    *   Create a service (`src/services/aiService.ts`) to call the `generateFutureSelf` function.
    *   Display the generated "parallel future self" on a results screen.
    *   Implement loading and error states for the AI generation process.

*   **Firestore Schema:**
    *   Define and implement the Firestore schema for storing user data.
    *   Create a `users` collection to store profile information.
    *   Create a `futures` sub-collection under each user to store their generated parallel selves.

### **Week 3: Roadmap & Habits**

**Goal:** Implement the roadmap generation, habit tracking, and comparison dashboard.

*   **Roadmap Generation:**
    *   Create a new Firebase Function, `generateRoadmap`.
    *   This function will take the generated future self as input and use the roadmap prompt to generate a personalized roadmap.
    *   Build the UI to display the roadmap in phases and steps.

*   **Comparison Dashboard:**
    *   Create the UI for the "Parallel vs. Current" comparison dashboard.
    *   This will involve fetching the user's current data (which they may need to input) and comparing it visually with the generated future data.

*   **Habit Tracker:**
    *   Create a `habits` sub-collection in Firestore for each user.
    *   Build the UI for creating, viewing, and marking habits as complete.
    *   Implement the logic to track streaks and completion rates.
    *   Add the AI-powered habit recommendation feature.

### **Week 4: Stripe, Polish, & Deployment**

**Goal:** Integrate payments, polish the user experience, and prepare for deployment.

*   **Stripe Integration:**
    *   Set up a Stripe account and get API keys.
    *   Create Firebase Functions for managing subscriptions (`createSubscription`, `stripeWebhook`).
    *   Use `@stripe/stripe-react-native` to build the paywall and checkout flow on the client.
    *   Manage premium user status in Firestore based on Stripe subscription events.

*   **UI/UX Polish:**
    *   Add animations and micro-interactions using React Native Reanimated.
    *   Implement custom loading states (e.g., Lottie animations).
    *   Thoroughly test the app on both iOS and Android devices/simulators.
    *   Conduct user testing to identify and fix any usability issues.

*   **Deployment:**
    *   Prepare the app for submission to the Apple App Store and Google Play Store.
    *   Create app store listings with screenshots and descriptions.
    *   Use Expo Application Services (EAS) to build and submit the app.
    *   Set up OTA (Over-the-Air) updates for pushing quick fixes without a full app store review.
