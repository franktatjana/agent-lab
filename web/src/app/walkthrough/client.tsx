"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { walkthrough } from "@/data/walkthrough";
import { StoryOverlay } from "@/components/story";

export default function WalkthroughClient() {
  const router = useRouter();
  const handleClose = useCallback(() => router.push("/"), [router]);

  return (
    <StoryOverlay
      story={walkthrough}
      agentName="Agent Lab"
      onClose={handleClose}
    />
  );
}
