'use client'

import { useMemo, useState } from 'react'
import {
  Activity, ArrowLeft, ArrowRight, Bell, BookOpen, CalendarDays, Check,
  ChevronDown, Clock3, Coffee, ExternalLink, GraduationCap, HeartPulse,
  Home, Inbox, KeyRound, Library, Mail, Menu, MoreHorizontal, Palmtree,
  PanelTop, Phone, Search, Settings, ShieldCheck, Sparkles, Sunrise,
  Users, Utensils, X
} from 'lucide-react'

const quickLinks = [
  { label: 'Portal', icon: GraduationCap, tone: 'coral' },
  { label: 'Webmail', icon: Mail, tone: 'blue' },
  { label: 'Biblioteca', icon: Library, tone: 'gold' },
  { label: 'Cardápio', icon: Utensils, tone: 'green' },
  { label: 'Google Drive', icon: PanelTop, tone: 'lavender' },
  { label: 'Agenda', icon: CalendarDays, tone: 'peach' },
  { label: 'Suporte', icon: Settings, tone: 'sky' },
  { label: 'Professor', icon: BookOpen, tone: 'mint' },
]

const scales = [
  { title: 'Culto matinal', person: 'Mariana Alves', detail: 'Coordenação Pedagógica', icon: Sunrise, tone: 'yellow' },
  { title: 'Plantão de sexta', person: 'Rafael Martins', detail: 'Secretaria', icon: Clock3, tone: 'blue' },
  { title: 'Compensação', person: 'Juliana Costa', detail: 'Financeiro', icon: Activity, tone: 'green' },
  { title: 'Entrevistas', person: 'Beatriz Nunes', detail: 'Orientação', icon: Users, tone: 'coral' },
  { title: 'Hino nacional', person: 'Carlos Eduardo', detail: 'Professor de História', icon: ShieldCheck, tone: 'purple' },
]

const events = [
  { date: '28', month: 'AGO', title: 'Reunião de pais — Fundamental I', time: '18:30', place: 'Auditório principal', tone: 'blue' },
  { date: '02', month: 'SET', title: 'Conselho de classe', time: '14:00', place: 'Sala dos professores', tone: 'coral' },
  { date: '05', month: 'SET', title: 'Feira cultural 2026', time: '09:00', place: 'Pátio da escola', tone: 'green' },
]

const birthdays = [
  { day: '27', name: 'Ana Paula Ribeiro', role: 'Professora • 2º ano', days: 'Amanhã' },
  { day: '30', name: 'Felipe Moura', role: 'Coordenador de Esportes', days: 'Em 4 dias' },
  { day: '31', name: 'Lívia Fernandes', role: 'Secretaria', days: 'Em 5 dias' },
]

function ToneIcon({ tone, children }: { tone: string; children: React.ReactNode }) {
  return <span className={`tone-icon tone-${tone}`}>{children}</span>
}

export default function Page() {
  const [activeLink, setActiveLink] = useState('Home')
  const [eventIndex, setEventIndex] = useState(0)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [calendarMode, setCalendarMode] = useState<'month' | 'list'>('month')
  const today = 24
  const event = events[eventIndex]
  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    return hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite'
  }, [])

  return (
    <main className="dbox-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark"><Sparkles /></div><span>DBox</span></div>
        <nav className="main-nav" aria-label="Navegação principal">
          {[['Home', Home], ['Pedagógico', BookOpen], ['Matrículas', GraduationCap], ['Espiritual', HeartPulse], ['Admin', Settings]].map(([label, Icon]) => (
            <button key={label as string} className={activeLink === label ? 'nav-item active' : 'nav-item'} onClick={() => setActiveLink(label as string)}>
              <Icon />{label as string}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <label className="search-box"><Search /><input aria-label="Buscar" placeholder="Buscar no DBox" /></label>
          <div className="menu-wrap"><button className="icon-button notification-button" aria-label="Notificações" onClick={() => setShowNotifications(!showNotifications)}><Bell /><b>3</b></button>
            {showNotifications && <div className="popover notifications"><strong>Avisos recentes</strong><p><span className="dot blue-dot" />Reunião pedagógica amanhã às 14h</p><p><span className="dot coral-dot" />Novo documento na secretaria</p><p><span className="dot green-dot" />Cardápio de setembro publicado</p></div>}
          </div>
          <div className="menu-wrap"><button className="profile-button" aria-label="Abrir perfil" onClick={() => setShowProfile(!showProfile)}><span className="avatar">MP</span><span className="profile-name">Marina Prado</span><ChevronDown /></button>
            {showProfile && <div className="popover profile-menu"><strong>Marina Prado</strong><small>Direção escolar</small><p><Users /> Meu perfil</p><p><HeartPulse /> Emergência médica</p><p><Phone /> Ramais internos</p><p className="logout"><X /> Sair</p></div>}
          </div>
        </div>
        <button className="mobile-menu" aria-label="Menu"><Menu /></button>
      </header>

      <div className="page-content">
        <section className="welcome-card"><div><p className="eyebrow">PAINEL DA ESCOLA</p><h1>{greeting}, Marina!</h1><p className="date-line">24 de agosto de 2026</p></div><div className="welcome-art"><Coffee /></div></section>

        <section className="section-block"><div className="section-heading"><div><p className="eyebrow">ACESSO RÁPIDO</p><h2>Links rápidos</h2></div><button className="text-button">Personalizar <Settings /></button></div><div className="quick-grid">{quickLinks.map(({ label, icon: Icon, tone }) => <button className="quick-link" key={label} onClick={() => alert(`Abrindo ${label}`)}><ToneIcon tone={tone}><Icon /></ToneIcon><span>{label}</span><ExternalLink /></button>)}</div></section>

        <div className="dashboard-grid">
          <section className="section-block scales-section"><div className="section-heading"><div><p className="eyebrow">HOJE</p><h2>Escalas</h2></div><button className="more-button" aria-label="Mais opções"><MoreHorizontal /></button></div><div className="scales-grid">{scales.map(({ title, person, detail, icon: Icon, tone }) => <article className={`scale-card scale-${tone}`} key={title}><div className="scale-top"><ToneIcon tone={tone}><Icon /></ToneIcon><h3>{title}</h3><span>Hoje</span></div><div className="person-row"><span className="mini-avatar">{person.split(' ').map(n => n[0]).join('').slice(0, 2)}</span><div><strong>{person}</strong><small>{detail}</small></div></div></article>)}</div></section>

          <aside className="side-column">
            <section className="side-card events-card"><div className="side-heading"><div><p className="eyebrow">AGENDA</p><h2>Próximos eventos</h2></div><span className="counter">{eventIndex + 1} / {events.length}</span></div><article className="event-feature"><div className={`event-date event-${event.tone}`}><strong>{event.date}</strong><span>{event.month}</span></div><div><h3>{event.title}</h3><p><Clock3 /> {event.time} <span>•</span> {event.place}</p></div></article><div className="event-controls"><button onClick={() => setEventIndex((eventIndex - 1 + events.length) % events.length)} aria-label="Evento anterior"><ArrowLeft /></button><button onClick={() => setEventIndex((eventIndex + 1) % events.length)} aria-label="Próximo evento"><ArrowRight /></button><button className="reset-button" onClick={() => setEventIndex(0)}>Mais próximo <ArrowRight /></button></div></section>

            <section className="side-card"><div className="side-heading"><div><p className="eyebrow">CELEBRAÇÃO</p><h2>Aniversariantes</h2></div><span className="month-label">Agosto</span></div><div className="birthday-list">{birthdays.map(({ day, name, role, days }) => <div className="birthday" key={name}><span className="birthday-day">{day}</span><div><strong>{name}</strong><small>{role}</small></div><em>{days}</em></div>)}</div><button className="full-list">Ver todos os aniversariantes <ArrowRight /></button></section>

            <section className="side-card calendar-card"><div className="side-heading"><div><p className="eyebrow">ORGANIZE-SE</p><h2>Calendário</h2></div><div className="toggle"><button className={calendarMode === 'month' ? 'selected' : ''} onClick={() => setCalendarMode('month')}>Mês</button><button className={calendarMode === 'list' ? 'selected' : ''} onClick={() => setCalendarMode('list')}>Lista</button></div></div>{calendarMode === 'month' ? <><div className="calendar-nav"><button aria-label="Mês anterior"><ArrowLeft /></button><strong>Agosto 2026</strong><button aria-label="Próximo mês"><ArrowRight /></button></div><div className="calendar-grid">{['D','S','T','Q','Q','S','S'].map((d, i) => <span className="weekday" key={`${d}${i}`}>{d}</span>)}{Array.from({ length: 31 }, (_, i) => <span key={i + 1} className={`calendar-day ${i + 1 === today ? 'today' : ''} ${[5, 18, 24, 28].includes(i + 1) ? 'has-event' : ''}`}>{i + 1}</span>)}</div></> : <div className="calendar-list"><p><b>28 ago</b> Reunião de pais</p><p><b>02 set</b> Conselho de classe</p><p><b>05 set</b> Feira cultural 2026</p></div>}</section>
          </aside>
        </div>
      </div>
    </main>
  )
}
