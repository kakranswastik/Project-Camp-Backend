import { text } from "express";
import Mailgen from "mailgen";
import { act } from "react";

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! We are excited to have you on board.",
      action: {
        instructions:
          "To verify you email please click on the following button",
        button: {
          color: "#1aae5aff",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to hear you.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "Password Reset Request.",
      action: {
        instructions:
          "To reset you password please click on the following button",
        button: {
          color: "#1aae5aff",
          text: "reset your password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to hear you.",
    },
  };
};

export { emailVerificationMailgenContent, forgotPasswordMailgenContent };
