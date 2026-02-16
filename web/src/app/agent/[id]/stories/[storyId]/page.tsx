import { stories } from "@/data/stories";
import StoryPageClient from "./client";

export function generateStaticParams() {
  return stories.map((s) => ({ id: s.agentId, storyId: s.id }));
}

export default function StoryPage({
  params,
}: {
  params: Promise<{ id: string; storyId: string }>;
}) {
  return <StoryPageClient params={params} />;
}
