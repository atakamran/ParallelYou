// src/services/aiService.ts
import { functions } from "../firebase/firebase";
import { httpsCallable } from "firebase/functions";

const generateFutureSelf = httpsCallable(functions, "generateFutureSelf");
const generateRoadmap = httpsCallable(functions, "generateRoadmap");

export const aiService = {
  getFutureSelf: async (goal) => {
    try {
      const result = await generateFutureSelf({ goal });
      return result.data;
    } catch (error) {
      console.error("Error generating future self:", error);
      throw error;
    }
  },

  getRoadmap: async (futureSelf) => {
    try {
      const result = await generateRoadmap({ futureSelf });
      return result.data;
    } catch (error) {
      console.error("Error generating roadmap:", error);
      throw error;
    }
  },
};
