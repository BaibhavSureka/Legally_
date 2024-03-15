"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function Feature() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={automationServices} />
    </div>
  );
}

export const automationServices = [
  {
    title: "User",
    description:
      "Custom trained on your business data, the AI bots gather and store accurate user information.",
    link:"/chat"
  },
  {
    title: "Consult about your documents",
    description:
      "Chat with your personal AI Lawyer about your documents.",
    link:"/chat"
  },
  {
    title: "Talk to your lawyer",
    description:
      "Access expert help, on a phone call and get your legal queries resolved.",
    link:"/talk"
  },
  
];
