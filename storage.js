// This is a scaffolding file provided to manage stored data
// Do not modify this file

/**
 * Mock database of bookmarks for 5 users
 */
const userDatabase = {
  "1": [
    {
      name: "OpenAI",
      url: "https://openai.com",
      description: "Artificial intelligence research and deployment company.",
      timestamp: "2026-02-21T09:00:00Z"
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org",
      description: "Comprehensive documentation for web developers.",
      timestamp: "2026-02-20T14:12:00Z"
    }
  ],
  "2": [
    {
      name: "GitHub",
      url: "https://github.com",
      description: "Platform for hosting and collaborating on code projects.",
      timestamp: "2026-02-19T11:30:00Z"
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com",
      description: "Community-driven Q&A for developers.",
      timestamp: "2026-02-18T16:45:00Z"
    }
  ],
  "3": [
    {
      name: "YouTube",
      url: "https://youtube.com",
      description: "Video sharing and streaming platform.",
      timestamp: "2026-02-17T10:20:00Z"
    },
    {
      name: "CSS Tricks",
      url: "https://css-tricks.com",
      description: "Tips and guides for modern CSS development.",
      timestamp: "2026-02-16T08:55:00Z"
    }
  ],
  "4": [
    {
      name: "AWS",
      url: "https://aws.amazon.com",
      description: "Cloud computing services platform.",
      timestamp: "2026-02-15T13:40:00Z"
    },
    {
      name: "Docker",
      url: "https://www.docker.com",
      description: "Containerization platform for application development.",
      timestamp: "2026-02-14T17:05:00Z"
    }
  ],
  "5": [
    {
      name: "Figma",
      url: "https://figma.com",
      description: "Collaborative interface design tool.",
      timestamp: "2026-02-13T12:15:00Z"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com",
      description: "Design inspiration and portfolio platform.",
      timestamp: "2026-02-12T09:25:00Z"
    }
  ]
};

/**
 * Get a list of user ids
 *
 * @returns {string[]} List of user id strings
 */
export function getUserIds() {
  return ["1", "2", "3", "4", "5"];
}

/**
 * Get bookmarks associated with a specific user.
 *
 * @param {string} userId The user id to get bookmarks for
 * @returns {Array<{name: string, url: string, description: string, timestamp: string}> | null}
 */
export function getData(userId) {
  return userDatabase[userId] || null;
}

/**
 * Store data for a specific user.
 *
 * @param {string} userId The user id to store data for
 * @param {any} data The data to store
 */
export function setData(userId, data) {
  localStorage.setItem(`stored-data-user-${userId}`, JSON.stringify(data));
}

/**
 * Clears all data associated with a specific user. NOTE: This is provided to help with development, and is not required in the final code
 *
 * @param {string} userId The user id to clear associated data for
 */
export function clearData(userId) {
  localStorage.removeItem(`stored-data-user-${userId}`);
}