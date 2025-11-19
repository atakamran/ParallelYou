// functions/src/index.ts
import * as functions from "firebase-functions";
import { HttpsError } from "firebase-functions/v1/https";

// Placeholder for AI SDK (e.g., Vertex AI, OpenAI)
const aiSDK = {
  generate: async (prompt) => {
    console.log("AI PROMPT:", prompt);
    // In a real app, this would make an API call to the AI model.
    // We'll return a mock response based on the prompt.
    if (prompt.includes("roadmap")) {
      return JSON.stringify({
        roadmap: [
          {
            phase: "Phase 1: Foundation (Year 0-1)",
            goals: [
              { title: "Learn Basics", description: "Complete a course.", category: "Learning" },
            ],
          },
        ],
      });
    }
    return JSON.stringify({
      career: { jobTitle: "Software Engineer", salaryRange: "$100k - $150k" },
      lifestyle: { livingSituation: "Urban Apartment", hobbies: ["Coding", "Hiking"] },
    });
  },
};

export const generateFutureSelf = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in.");
  }

  const { goal } = data;
  if (!goal) {
    throw new HttpsError("invalid-argument", "A goal is required.");
  }

  const prompt = `Generate a future self profile for a person with the goal: ${goal}`;
  const response = await aiSDK.generate(prompt);

  try {
    return JSON.parse(response);
  } catch (error) {
    throw new HttpsError("internal", "Failed to parse AI response.");
  }
});

export const generateRoadmap = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new HttpsError("unauthenticated", "You must be logged in.");
  }

  const { futureSelf } = data;
  if (!futureSelf) {
    throw new HttpsError("invalid-argument", "A future self profile is required.");
  }

  const prompt = `Generate a roadmap for the following future self: ${JSON.stringify(futureSelf)}`;
  const response = await aiSDK.generate(prompt);

  try {
    return JSON.parse(response);
  } catch (error) {
    throw new HttpsError("internal", "Failed to parse AI response.");
  }
});
