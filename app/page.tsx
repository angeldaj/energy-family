import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Flame,
  MapPinned,
  MessageCircleMore,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { ClassesTable } from "@/components/landing/classes-table";
import { FeatureCard } from "@/components/landing/feature-card";
import { Gallery } from "@/components/landing/gallery";
import { Manifesto } from "@/components/landing/manifesto";
import { Reveal, Stagger, StaggerItem } from "@/components/landing/motion";
import { Nav } from "@/components/landing/nav";
import { PricingCard } from "@/components/landing/pricing-card";
import { ScheduleTable } from "@/components/landing/schedule-table";
import { SectionHeading } from "@/components/landing/section-heading";
import { Ticker } from "@/components/landing/ticker";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL =
  "https://wa.me/?text=Hola%20Energy%20Family%2C%20quiero%20reservar%20mi%20clase%20gratis%20de%20prueba.";

const MAPS_APP_URL = "https://maps.app.goo.gl/KK5ZYWSipRsDN4yj9";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Final%20de%20Av.%20Paseo%20Caron%C3%AD%2C%20Urb.%20Paratepuy.%20Mnza%2045%20Casa%201&output=embed";

const tickerItems = [
  "Disciplina",
  "CrossFit",
  "Comunidad",
  "Resultados",
  "Sin excusas",
  "Energy Family",
] as const;

const pillars = [
  {
    title: "Disciplina que no se negocia",
    description:
      "Técnica antes que ego. Carga antes que velocidad. Llegas puntual o no entras. Aquí no se juega a entrenar.",
    Icon: Target,
  },
  {
    title: "Comunidad que empuja",
    description:
      "Nadie termina su WOD solo. El último barre el box, y en el camino te empujan todos los que ya pasaron por ahí.",
    Icon: Users,
  },
  {
    title: "Coaches que corrigen",
    description:
      "CF-L2 certificados. Dos por clase. Te miran, te corrigen, te exigen. Vienes a mejorar, no a sudar por sudar.",
    Icon: ShieldCheck,
  },
] as const;

const rules = [
  {
    number: "01",
    title: "Llegas a tiempo o no llegas",
    body: "El warm-up no espera. Puertas se cierran al minuto uno. Respeto al box, a los coaches y a quienes sí cumplieron.",
  },
  {
    number: "02",
    title: "El peso no negocia",
    body: "La barra pesa lo que pesa. Las excusas no bajan la carga. Técnica primero, después carga, después velocidad.",
  },
  {
    number: "03",
    title: "El último barre el box",
    body: "Nadie se va hasta que el último termine su WOD. Si eres el último, terminas. Si eres el primero, esperas.",
  },
  {
    number: "04",
    title: "La marca se rompe, no se esquiva",
    body: "Prs no son suerte. Son cientos de reps técnicas antes. Aquí registramos, medimos y vamos por la siguiente.",
  },
] as const;

const classes = [
  {
    code: "WOD",
    name: "Workout of the Day",
    focus: "Condicional mixto — fuerza + cardio",
    intensity: "Alta" as const,
    duration: "60 min",
  },
  {
    code: "OLY",
    name: "Levantamiento Olímpico",
    focus: "Arranque, envión, técnica bajo carga",
    intensity: "Media" as const,
    duration: "75 min",
  },
  {
    code: "MET",
    name: "Metcon",
    focus: "Metabólico — EMOM, AMRAP, intervalos",
    intensity: "Brutal" as const,
    duration: "45 min",
  },
  {
    code: "STR",
    name: "Fuerza pura",
    focus: "Sentadilla, peso muerto, press — progresión lineal",
    intensity: "Media" as const,
    duration: "60 min",
  },
  {
    code: "BGN",
    name: "OnRamp — Iniciación",
    focus: "Fundamentos, movilidad, técnica básica",
    intensity: "Baja" as const,
    duration: "60 min",
  },
] as const;

const schedule = [
  {
    time: "05:00",
    mon: "WOD",
    tue: "OLY",
    wed: "WOD",
    thu: "MET",
    fri: "STR",
    sat: "—",
  },
  {
    time: "06:00",
    mon: "WOD",
    tue: "WOD",
    wed: "OLY",
    thu: "WOD",
    fri: "MET",
    sat: "WOD",
  },
  {
    time: "07:00",
    mon: "STR",
    tue: "MET",
    wed: "WOD",
    thu: "OLY",
    fri: "WOD",
    sat: "MET",
  },
  {
    time: "17:00",
    mon: "BGN",
    tue: "BGN",
    wed: "BGN",
    thu: "BGN",
    fri: "BGN",
    sat: "—",
  },
  {
    time: "18:00",
    mon: "WOD",
    tue: "WOD",
    wed: "OLY",
    thu: "WOD",
    fri: "MET",
    sat: "—",
  },
  {
    time: "19:00",
    mon: "MET",
    tue: "STR",
    wed: "MET",
    thu: "WOD",
    fri: "STR",
    sat: "—",
  },
] as const;

type Plan = {
  accent: string;
  name: string;
  price: string;
  unit: string;
  detail: string;
  features: readonly string[];
  featured?: boolean;
};

const plans: readonly Plan[] = [
  {
    accent: "Ritmo flexible",
    name: "Clase suelta",
    price: "$2",
    unit: "/clase",
    detail: "Prueba el ritmo antes de comprometerte.",
    features: [
      "1 clase a elegir",
      "Cualquier horario disponible",
      "Acceso a equipamiento",
    ],
  },
  {
    accent: "Plan destacado",
    name: "Mensual",
    price: "$15",
    unit: "/mes",
    detail: "Cinco días por semana. Un mes completo.",
    features: [
      "5 clases por semana",
      "Todos los tipos de clase",
      "Seguimiento de PRs",
      "Acceso a área olímpica",
      "Consulta con coach cada 30 días",
    ],
    featured: true,
  },
  {
    accent: "Corto plazo",
    name: "Semanal",
    price: "$5",
    unit: "/semana",
    detail: "Cinco días durante esa semana.",
    features: [
      "5 clases esa semana",
      "Todos los tipos de clase",
      "Acceso a equipamiento",
    ],
  },
] as const;

const galleryImages = [
  { src: "/photos/pic-1.jpg", tag: "El box" },
  { src: "/photos/pic-2.jpg", tag: "Rig" },
  { src: "/photos/pic-3.jpg", tag: "Área olímpica" },
  { src: "/photos/pic-1.jpg", tag: "Comunidad" },
  { src: "/photos/pic-2.jpg", tag: "Coaches" },
] as const;

export default function Home() {
  return (
    <>
      <Nav whatsappUrl={WHATSAPP_URL} />

      <main className="brutalist-shell" id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-crosshair" aria-hidden="true" />

          <div className="container-pad relative z-10">
            <div className="hero-layout">
              <Stagger as="div" immediate className="flex flex-col gap-7">
                <StaggerItem className="flex flex-wrap items-center gap-3">
                  <Badge variant="solid">
                    <span className="inline-block w-1.5 h-1.5 bg-[#0a0a0a] text-muted-foreground pulse-dot" />
                    1 clase gratis
                  </Badge>
                  <Badge variant="outline">CrossFit · Paratepuy · PZO</Badge>
                </StaggerItem>

                <StaggerItem as="div">
                  <h1 className="headline headline-xl">
                    No vienes
                    <br />
                    a calentar
                    <br />
                    <span className="text-[var(--brand)]">silla.</span>
                  </h1>
                </StaggerItem>

                <StaggerItem as="div">
                  <p className="max-w-xl text-[var(--muted-foreground)] leading-relaxed text-lg">
                    Energy Family es un box de CrossFit para gente que quiere
                    progreso real. Sin excusas disfrazadas de rutina, sin cardio
                    de mentira, sin playlists para selfies.
                  </p>
                </StaggerItem>

                <StaggerItem className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Reservar clase de prueba por WhatsApp"
                  >
                    <Button size="lg" asChild>
                      <span>
                        Reservar prueba gratis
                        <MessageCircleMore />
                      </span>
                    </Button>
                  </a>
                  <a href="#planes">
                    <Button variant="outline" size="lg" asChild>
                      <span>
                        Ver planes
                        <ArrowDown />
                      </span>
                    </Button>
                  </a>
                </StaggerItem>

                <StaggerItem className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-6 border-t border-[var(--border)] font-mono text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[var(--muted-foreground)]">
                  <div className="flex items-center gap-2">
                    <Flame
                      className="size-4 text-[var(--brand)]"
                      strokeWidth={2}
                    />
                    4 años
                  </div>
                  <div className="flex items-center gap-2">
                    <Users
                      className="size-4 text-[var(--brand)]"
                      strokeWidth={2}
                    />
                    +80 miembros
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap
                      className="size-4 text-[var(--brand)]"
                      strokeWidth={2}
                    />
                    CF-L2
                  </div>
                </StaggerItem>
              </Stagger>

              <Reveal
                as="div"
                variant="scaleIn"
                immediate
                delay={0.15}
                className="hero-img"
              >
                <span className="hero-meta">
                  ENF / 001 · PARATEPUY · 08°17′N
                </span>
                <Image
                  src="/photos/pic-3.jpg"
                  alt="Atleta entrenando en Energy Family"
                  width={800}
                  height={1000}
                  priority
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ TICKER ============ */}
        <Ticker items={tickerItems} />

        {/* ============ STATS ============ */}
        <section className="section">
          <div className="container-pad">
            <Stagger as="div" className="stats-row">
              <StaggerItem className="stat">
                <div className="stat-value">04</div>
                <div className="stat-label">Años operando</div>
              </StaggerItem>
              <StaggerItem className="stat">
                <div className="stat-value">80+</div>
                <div className="stat-label">Miembros activos</div>
              </StaggerItem>
              <StaggerItem className="stat">
                <div className="stat-value">06</div>
                <div className="stat-label">Clases diarias</div>
              </StaggerItem>
              <StaggerItem className="stat">
                <div className="stat-value">02</div>
                <div className="stat-label">Coaches por clase</div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* ============ MANIFESTO ============ */}
        <section className="section" id="codigo">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="01 / Código"
                kicker="Manifiesto Energy"
                title="El código del box."
                description="Cuatro reglas. Ninguna decorativa. Si no las firmas, ahorraste la primera clase."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Manifesto rules={rules} />
            </Reveal>
          </div>
        </section>

        {/* ============ PILLARS ============ */}
        <section className="section" id="pilares">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="02 / Pilares"
                kicker="Por qué entrenas aquí"
                title="Tres cosas que sí cuidamos."
                description="El resto es ruido. Entrenar serio cabe en tres ideas."
              />
            </Reveal>

            <Stagger
              as="div"
              className="grid gap-px bg-[var(--border)] md:grid-cols-3"
            >
              {pillars.map((pillar, index) => (
                <StaggerItem as="div" key={pillar.title}>
                  <FeatureCard
                    index={`0${index + 1}`}
                    title={pillar.title}
                    description={pillar.description}
                    Icon={pillar.Icon}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section className="section">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="03 / El box"
                kicker="El espacio"
                title="Rig completo. Olímpica. Lo que necesitas."
                description="Fotos del box, la barra, la comunidad. Lo demás, verlo en vivo."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Gallery images={galleryImages} />
            </Reveal>
          </div>
        </section>

        {/* ============ CLASSES ============ */}
        <section className="section" id="clases">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="04 / Clases"
                kicker="Qué vas a entrenar"
                title="Cinco tipos de clase. Cero relleno."
                description="Todo lo que programamos tiene un objetivo. Ninguna clase es comodín."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ClassesTable rows={classes} />
            </Reveal>
          </div>
        </section>

        {/* ============ SCHEDULE ============ */}
        <section className="section" id="horarios">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="05 / Horarios"
                kicker="Cuándo"
                title="Entras cuando te cuadre. Lunes a sábado."
                description="Bloques de mañana y tarde. Llegas 10 min antes, o no calientas."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ScheduleTable rows={schedule} />
            </Reveal>

            <Reveal
              delay={0.15}
              className="flex flex-wrap items-center gap-3 mt-6 font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]"
            >
              <Clock className="size-4 text-[var(--brand)]" />
              Domingos descanso activo — movilidad + Oly open gym
            </Reveal>
          </div>
        </section>

        {/* ============ PLANS ============ */}
        <section className="section" id="planes">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="06 / Planes"
                kicker="Precios directos"
                title="Tres caminos. Todos empiezan gratis."
                description="La primera clase es de prueba. Si después sigues, eliges ritmo. Sin contratos, sin letras pequeñas."
              />
            </Reveal>

            <Stagger
              as="div"
              className="grid gap-px bg-[var(--border)] md:grid-cols-3"
            >
              {plans.map((plan) => (
                <StaggerItem as="div" key={plan.name}>
                  <PricingCard
                    accent={plan.accent}
                    name={plan.name}
                    price={plan.price}
                    unit={plan.unit}
                    detail={plan.detail}
                    features={plan.features}
                    featured={plan.featured}
                    whatsappUrl={WHATSAPP_URL}
                  />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ============ LOCATION ============ */}
        <section className="section" id="ubicacion">
          <div className="container-pad">
            <Reveal>
              <SectionHeading
                number="07 / Ubicación"
                kicker="Dónde"
                title="Llegas directo. Entrenas en serio."
              />
            </Reveal>

            <Reveal as="div" delay={0.1} className="location-wrap">
              <div className="location-text">
                <div className="flex items-center gap-3 mb-6 text-[var(--brand)]">
                  <MapPinned className="size-5" strokeWidth={2} />
                  <span className="font-mono text-xs uppercase tracking-[0.28em]">
                    Energy Family / HQ
                  </span>
                </div>
                <p className="location-address mb-6">
                  Final de Av.
                  <br />
                  Paseo Caroní,
                  <br />
                  <span className="text-[var(--brand)]">Urb. Paratepuy.</span>
                  <br />
                  Mnza 45 · Casa 01.
                </p>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-md">
                  Acceso directo, estacionamiento en la entrada. Pregunta por el
                  portón gris — el ruido del box se escucha desde la esquina.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={MAPS_APP_URL} target="_blank" rel="noreferrer">
                    <Button asChild>
                      <span>
                        Abrir en Maps
                        <ArrowUpRight />
                      </span>
                    </Button>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    <Button variant="outline" asChild>
                      <span>
                        Pedir info
                        <MessageCircleMore />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              <div className="map-frame">
                <iframe
                  title="Ubicación de Energy Family"
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="final-cta">
          <div className="final-cta-bg" aria-hidden="true" />
          <div className="container-pad relative">
            <Stagger
              as="div"
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
            >
              <StaggerItem as="div">
                <p className="font-mono text-xs uppercase tracking-[0.3em] mb-6">
                  / 08 · Empieza hoy
                </p>
                <h2>
                  Deja de
                  <br />
                  pensarlo.
                </h2>
                <p className="max-w-lg mt-6 text-[#0a0a0a]/80 leading-relaxed">
                  Una clase. Gratis. Hoy. Te escribimos, reservamos el horario
                  y nos vemos en el box.
                </p>
              </StaggerItem>

              <StaggerItem as="div">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <Button variant="inverse" size="lg" asChild>
                    <span>
                      Escribir por WhatsApp
                      <ArrowRight />
                    </span>
                  </Button>
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="footer">
          <div className="container-pad flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="nav-brand-dot" />
              Energy Family · MMXXVI
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#codigo" className="hover:text-[var(--brand)]">
                Código
              </a>
              <a href="#planes" className="hover:text-[var(--brand)]">
                Planes
              </a>
              <a href="#ubicacion" className="hover:text-[var(--brand)]">
                Ubicación
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--brand)]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
