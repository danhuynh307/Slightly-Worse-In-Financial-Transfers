// Shared domain types. Mirror the backend entities here as you add features.

export interface User {
  id: number;
  name: string;
  title: string;
  team: string;
  bio: string;
  photoUrl: string | null;
}

// Teammates: add types for your feature here as the backend grows, e.g.
// export interface Expertise { id: number; name: string; }
// export interface Praise { id: number; fromUser: string; toUser: string; message: string; date: string; }
// export interface Acronym { id: number; shortForm: string; meaning: string; description: string; }
// export interface Prompt { id: number; title: string; category: string; strength: string; description: string; prompt: string; }
