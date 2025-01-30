"use client";
import { useRef, useEffect } from "react";
import { CiRepeat, CiVolumeHigh } from "react-icons/ci";
import { FaRandom } from "react-icons/fa";
import {
    IoIosPause,
    IoIosSkipBackward,
    IoIosSkipForward,
    IoMdPlay,
} from "react-icons/io";
import useAudioPlayer from "../hooks/useAudioPlayer";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";

export default function AudioPlayer({ track }) {
    const audio = useRef(null);
    const {
        handlePlay,
        play,
        handlePause,
        currentTime,
        duration,
        duracionn,
        actualTime,
        handlePosition,
    } = useAudioPlayer({ audio, url: track?.url });

    const progressPercentage = duracionn ? (actualTime / duracionn) * 100 : 0; // Evitar división por cero

    useEffect(() => {
        if (audio.current) {
            audio.current.load();
            handlePlay();
        }
    }, [track?.url]);

    return (
        <>
            <div className="fixed lg:bottom-0 bottom-[0%] w-full flex py-2 px-3 items-center justify-between bg-purple-500 left-0 mt-5">
                <audio className="hidden" controls ref={audio}>
                    <source src={track?.url} />
                </audio>
                <div className="flex gap-3 justify-between items-center w-[20%]">
                    <div className="flex gap-3 items-center">
                        <figure className="w-20 h-20 overflow-hidden text-white">
                            {track?.album_cover_url && (
                                <Image
                                    src={track.album_cover_url}
                                    width={100}
                                    height={100}
                                    alt={track.album_title || "Album"}
                                />
                            )}
                        </figure>
                        <div className="flex-col hidden lg:flex">
                            <span className="text-white text-[1.2rem]">{track?.name}</span>
                            <span className="text-gray-500">{track?.artist}</span>
                        </div>
                    </div>
                    <figure>
                        {track?.name && <IoAddCircleOutline size={20} className="cursor-pointer" />}
                    </figure>
                </div>

                <div className="w-[30%] flex flex-col gap-1 items-center ">
                    <div className="flex items-center gap-5">
                        <div className="cursor-pointer hidden lg:block ">
                            <FaRandom size={25} fill="white" />
                        </div>
                        <div className="cursor-pointer hidden lg:block">
                            <IoIosSkipBackward size={25} fill="white" />
                        </div>
                        {!play ? (
                            <div
                                onClick={handlePlay}
                                className="hover:bg-gray-800 p-2 rounded-full cursor-pointer"
                            >
                                <IoMdPlay fill="white" size={25} />
                            </div>
                        ) : (
                            <div
                                onClick={handlePause}
                                className="hover:bg-gray-800 p-2 rounded-full cursor-pointer"
                            >
                                <IoIosPause size={25} />
                            </div>
                        )}
                        <div className="cursor-pointer hidden lg:block ">
                            <IoIosSkipForward size={25} fill="white" />
                        </div>
                        <div className="cursor-pointer lg:block hidden ">
                            <CiRepeat size={25} fill="white" />
                        </div>
                    </div>
                    <div className="w-full items-center hidden lg:flex gap-3 text-gray-500 font-normal">
                        <span>{currentTime}</span>
                        <div
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const clickPosition = e.clientX - rect.left;
                                const newTime = (clickPosition / rect.width) * duracionn;
                                handlePosition(newTime);
                            }}
                            className="h-[2.5px] w-full cursor-pointer bg-gray-500 hidden lg:block relative"
                        >
                            <div
                                className="h-full bg-white absolute"
                                style={{ width: `${progressPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
                <span>{duration}</span>
                <div className="hidden lg:flex">
                    <CiVolumeHigh
                        size={25}
                        style={{
                            strokeWidth: 1.2,
                        }}
                    />
                </div>
            </div>
        </>
    );
}