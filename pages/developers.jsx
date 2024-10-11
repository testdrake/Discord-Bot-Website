export default function Developers() {
    return (
        <>
            <div className="w-full my-10">
                <div className="flex w-full justify-center">
                    <img width="400" src="/img/bck7.png" alt="Background" />
                </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fa-solid fa-shield text-amber-400 mr-2" />
                    Developers
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center text-white rounded">
                    <a href="https://discord.gg/h8dY8SF7RX">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="h-32 w-32 rounded-full" src="https://cdn.discordapp.com/avatars/1044089744230994011/0846ba96944fe37ba48997c58e4dbc44.webp" alt="Owner" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">ĦØŘƗŽØŇ</h1>
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">@sheluv.drake#7829</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="flex flex-col justify-center text-white rounded">
                    <a href="https://discord.gg/h8dY8SF7RX">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="h-32 w-32 rounded-full" src="/img/znax.png" alt="Developer" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">ƶnax</h1>
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">@znax.#8900</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="py-10"></div>
        </>
    );
}
