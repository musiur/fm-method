"use client";

import { Button } from "@/components/ui/button";
import { usePlayerContext } from "@/contexts";
import clsx from "clsx";
import { PlayCircle, Sun } from "lucide-react";
import { useTransition } from "react";

export const Play = ({ video_id }: { video_id: string }) => {
    if (!video_id) {
        return null;
    }

    const { playerCompose, setPlayerCompose } = usePlayerContext();
    const [pending, startTransition] = useTransition();

    const handleOnPlay = () => {
        startTransition(async () => {
            if (playerCompose.getVideoCredentials) {
                const data = await playerCompose.getVideoCredentials(video_id);

                startTransition(() => {
                    setPlayerCompose((prev) => ({
                        ...prev,
                        video_id,
                        otp: data.otp || "",
                        playbackInfo: data.playbackInfo || ""
                    }))
                })
            }
        })

    }

    return (
        <div
            onClick={handleOnPlay}
            role="button"
            className={clsx("h-9 px-2 inline-flex items-center justify-center border rounded-md gap-1 hover:bg-black/5", {
                "bg-primary text-white hover:bg-primary/90 animate-pulse": video_id === playerCompose.video_id
            })}
        >
            <PlayCircle className={clsx("h-4 h-4", {
                "hidden": pending,
                "animate-spin": video_id === playerCompose.video_id
            })} />
            <Sun className={clsx("h-4 h-4 animate-spin", {
                "hidden": !pending
            })} />
            {pending ? "Playing" : "Play video"}
        </div>
    )
}