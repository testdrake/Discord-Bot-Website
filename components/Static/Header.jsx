import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";

export default function Header({ NavItems }) {
  const [open, setOpen] = useState(false);
  const links = NavItems.filter((item) => item.name !== "Add Bot");
  return (
    <header className="forge-header">
      <Link href="/"><a className="brand"><img src="/img/Horizon Logo (1).png" alt="Horizon" /><span>Horizon<span className="brand-dot">.</span></span></a></Link>
      <nav className="forge-nav">{links.map((item) => item.href.startsWith("http") ? <a key={item.name} href={item.href} target="_blank" rel="noreferrer">{item.name}</a> : <Link key={item.name} href={item.href}><a>{item.name}</a></Link>)}</nav>
      <div className="header-actions"><span className="online-pill"><i /> Bot online</span><a href={inviteUrl} className="header-invite">Invite bot <FiArrowUpRight /></a><button type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button></div>
      {open && <div className="mobile-nav">{links.map((item) => item.href.startsWith("http") ? <a key={item.name} href={item.href} target="_blank" rel="noreferrer">{item.name}</a> : <Link key={item.name} href={item.href}><a onClick={() => setOpen(false)}>{item.name}</a></Link>)}</div>}
    </header>
  );
}
