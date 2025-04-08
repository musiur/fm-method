"use client"

import { actionVideoCredentials } from "@/actions/vdocipher/post-video-credentials";
import { TypeActionResponse } from "@/lib/types/action-response";
import { useState, createContext, useContext, Dispatch, SetStateAction } from "react";

type TypeCredentials = {
    otp: string;
    playbackInfo: string;
}
type TypePlayerCompose = {
    video_id: string;
    otp: string;
    playbackInfo: string;
    getVideoCredentials?: (video_id: string) => Promise<TypeCredentials>;
}

const getVideoCredentials = async (video_id: string): Promise<TypeCredentials> => {
    const videoCredentials: TypeActionResponse<TypeCredentials> = await actionVideoCredentials(video_id)

    if (!videoCredentials?.success || !videoCredentials?.data?.otp) {
        return { otp: "", playbackInfo: "" }
    }

    return videoCredentials.data
}

const defaultPlayerCompose = {
    video_id: "",
    otp: "",
    playbackInfo: "",
    getVideoCredentials
}

type PlayerContextType = {
    playerCompose: TypePlayerCompose;
    setPlayerCompose: Dispatch<SetStateAction<TypePlayerCompose>>;
}

const PlayerContext = createContext<PlayerContextType>({
    playerCompose: defaultPlayerCompose,
    setPlayerCompose: () => { },
});

export const usePlayerContext = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayerContext must be used within a PlayerContextProvider");
    }
    return context;
};

export const PlayerContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [playerCompose, setPlayerCompose] = useState<TypePlayerCompose>(defaultPlayerCompose);

    return (
        <PlayerContext.Provider value={{ playerCompose, setPlayerCompose }}>
            {children}
        </PlayerContext.Provider>
    );
};

