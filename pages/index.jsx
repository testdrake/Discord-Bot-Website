import Link from "next/link";
import { FiArrowRight, FiCheck, FiGlobe, FiHeadphones, FiShield, FiStar } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";
const voteUrl = "https://discordlist.gg/bot/1217203597603897535/vote";

const features = [
  { icon: FiShield, title: "Powerful moderation", text: "Keep your community safe with smart automations, filters, and helpful tools." },
  { icon: FiHeadphones, title: "Music for every moment", text: "Reliable queues and simple controls that keep your server moving." },
  { icon: FiStar, title: "Personality included", text: "Games, roles, and little surprises that make your server feel alive." },
];

export default function Index() {
  return (
    <div className="forge-page">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <section className="forge-hero">
        <div className="forge-hero-copy">
          <div className="hero-badge"><span className="badge-dot" /> THE DISCORD BOT WITH ATTITUDE</div>
          <h1>Horizon</h1>
          <h2>Discord made <span>better.</span></h2>
          <p>Transform your Discord server with Horizon — the all-in-one bot that brings powerful moderation, music, and personality to every community.</p>
          <div className="hero-actions"><a className="discord-button" href={inviteUrl}><FiShield /> Add to Discord</a><a className="outline-button" href="#features">Explore features <FiArrowRight /></a></div>
          <small className="terms">By adding Horizon, you agree to our Terms of Service and Privacy Policy</small>
        </div>
        <div className="hero-visual" aria-label="Horizon bot shield illustration"><div className="shield-ring"><div className="shield-mark"><FiShield /></div><span className="spark spark-one" /><span className="spark spark-two" /></div><div className="ghost-shield"><FiShield /></div></div>
      </section>

      <section className="trust-strip"><span>TRUSTED BY COMMUNITIES THAT WANT MORE</span><strong>40,000+</strong><span>members protected and entertained</span></section>

      <section className="feature-section" id="features"><div className="section-kicker">WHY HORIZON <span>01</span></div><h2>One bot.<br /><em>More atmosphere.</em></h2><div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{text}</p><a href={inviteUrl}>Learn more <FiArrowRight /></a></article>)}</div></section>

      <section className="command-banner"><div><span className="section-kicker">READY WHEN YOU ARE <span>02</span></span><h2>Give your server<br /><em>some character.</em></h2></div><a className="discord-button" href={inviteUrl}>Invite Horizon <FiArrowRight /></a></section>
      <section className="mini-links"><Link href="/commands"><a>Browse commands <FiArrowRight /></a></Link><a href={voteUrl}>Vote for Horizon <FiArrowRight /></a><span><FiGlobe /> Online worldwide</span></section>
    </div>
  );
}

export const config = { amp: false };
