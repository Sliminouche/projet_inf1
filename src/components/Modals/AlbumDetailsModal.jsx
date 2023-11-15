import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {RxCross2} from "react-icons/rx";

export default function AlbumDetailsModal({album, open, setOpen, albumTracks}) {
    function formatTime(milliseconds) {
        if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
            return 'Invalid input';
        }

        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        return `${minutes}min${remainingSeconds}s`;
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <RxCross2 className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className=" ">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-xl font-bold leading-6 text-gray-900">
                                            "{album.nom}"
                                        </Dialog.Title>

                                        <div className="flex justify-center">
                                            <img
                                                src={album.image}
                                                alt={`${album.image}`}
                                                className={"w-56 my-4 shadow-sm"}
                                            />
                                        </div>
                                        <div className={"bg-gray-100 h-400 overflow-y-auto px-8 py-2 rounded shadow-inner"}>
                                            {albumTracks.map((track, i) => (
                                                <div key={i} className={"flex justify-between"}>
                                                    <div className={"flex justify-center"}>
                                                        <div className={"flex justify-center"}>
                                                            <div className={"text-gray-500"}>{i + 1}</div>
                                                            <div className={"ml-2"}>{track.nom}</div>
                                                        </div>
                                                    </div>
                                                    <div className={"text-gray-500"}>{formatTime(track.duree)}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
