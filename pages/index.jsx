import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/bck (1).png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Horizon
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       All-in-One Discord Bot: Setup, Manage, Entertain, and Protect Your Servers! 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite Horizon
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://discordlist.gg/bot/1217203597603897535/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote Horizon</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/Untitled design (3).png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/Untitled design (3).png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Horizon" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Add Horizon multipurpose Discord bot for enhanced server management and seamless moderation." }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite Horizon
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white"> 
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimization</p>
                  <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
                  <p className="text-gray-500 line-clamp-4">A bot that supports multi-platform music playback. (Spotify, Souncloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">An open source safe bot that you can browse and help us develop.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">With our best teammates, we provide the fastest response to anyone who needs help.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/1228215001832226899/1230099121894068285/Untitled_design_4.png?ex=66321614&is=661fa114&hm=d321b9ad673a7b96a3faa0a070e40dc220b752fae9c3d48c432ac5a088f75ced&"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Ready To Try Horizon?</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Invite Horizon to your server now and take it to the next level!</p>
                </div>
                 <img src="https://cdn.discordapp.com/attachments/1228215001832226899/1230099121894068285/Untitled_design_4.png?ex=66321614&is=661fa114&hm=d321b9ad673a7b96a3faa0a070e40dc220b752fae9c3d48c432ac5a088f75ced&" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
