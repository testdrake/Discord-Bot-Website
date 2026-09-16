import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiCommand, FiGrid, FiHeadphones, FiShield, FiZap } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";
const supportUrl = "https://discord.gg/h8dY8SF7RX";
const voteUrl = "https://discordlist.gg/bot/1217203597603897535/vote";

const features = [
  { icon: FiShield, number: "01", label: "CONTROL", title: "Moderation that moves", description: "Automate the repetitive stuff and keep every corner of your server calm, clear, and welcoming." },
  { icon: FiHeadphones, number: "02", label: "ENERGY", title: "Make some noise", description: "Drop into a voice channel with rich music tools, smooth queues, and zero friction." },
  { icon: FiGrid, number: "03", label: "MOMENTUM", title: "Give people a reason", description: "Games, events, roles, and tiny moments that turn a server into a place people return to." },
];

export default function Index() {
  return (
    <div className="relative overflow-hidden pb-16">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grid-glow" />
      <section className="relative grid min-h-[calc(100vh-88px)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div className="relative z-10">
          <div className="reveal mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200"><span className="pulse-dot" /> System online / 24.7k communities</div>
          <h1 className="reveal reveal-delay-1 max-w-4xl text-5xl font-semibold leading-[0.91] tracking-[-0.075em] text-white sm:text-7xl lg:text-[7.1rem]">Your server&apos;s<br /><span className="text-shimmer">next era</span> starts here.</h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">Horizon is the bot that makes your Discord feel less like a chat room and more like a world worth logging into.</p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3"><a href={inviteUrl} className="magnetic-button group inline-flex items-center gap-3 rounded-full bg-cyan-200 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-white">Enter Horizon <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a><Link href="/commands"><a className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/[0.09]">Explore commands <FiCommand /></a></Link></div>
          <div className="reveal reveal-delay-4 mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500"><span className="flex items-center gap-2"><FiCheck className="text-cyan-300" /> Free forever</span><span className="flex items-center gap-2"><FiCheck className="text-cyan-300" /> Setup in seconds</span><span className="flex items-center gap-2"><FiCheck className="text-cyan-300" /> Built for Discord</span></div>
        </div>
        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[34rem] lg:mt-8">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="relative z-10 rounded-[2rem] border border-white/15 bg-[#0b1822]/80 p-3 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl"><div className="rounded-[1.45rem] border border-cyan-100/10 bg-[#102532]/90 p-5 sm:p-7"><div className="mb-10 flex items-center justify-between"><div className="flex items-center gap-3"><img src="/img/Horizon Logo (1).png" alt="Horizon" className="size-11 rounded-2xl" /><div><p className="font-semibold text-white">Horizon</p><p className="font-mono text-[10px] uppercase tracking-widest text-cyan-100/45">core / companion</p></div></div><span className="status-chip"><span /> LIVE</span></div><div className="relative overflow-hidden rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/20 via-[#123442] to-[#122239] p-6"><div className="scanline" /><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-200">Daily transmission</p><p className="mt-4 max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em] text-white">Make room for<br /><span className="text-cyan-200">better energy.</span></p><div className="mt-8 flex items-center gap-2 text-xs text-cyan-100/65"><FiZap className="text-cyan-200" /> All systems ready</div></div><div className="mt-4 grid grid-cols-2 gap-3"><div className="metric-card"><p className="text-3xl font-semibold text-white">99.9%</p><p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">uptime</p></div><div className="metric-card"><p className="text-3xl font-semibold text-white">40+</p><p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">commands</p></div></div></div></div>
          <div className="float-card absolute -bottom-7 -left-8 z-20 hidden rounded-2xl border border-white/15 bg-[#102532]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"><p className="font-mono text-[10px] uppercase tracking-widest text-cyan-100/50">Signal received</p><p className="mt-1 text-sm font-semibold text-white">Your community is ready.</p></div>
        </div>
      </section>
      <section className="relative border-t border-white/10 py-20 lg:py-28"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">The Horizon protocol</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">Small tools.<br /><span className="text-slate-500">Big atmosphere.</span></h2></div><p className="max-w-xs text-sm leading-6 text-slate-500">Everything your community needs to run smoother, sound better, and feel more like itself.</p></div><div className="grid gap-4 lg:grid-cols-3">{features.map(({ icon: Icon, number, label, title, description }, index) => <article key={title} className={`feature-card reveal reveal-delay-${index + 1}`}><div className="mb-16 flex items-center justify-between"><div className="icon-orb"><Icon /></div><span className="font-mono text-[10px] tracking-[0.25em] text-cyan-100/40">{number} / {label}</span></div><h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p><div className="mt-7 h-px w-10 bg-cyan-300/50 transition-all duration-500 group-hover:w-20" /></article>)}</div></section>
      <section className="cta-panel relative overflow-hidden rounded-[2rem] border border-cyan-200/20 px-6 py-14 sm:px-12 lg:py-20"><div className="relative z-10 max-w-2xl"><p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Transmission open</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">Turn your server<br /><span className="text-cyan-200">all the way on.</span></h2><div className="mt-9 flex flex-wrap gap-3"><a href={inviteUrl} className="inline-flex items-center gap-3 rounded-full bg-cyan-200 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-white">Invite Horizon <FiArrowUpRight /></a><a href={voteUrl} className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Vote for us</a></div></div><div className="cta-ring ring-one" /><div className="cta-ring ring-two" /><div className="cta-star">+</div></section>
    </div>
  );
}

export { supportUrl };
