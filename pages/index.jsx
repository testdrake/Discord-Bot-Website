import Link from "next/link";
import { FiArrowUpRight, FiCheck, FiCommand, FiGrid, FiHeadphones, FiShield, FiZap } from "react-icons/fi";

const inviteUrl = "https://discord.com/oauth2/authorize?client_id=1217203597603897535&permissions=8&scope=bot";
const supportUrl = "https://discord.gg/h8dY8SF7RX";
const voteUrl = "https://discordlist.gg/bot/1217203597603897535/vote";

const features = [
  { icon: FiShield, eyebrow: "01 / SAFETY", title: "Keep your server in check", description: "Smart moderation tools help your community stay welcoming without slowing your team down." },
  { icon: FiHeadphones, eyebrow: "02 / SOUND", title: "A better way to listen", description: "Bring high-quality music and simple queue controls to every voice channel." },
  { icon: FiGrid, eyebrow: "03 / PLAY", title: "More reasons to hang out", description: "Give your members games, events, and lightweight ways to make the server feel alive." },
];

export default function Index() {
  return (
    <div className="relative overflow-hidden pb-12">
      <div className="pointer-events-none absolute -top-48 right-[-14rem] h-[38rem] w-[38rem] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-18rem] top-[34rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[110px]" />

      <section className="relative grid min-h-[calc(100vh-100px)] items-center gap-16 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            Discord, upgraded
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.6rem]">
            Make your server <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">feel alive.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">Horizon is the all-in-one Discord bot for communities that want better tools, more energy, and less busywork.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={inviteUrl} className="group inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Add Horizon <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link href="/commands"><a className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 font-semibold text-white transition hover:border-violet-300/50 hover:bg-white/[0.08]">Explore commands <FiCommand /></a></Link>
          </div>
          <div className="mt-12 flex items-center gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><FiCheck className="text-cyan-300" /> Free to use</span><span className="h-1 w-1 rounded-full bg-slate-700" /><span className="flex items-center gap-2"><FiCheck className="text-cyan-300" /> Built for Discord</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#121326]/90 p-3 shadow-2xl shadow-violet-950/40">
            <div className="rounded-[1.2rem] border border-white/10 bg-[#1b1d31] p-5 sm:p-7">
              <div className="mb-8 flex items-center justify-between"><div className="flex items-center gap-3"><img src="/img/Horizon Logo (1).png" alt="Horizon" className="size-10 rounded-xl" /><div><p className="font-semibold text-white">Horizon</p><p className="text-xs text-slate-500">your server companion</p></div></div><span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">Online</span></div>
              <div className="rounded-xl border border-violet-300/15 bg-gradient-to-br from-violet-500/15 to-transparent p-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Welcome back</p><p className="mt-3 text-2xl font-semibold tracking-tight text-white">Your community,<br />on your terms.</p><div className="mt-6 flex items-center gap-2 text-xs text-slate-400"><FiZap className="text-cyan-300" /> 24/7 tools ready to go</div></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[0.05] p-4"><p className="text-2xl font-semibold text-white">99.9%</p><p className="mt-1 text-xs text-slate-500">uptime</p></div><div className="rounded-xl bg-white/[0.05] p-4"><p className="text-2xl font-semibold text-white">40+</p><p className="mt-1 text-xs text-slate-500">commands</p></div></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-8 hidden rounded-xl border border-white/10 bg-[#17192a] px-4 py-3 shadow-xl sm:block"><p className="text-xs text-slate-500">Horizon is ready</p><p className="mt-1 text-sm font-semibold text-white">Let&apos;s build something fun.</p></div>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-20 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Everything you need</p><h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">One bot. A lot more community.</h2></div><p className="max-w-xs text-sm leading-6 text-slate-500">Less tab-switching. More time making your server worth coming back to.</p></div>
        <div className="grid gap-4 lg:grid-cols-3">{features.map(({ icon: Icon, eyebrow, title, description }) => <article key={title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.06]"><div className="mb-12 flex items-center justify-between"><div className="flex size-11 items-center justify-center rounded-xl bg-violet-400/10 text-xl text-violet-300"><Icon /></div><span className="text-[10px] font-bold tracking-[0.2em] text-slate-600">{eyebrow}</span></div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{description}</p></article>)}</div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/20 via-[#17172b] to-cyan-500/10 px-6 py-12 sm:px-12 lg:py-16"><div className="relative z-10 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready when you are</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Your next great community starts with one click.</h2><div className="mt-8 flex flex-wrap gap-3"><a href={inviteUrl} className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-200">Invite Horizon <FiArrowUpRight /></a><a href={voteUrl} className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10">Vote for us</a></div></div><div className="absolute -right-16 -top-24 size-80 rounded-full border border-white/10 opacity-50" /><div className="absolute -right-4 -top-12 size-56 rounded-full border border-white/10 opacity-50" /></section>
    </div>
  );
}

export { supportUrl };
