import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/Horizon Logo (1).png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">Horizon</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://flagcdn.com/w80/gb.png`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        English
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Links</p>
                            <div>
                                <Link href="https://discordlist.gg/bot/1217203597603897535/vote">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Vote Bot
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/h8dY8SF7RX" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Support Server
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Invite Bot
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Social</p>
                            <div>
                                <Link href="https://discord.gg/h8dY8SF7RX">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Disocrd 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Important</p>
                            <div>
                                <Link href="https://sites.google.com/gailmanagement.org/horizon/terms-of-service?authuser=0">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Terms Of Service
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://sites.google.com/gailmanagement.org/horizon/privacy-policy?authuser=0">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Privacy Policy
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; Horizon
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-green-400"}>
                                    Bot Online
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"Powered by ĦØŘƗŽØŇ"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
