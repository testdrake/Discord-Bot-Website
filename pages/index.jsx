import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiGrid, FiHeadphones, FiShield } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";
const supportUrl = "https://discord.gg/h8dY8SF7RX";
const voteUrl = "https://discordlist.gg/bot/1217203597603897535/vote";

const features = [
  { icon: FiShield, number: "01", label: "CONTROL", title: "Moderation without the noise", description: "Automate the repetitive work and keep your community clear, calm, and welcoming." },
  { icon: FiHeadphones, number: "02", label: "ENERGY", title: "Music that just works", description: "Bring people together with reliable playback, queues, filters, and effortless controls." },
  { icon: FiGrid, number: "03", label: "MOMENTUM", title: "More reasons to return", description: "Give your members games, roles, events, and small moments worth coming back for." },
];

export default function Index() {
  return (
    <div className="site-shell">
      <div className="noise" />
      <div className="cursor-glow" />
      <section className="hero-section">
        <div className="eyebrow"><span className="live-dot" /> HORIZON / DISCORD COMPANION</div>
        <h1 className="hero-title">A better<br /><span>server</span><br />starts here.</h1>
        <p className="hero-copy">Horizon is the all-in-one Discord bot for communities that want sharper tools, more energy, and less busywork.</p>
        <div className="hero-actions"><a className="primary-link" href={inviteUrl}>Invite Horizon <FiArrowUpRight /></a><Link href="/commands"><a className="text-link">Browse commands <FiArrowUpRight /></a></Link></div>
        <div className="hero-aside"><span className="aside-line" /><span>Built for communities<br />that care about the details.</span></div>
      </section>

      <section className="manifesto-section">
        <div className="section-label">/ 01 — THE IDEA</div>
        <div className="manifesto-grid"><h2>Not another bot.<br /><em>A better atmosphere.</em></h2><p>Good communities are made of tiny moments. The right moderation tool. The perfect song. A reason to say one more thing before logging off. Horizon brings those moments together.</p></div>
      </section>

      <section className="feature-section">
        <div className="section-label">/ 02 — THE TOOLKIT</div>
        <div className="feature-list">{features.map(({ icon: Icon, number, label, title, description }) => <article key={title} className="feature-row"><div className="feature-index">{number}</div><div className="feature-icon"><Icon /></div><div className="feature-heading"><span>{label}</span><h3>{title}</h3></div><p>{description}</p><FiArrowUpRight className="feature-arrow" /></article>)}</div>
      </section>

      <section className="terminal-section"><div className="terminal-top"><span>horizon@your-server ~</span><span className="terminal-status">● ONLINE</span></div><div className="terminal-body"><p><span className="prompt">$</span> invite --horizon</p><p className="terminal-muted">Your community is ready.</p><p className="terminal-success"><FiCheck /> 40+ commands loaded. Let&apos;s make some noise.</p></div><a href={inviteUrl} className="terminal-link">Run command <FiArrowUpRight /></a></section>

      <section className="footer-cta"><div className="section-label">/ 03 — NEXT STEP</div><h2>Make your server<br /><span>feel like yours.</span></h2><div className="hero-actions"><a className="primary-link" href={inviteUrl}>Get Horizon <FiArrowUpRight /></a><a className="text-link" href={voteUrl}>Vote for us <FiArrowUpRight /></a></div></section>
    </div>
  );
}

export { supportUrl };

export const config = { amp: false };

