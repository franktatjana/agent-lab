import { agents } from "@/data/agents";
import AgentPageClient from "./client";

export function generateStaticParams() {
  return agents.map((a) => ({ id: a.id }));
}

export default function AgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <AgentPageClient params={params} />;
}
