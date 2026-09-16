import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";

export default function Header({ NavItems }) {
  const [open, setOpen] = useState(false);
  const links = NavItems.filter((item) => item.name !== "Add Bot");

  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="flex items-center justify-between py-5">
        <Link href="/"><a className="flex items-center gap-3"><img src="/img/Horizon Logo (1).png" alt="Horizon" className="size-9 rounded-xl" /><span className="text-lg font-bold tracking-tight text-white">Horizon<span className="text-violet-300">.</span></span></a></Link>
        <nav className="hidden items-center gap-8 lg:flex">{links.map((item) => item.href.startsWith("http") ? <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="text-sm text-slate-400 transition hover:text-white">{item.name}</a> : <Link key={item.name} href={item.href}><a className="text-sm text-slate-400 transition hover:text-white">{item.name}</a></Link>)}</nav>
        <div className="flex items-center gap-3"><a href={inviteUrl} className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:flex">Invite bot <FiArrowUpRight /></a><button type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 text-white lg:hidden">{open ? <FiX /> : <FiMenu />}</button></div>
      </div>
      {open && <div className="border-t border-white/10 py-4 lg:hidden">{links.map((item) => item.href.startsWith("http") ? <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{item.name}</a> : <Link key={item.name} href={item.href}><a onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5">{item.name}</a></Link>)}</div>}
    </header>
  );
}
