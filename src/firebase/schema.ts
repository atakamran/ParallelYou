// src/firebase/schema.ts

// This file defines the Firestore schema for the Parallel You app.

/*
Firestore Schema:

/users/{userId}
  - email: string
  - createdAt: timestamp
  - isPremium: boolean
  - stripeCustomerId: string

  /futures/{futureId}
    - goal: string
    - generatedAt: timestamp
    - futureSelf: {
        career: { ... },
        lifestyle: { ... },
        achievements: { ... },
        personalityTraits: [ ... ]
      }

  /roadmaps/{roadmapId}
    - futureId: string (points to the future document)
    - generatedAt: timestamp
    - roadmap: [
        { phase: string, goals: [ { title: string, description: string, category: string } ] }
      ]

  /habits/{habitId}
    - roadmapId: string (optional, links habit to a roadmap)
    - title: string
    - frequency: "Daily" | "Weekly"
    - createdAt: timestamp
    - completedDates: [timestamp]
    - streak: number
*/
