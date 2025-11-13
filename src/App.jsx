import React from 'react'
import { Instagram, MessageCircle, Link, Sparkles, Code2, Terminal, Brain, Shield, Rocket, Users, Globe, Disc, Phone, Store } from 'lucide-react'
import ButtonLink from './components/ButtonLink'

function Section({ title, children, subtitle }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{title}</span>
          <Sparkles className="text-blue-600" size={24} />
        </h2>
        {subtitle && <p className="mt-3 text-gray-600 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <header className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center text-white font-black shadow-lg">A</div>
            <div>
              <p className="text-xs uppercase tracking-widest text-blue-600 font-bold">Portofolio</p>
              <h1 className="text-xl md:text-2xl font-black text-gray-900">Apis • Anak RPL 2010</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ButtonLink href="#connect" label="Connect" icon={Link} />
            <ButtonLink href="#projects" label="Projects" icon={Rocket} gradient="from-indigo-600 to-purple-600" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.25),transparent_35%)]" />
          <div className="max-w-6xl mx-auto px-6 py-16 relative">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <Sparkles size={14} /> Fokus RPL • Code • AI
                </p>
                <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight text-gray-900">
                  Bikin Masa Depan Lewat Kode, Sistem, dan AI
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  Gua Apis. Dulu pengen jadi dokter, tapi darah bukan buat gua. Sekarang gua pilih ngetik masa depan. Kadang diremehin, tapi santai—senyum tipis, ngetik pelan-pelan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="#connect" label="Hubungi Sekarang" icon={Phone} />
                  <ButtonLink href="#about" label="Liat Cerita Gua" icon={Disc} gradient="from-indigo-600 to-purple-600" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-indigo-100 blur-2xl" />
                <div className="relative bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: Code2, title: 'Frontend', desc: 'React, Tailwind' },
                      { icon: Terminal, title: 'Backend', desc: 'FastAPI, Node' },
                      { icon: Brain, title: 'AI/ML', desc: 'Prompting, tools' },
                      { icon: Shield, title: 'Keamanan', desc: 'Best-practices' },
                      { icon: Rocket, title: 'Deploy', desc: 'CI/CD, Vercel' },
                      { icon: Users, title: 'Kolaborasi', desc: 'Team-ready' },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition">
                        <item.icon className="text-blue-600" />
                        <p className="mt-2 font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="Tentang Apis" subtitle="Anak 2010 yang milih jalan teknologi—bukan karena gampang, tapi karena ini masa depan.">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
              <p>"Mereka ngomong gua gak bisa, tapi mereka gak tau gua lagi belajar ngoding masa depan."</p>
              <p>
                RPL bukan sekadar ngetik. Ini tentang bikin solusi nyata buat dunia digital. Gua fokus di web dev, backend, dan ngulik AI biar apa yang gua bangun lebih pintar dan berguna.
              </p>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl border p-4 bg-white">
                <p className="text-xs text-gray-500">Status</p>
                <p className="font-semibold">Pelajar RPL • 2010</p>
              </div>
              <div className="rounded-xl border p-4 bg-white">
                <p className="text-xs text-gray-500">Fokus</p>
                <p className="font-semibold">Web, Backend, AI</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Links */}
        <Section id="connect" title="Kunjungi & Connect" subtitle="Semua link penting ada di sini. Follow, join, dan chat langsung.">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ButtonLink href="https://instagram.com/afisajalah12" label="Instagram @afisajalah12" icon={Instagram} />
            <ButtonLink href="https://discord.gg/N63GWXKB5" label="Discord Server" icon={MessageCircle} gradient="from-indigo-600 to-purple-600" />
            <ButtonLink href="https://wa.me/6282240406600" label="WhatsApp Bisnis" icon={Phone} gradient="from-emerald-600 to-teal-600" />
            <ButtonLink href="https://chat.whatsapp.com/Lpa1xQvvTVt3gZZ5LfGwrp?mode=wwt" label="Grup JOKI FISH IT" icon={Users} gradient="from-orange-600 to-pink-600" />
            <ButtonLink href="https://whatsapp.com/channel/0029VbBZeRr7DAWzkqRdDB3S" label="Channel ANTC INFO" icon={Store} gradient="from-fuchsia-600 to-rose-600" />
            <ButtonLink href="#" label="Website Portofolio (Soon)" icon={Globe} gradient="from-slate-600 to-gray-700" />
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projek Pilihan" subtitle="Bukan tugas doang. Ini karya yang gua kejar buat masa depan.">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Landing Page Personal', stack: 'React + Tailwind', badge: 'UI/UX' },
              { title: 'API FastAPI', stack: 'Python + Mongo', badge: 'Backend' },
              { title: 'Bot Discord', stack: 'JS + API', badge: 'Automation' },
            ].map((p, i) => (
              <div key={i} className="group rounded-2xl border bg-white p-5 hover:shadow-lg transition relative overflow-hidden">
                <div className="absolute -top-10 -right-10 h-24 w-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full" />
                <p className="text-xs text-blue-600 font-semibold">{p.badge}</p>
                <h3 className="mt-1 font-bold text-lg text-gray-900">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.stack}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Demo</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Detail</a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t bg-white/70 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Apis — Anak RPL. Dibuat dengan hati dan kopi.</p>
            <div className="flex items-center gap-4">
              <a href="#about" className="hover:text-gray-800">Tentang</a>
              <a href="#projects" className="hover:text-gray-800">Projek</a>
              <a href="#connect" className="hover:text-gray-800">Kontak</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
