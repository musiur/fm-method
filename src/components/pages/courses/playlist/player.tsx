"use client";

import { usePlayerContext } from "@/contexts";
import { cn } from "@/lib/utils";

export const Player = ({ otp, playbackInfo, className }: { otp?: string, playbackInfo?: string, className?: string }) => {
  const { playerCompose } = usePlayerContext();

  return (
    <div className={cn(className, "bg-transparent rounded-xl col-span-1 lg:col-span-2 overflow-hidden")}>
      <iframe
        src={`https://player.vdocipher.com/v2/?otp=${playerCompose.otp || otp}&playbackInfo=${playerCompose.playbackInfo || playbackInfo}`}
        className="aspect-video w-full h-full"
        allow="encrypted-media"
        allowFullScreen
      />
    </div>
  )
}