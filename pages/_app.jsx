import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function AwardApp({ Component, pageProps }) {
  const NavItems = [
    { name: "Home", href: "/", link: true },
    { name: "Commands", href: "/commands", link: true },
    { name: "Support", href: "https://discord.gg/h8dY8SF7RX", link: false },
    { name: "Vote", href: "https://discordlist.gg/bot/1217203597603897535/vote", link: false },
  ];
  return <div className="min-h-screen bg-[#090a12] text-white"><Head><title>Horizon — Discord, upgraded</title><meta name="description" content="Horizon is the all-in-one Discord bot for communities that want better tools, more energy, and less busywork." /><meta name="theme-color" content="#090a12" /></Head><div className="mx-auto w-full max-w-7xl px-5 sm:px-8"><Header NavItems={NavItems} /><main><Component {...pageProps} /></main><Footer /></div></div>;
}
