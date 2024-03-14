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
  },
  {
    title: "Advocate",
    description:
      "Join the cause, Advocate engagement amplifies our mission to democratize legal assistance.",
  },
  {
    title: "Upload Papers",
    description:
      "Access expert help, Upload your case papers to connect with a skilled lawyer today, trust us we will keep your documents securely.",
  },
  
];
