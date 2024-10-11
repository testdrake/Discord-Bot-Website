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
                {[{
                    name: "ĦØŘƗŽØŇ",
                    discord: "@sheluv.drake#7829",
                    img: "https://cdn.discordapp.com/avatars/1044089744230994011/0846ba96944fe37ba48997c58e4dbc44.webp"
                },
                {
                    name: "ƶnax",
                    discord: "@znax.#8900",
                    img: "https://cdn.discordapp.com/avatars/999577527079153714/5f4f7091dc2e35e3fd0906d34f662e9d.webp"
                }].map((developer, index) => (
                    <div key={index} className="flex flex-col justify-center text-white rounded slide-animation">
                        <a href="https://discord.gg/h8dY8SF7RX">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                                <img className="h-32 w-32 rounded-full" src={developer.img} alt={developer.name} />
                                <div>
                                    <h1 className="leading-none text-3xl font-bold text-white">{developer.name}</h1>
                                    <div className="flex items-center mt-1">
                                        <p className="font-normal font-sm">{developer.discord}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className="py-10"></div>

            <style jsx>{`
                @keyframes slide {
                    0% { transform: translateX(100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }

                .slide-animation {
                    animation: slide 8s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
