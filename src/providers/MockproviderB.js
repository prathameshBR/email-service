// src/providers/MockProviderB.js

module.exports = {
  sendEmail: async (email) => {
    console.log("Provider B sending...");
    if (Math.random() < 0.9) {
      return { success: true };
    } else {
      throw new Error("Provider B failed");
    }
  }
};