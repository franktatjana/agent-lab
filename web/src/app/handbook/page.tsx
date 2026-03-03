import HandbookClient from "./client";

export const metadata = {
  title: "Agent Handbook - Agent Lab",
  description: "Narrative guide to every agent: when to use it, what trap to avoid, and how it changes the outcome",
};

export default function HandbookPage() {
  return <HandbookClient />;
}
