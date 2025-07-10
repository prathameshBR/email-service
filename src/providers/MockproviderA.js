// src/providers/MockProviderA.js

module.exports = {
  sendEmail: async (email) => {
    console.log("Provider A sending...");
    if (Math.random() < 0.7) {
      return { success: true };
    } else {
      throw new Error("Provider A failed");
    }
  }
};