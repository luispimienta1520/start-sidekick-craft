import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  Check,
  ChevronRight,
  Code2,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BUSINESS_WHATSAPP,
  filterServices,
  getWhatsAppUrl,
  serviceAreas,
  serviceCategories,
  services,
} from "@/lib/services";
import guajiraImage from "@/assets/guajira-digital.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistemas y Soluciones LP | Soluciones digitales en Riohacha" },
      {
        name: "description",
        content:
          "Soluciones digitales para educación, comercios, restaurantes, servicios y turismo en La Guajira. Sistemas y Soluciones LP, Riohacha.",
      },
      { property: "og:title", content: "Sistemas y Soluciones LP | Tu negocio, más digital" },
      {
        property: "og:description",
        content:
          "Herramientas educativas y comerciales, páginas web y soluciones para restaurantes, servicios y turismo en La Guajira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = [
  { id: "soluciones", label: "Soluciones" },
  { id: "proceso", label: "Cómo trabajamos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "preguntas", label: "Preguntas" },
];
const faq = [
  [
    "¿Cuál es la mejor solución para mi caso?",
    "Cuéntanos qué te gustaría organizar o mejorar. Puedes explorar las áreas y ver para quién está pensada cada opción; luego definimos contigo un alcance que tenga sentido.",
  ],
  [
    "¿Las soluciones ya están listas para usar?",
    "La página presenta servicios que podemos diseñar y configurar contigo. Antes de empezar revisamos qué funciones son posibles, qué materiales necesitamos y cómo será la entrega.",
  ],
  [
    "¿Cuánto cuesta y qué incluye?",
    "El precio depende del alcance y las funciones acordadas. Antes de comenzar definimos contigo el costo, los entregables y cualquier gasto de alojamiento o herramientas externas.",
  ],
  [
    "¿Mis clientes necesitan instalar una aplicación?",
    "Los catálogos, menús y páginas web se pueden abrir desde un navegador. El acceso a una herramienta de gestión depende de cómo se diseñe y se acuerde para tu proyecto.",
  ],
  [
    "¿Puedo actualizar mis productos, horarios o precios?",
    "Podemos acordar cómo se harán las actualizaciones: por tu cuenta, con acompañamiento o como parte de un servicio de mantenimiento. Lo definimos antes de iniciar.",
  ],
  [
    "¿Cuándo estará lista mi solución?",
    "Acordamos una fecha después de definir el alcance y recibir los materiales necesarios. El tiempo depende de las funciones y revisiones que requiera el proyecto.",
  ],
  [
    "¿El sistema de ventas incluye factura electrónica de la DIAN?",
    "No se debe asumir que una herramienta de ventas incluye facturación electrónica. Si la necesitas, revisaremos por separado los requisitos y una integración compatible antes de ofrecerla.",
  ],
  [
    "¿Cómo se manejan los datos de estudiantes o clientes?",
    "Definimos qué información es realmente necesaria y quién puede acceder. En herramientas educativas se debe tener especial cuidado con los datos de menores; no se deben cargar datos sensibles sin las medidas y autorizaciones correspondientes.",
  ],
];

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);
  const [contact, setContact] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const filtered = filterServices(query, category || "Todos");
  const showResults = category !== "" || query.trim().length > 0;
  const resetDiscovery = () => {
    setCategory("");
    setQuery("");
  };
  const whatsappUrl = getWhatsAppUrl(BUSINESS_WHATSAPP, contact ?? "Soluciones digitales");
  const contactAction = (service: string) => {
    setSelected(null);
    setContact(service);
  };

  return (
    <div id="inicio" className="min-h-screen bg-background">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="page-container flex h-[72px] items-center justify-between gap-4">
          <a
            href="#inicio"
            className="brand flex min-w-0 items-center gap-3"
            aria-label="Sistemas y Soluciones LP, inicio"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-lg font-extrabold text-primary-foreground">
              LP<span className="text-brand-highlight">.</span>
            </span>
            <span className="text-sm font-extrabold leading-tight sm:text-base">
              Sistemas y<br className="sm:hidden" /> Soluciones LP
              <span className="hidden text-[10px] font-medium uppercase text-muted-foreground sm:block">
                Soluciones digitales · La Guajira
              </span>
            </span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => contactAction("Asesoría para mi negocio")}
              className="hidden h-10 rounded-full px-5 sm:inline-flex"
            >
              Hablemos <ArrowRight />
            </Button>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[85%]">
                <SheetTitle className="mt-8">Sistemas y Soluciones LP</SheetTitle>
                <SheetDescription>Riohacha · La Guajira</SheetDescription>
                <nav aria-label="Menú móvil" className="mt-8 flex flex-col gap-1">
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      className="border-b border-border py-4 font-semibold"
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contacto"
                    className="py-4 font-semibold text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main id="contenido">
        <section
          className="hero relative isolate overflow-hidden text-hero-foreground"
          aria-labelledby="hero-title"
        >
          <img
            src={guajiraImage}
            alt="Vista de La Guajira que acompaña la presentación de Sistemas y Soluciones LP"
            width={1920}
            height={1024}
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
          />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="page-container flex min-h-[500px] items-center py-14 md:min-h-[590px] md:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-2 text-xs font-semibold text-hero-muted backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-brand-highlight" /> Desde Riohacha, para toda La
                Guajira
              </div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-highlight">
                Sistemas y Soluciones LP
              </p>
              <h1
                id="hero-title"
                className="max-w-2xl text-balance text-4xl font-bold leading-[1.1] md:text-6xl"
              >
                Tecnología útil para hacer crecer tus ideas.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-hero-muted md:text-lg">
                Creamos soluciones digitales sencillas para negocios, instituciones y proyectos
                locales.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-6">
                  <a href="#soluciones">
                    Encuentra tu solución <ArrowRight />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-hero-foreground/40 bg-transparent px-5 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"
                  onClick={() => contactAction("Asesoría para mi negocio")}
                >
                  Hablemos de tu idea
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-hero-muted">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Atención local
                </span>
                <span className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" /> Hecho para celular y computador
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> Acompañamiento cercano
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="border-b border-border bg-secondary">
          <div className="page-container flex flex-wrap items-center justify-between gap-3 py-5 text-sm">
            <span className="font-semibold">
              Herramientas digitales pensadas para necesidades reales.
            </span>
            <span className="flex items-center gap-2 text-muted-foreground">
              <Code2 className="h-4 w-4 text-primary" /> Educación · Comercio · Turismo
            </span>
          </div>
        </div>

        <section id="soluciones" className="section-space">
          <div className="page-container">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Encuentra lo que necesitas</p>
                <h2 className="section-title mt-3">¿Qué quieres mejorar?</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Elige un área o busca una necesidad concreta. Te mostraremos opciones claras para
                dar el siguiente paso.
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div
                className="category-filters flex flex-wrap gap-1"
                role="group"
                aria-label="Filtrar soluciones por área"
              >
                {serviceCategories.map((item) => (
                  <Button
                    key={item}
                    variant={category === item ? "default" : "ghost"}
                    aria-pressed={category === item}
                    onClick={() => setCategory(item)}
                    className="h-10 rounded-full px-4"
                  >
                    {item}
                  </Button>
                ))}
              </div>
              <div className="relative w-full md:max-w-[310px]">
                <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  aria-label="Buscar una solución"
                  placeholder="Ej.: inventario, citas, página web"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-11 w-full rounded-full border border-input bg-background pl-10 pr-11 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                />
                {query && (
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Limpiar búsqueda"
                    className="absolute right-1 top-1 h-9 w-9 rounded-full"
                    onClick={resetDiscovery}
                  >
                    <X />
                  </Button>
                )}
              </div>
            </div>
            {!showResults && (
              <div className="mt-8">
                <h3 className="text-base font-bold">Explora por área</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Selecciona la que más se parece a lo que quieres resolver.
                </p>
              </div>
            )}
            {showResults ? (
              <>
                <div className="mt-8 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <h3 className="text-sm font-bold">
                    {category === "Todos"
                      ? "Todas las soluciones"
                      : category || "Resultados de búsqueda"}
                  </h3>
                  <p
                    className="text-xs font-medium text-muted-foreground"
                    role="status"
                    aria-live="polite"
                  >
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "opción encontrada" : "opciones encontradas"}
                  </p>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((service) => (
                    <article
                      key={service.id}
                      className="service-card flex min-h-[270px] flex-col rounded-2xl border border-border bg-card p-5 sm:p-6"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                          <service.icon className="h-5 w-5" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                          {service.category}
                        </span>
                      </div>
                      <h4 className="mt-5 text-lg font-bold leading-snug">{service.title}</h4>
                      <p className="mt-1 text-xs font-bold text-primary">{service.subtitle}</p>
                      <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {service.description}
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => setSelected(service)}
                        aria-label={`Ver detalles de ${service.title}`}
                        className="mt-4 h-10 justify-between border-t border-border px-0 pt-3 text-foreground hover:bg-transparent hover:text-primary"
                      >
                        Ver qué incluye <ArrowRight />
                      </Button>
                    </article>
                  ))}
                </div>
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-border py-12 text-center">
                    <Search className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h4 className="mt-4 font-semibold">No encontramos opciones con esa búsqueda</h4>
                    <p className="mx-auto mt-2 max-w-md px-4 text-sm text-muted-foreground">
                      Prueba con otras palabras o limpia los filtros para explorar todas las áreas.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-5 rounded-full"
                      onClick={resetDiscovery}
                    >
                      Limpiar búsqueda y filtros
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area) => {
                  const AreaIcon = area.icon;
                  const count = services.filter((service) => service.category === area.name).length;
                  return (
                    <button
                      key={area.name}
                      type="button"
                      onClick={() => setCategory(area.name)}
                      className="area-card group flex min-h-[150px] flex-col rounded-2xl border border-border bg-card p-5 text-left transition-all hover:border-primary/50 hover:bg-secondary/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                          <AreaIcon className="h-5 w-5" />
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {count} {count === 1 ? "opción" : "opciones"}
                        </span>
                      </span>
                      <span className="mt-4 flex items-center justify-between gap-3 text-base font-bold">
                        {area.name}
                        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1 text-sm leading-5 text-muted-foreground">
                        {area.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section id="proceso" className="section-space border-y border-border bg-secondary/50">
          <div className="page-container">
            <p className="eyebrow">De la idea a la realidad</p>
            <h2 className="section-title mt-3">Sin enredos. Paso a paso.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                [
                  "01",
                  "Escuchamos tu negocio",
                  "Nos cuentas cómo trabajas y qué quieres mejorar. Definimos una solución que tenga sentido para ti.",
                ],
                [
                  "02",
                  "Construimos contigo",
                  "Acordamos alcance, precio y tiempos. Preparamos tu solución y revisamos juntos los detalles.",
                ],
                [
                  "03",
                  "Te acompañamos",
                  "Te mostramos cómo usarla y definimos el apoyo que necesitas para ponerla en marcha.",
                ],
              ].map(([number, title, description]) => (
                <div key={number} className="border-t border-border pt-5">
                  <span className="font-display text-3xl font-bold text-primary/70">
                    {number}
                    <span className="text-primary">.</span>
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="section-space">
          <div className="page-container grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Nuestra esencia</p>
              <h2 className="section-title mt-3">
                La tecnología avanza.
                <br />
                La cercanía se queda.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                Somos Sistemas y Soluciones LP, una iniciativa de Luis Pimienta en Riohacha. Creamos
                herramientas digitales útiles para negocios, educadores y proyectos locales, con
                atención cercana y acuerdos claros.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-primary"
              >
                Conversemos sobre tu idea <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-6">
              {[
                [Users, "Trato cercano", "Hablamos en español claro, sin palabras complicadas."],
                [
                  Smartphone,
                  "Sencillo y práctico",
                  "Pensamos en cómo trabajas, desde el celular o el computador.",
                ],
                [
                  ShieldCheck,
                  "Acuerdos claros",
                  "Definimos qué incluye tu solución antes de empezar.",
                ],
              ].map(([Icon, title, description]) => {
                const FeatureIcon = Icon as typeof Users;
                return (
                  <div key={String(title)} className="flex gap-4 border-b border-border pb-6">
                    <FeatureIcon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-sm font-bold">{String(title)}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {String(description)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="preguntas" className="section-space border-t border-border bg-secondary/40">
          <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="eyebrow">Resolvemos tus dudas</p>
              <h2 className="section-title mt-3">
                Antes de dar
                <br />
                el primer paso.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
                Lo importante, explicado con claridad.
              </p>
            </div>
            <Accordion type="single" collapsible>
              {faq.map(([question, answer], index) => (
                <AccordionItem key={question} value={`faq-${index}`}>
                  <AccordionTrigger className="gap-4 py-5 text-sm font-semibold">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pr-6 leading-7 text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contacto" className="bg-ocean py-14 text-ocean-foreground">
          <div className="page-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase text-brand-highlight">
                Tu próxima buena idea empieza aquí
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">Hablemos de tu negocio.</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-ocean-foreground/75">
                Cuéntanos qué necesitas. Busquemos juntos una solución a tu medida.
              </p>
            </div>
            <Button
              size="lg"
              className="h-12 px-6"
              onClick={() => contactAction("Asesoría para mi negocio")}
            >
              <MessageCircle /> Consultar disponibilidad <ArrowRight />
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-8">
        <div className="page-container">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <span className="text-sm font-extrabold">
                Sistemas y Soluciones LP<span className="text-primary">.</span>
              </span>
              <p className="mt-1 text-xs text-muted-foreground">Riohacha, La Guajira · Colombia</p>
            </div>
            <nav
              aria-label="Enlaces de pie de página"
              className="flex flex-wrap items-center gap-5 text-xs"
            >
              <a href="#soluciones" className="nav-link">
                Soluciones
              </a>
              <a href="#contacto" className="nav-link">
                Contacto
              </a>
              <Button
                variant="link"
                className="min-h-11 p-0 text-xs text-muted-foreground"
                onClick={() => setPrivacyOpen(true)}
              >
                Privacidad
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#inicio" aria-label="Volver arriba" title="Volver arriba">
                  <ArrowUp />
                </a>
              </Button>
            </nav>
          </div>
          <div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
            Tecnología con raíces en La Guajira.
          </div>
        </div>
      </footer>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg p-6 sm:p-8">
          {selected && (
            <>
              <DialogHeader>
                <span className="mb-3 text-xs font-bold uppercase text-primary">
                  {selected.category}
                </span>
                <DialogTitle className="text-2xl leading-tight">{selected.title}</DialogTitle>
                <DialogDescription className="pt-3 leading-6">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-bold">Ideal para</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{selected.audience}</p>
                <h3 className="mt-5 text-sm font-bold">Tu solución puede incluir</h3>
                <ul className="mt-3 space-y-3">
                  {selected.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs leading-6 text-muted-foreground">
                El alcance, el precio y el tiempo de entrega se acuerdan según las necesidades de tu
                negocio.
              </p>
              <Button className="h-11" onClick={() => contactAction(selected.title)}>
                Me interesa esta solución <ChevronRight />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        open={contact !== null}
        onOpenChange={(open) => {
          if (!open) setContact(null);
        }}
      >
        <DialogContent className="w-[calc(100%-2rem)] rounded-2xl p-6 sm:p-7">
          <DialogHeader>
            <MessageCircle className="mb-3 h-8 w-8 text-primary" />
            <DialogTitle className="text-xl">Hablemos de tu proyecto</DialogTitle>
            <DialogDescription className="pt-3 leading-6">Tu interés: {contact}.</DialogDescription>
          </DialogHeader>
          {whatsappUrl ? (
            <Button asChild className="h-12 rounded-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Continuar en WhatsApp <ArrowRight />
              </a>
            </Button>
          ) : (
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold">El canal de atención aún no está configurado.</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Para habilitar las consultas desde esta página, falta agregar el número de WhatsApp
                del negocio. No enviaremos ni guardaremos tus datos mientras tanto.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg p-7">
          <DialogHeader>
            <DialogTitle>Privacidad en esta página</DialogTitle>
            <DialogDescription className="pt-3 leading-6">
              Información sobre tus datos al explorar nuestras soluciones.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-7 text-muted-foreground">
            <p>
              Este catálogo no solicita nombres, teléfonos ni información de pago. La búsqueda y los
              filtros funcionan en tu navegador; no guardamos solicitudes de contacto desde esta
              página.
            </p>
            <p>
              La página carga tipografías de Google Fonts, cuyo proveedor puede recibir datos
              técnicos de conexión. La plataforma de alojamiento puede registrar información técnica
              de uso y errores.
            </p>
            <p>
              Cuando esté disponible el enlace a WhatsApp, abrirlo te llevará a un servicio externo
              sujeto a su propia política de privacidad. Nunca compartas contraseñas ni información
              bancaria por mensajes.
            </p>
            <p>
              Responsable del contenido: Sistemas y Soluciones LP, Riohacha, La Guajira. El canal de
              contacto está pendiente de activación.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
