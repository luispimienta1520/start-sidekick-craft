import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUp, Check, ChevronRight, Code2, MapPin, Menu, MessageCircle, Search, ShieldCheck, Smartphone, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_WHATSAPP, filterServices, getWhatsAppUrl, serviceCategories, services } from "@/lib/services";
import guajiraImage from "@/assets/guajira-digital.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sistemas y Soluciones LP | Soluciones digitales en Riohacha" },
    { name: "description", content: "Explora catálogos con pedidos por WhatsApp, menús QR, páginas web y herramientas para tu negocio. Sistemas y Soluciones LP, Riohacha, La Guajira." },
    { property: "og:title", content: "Sistemas y Soluciones LP | Tu negocio, más digital" },
    { property: "og:description", content: "Soluciones digitales para comercios y micronegocios de La Guajira. Encuentra la opción que necesita tu negocio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const navigation = [{ id: "servicios", label: "Soluciones" }, { id: "proceso", label: "Cómo trabajamos" }, { id: "nosotros", label: "Nosotros" }, { id: "preguntas", label: "Preguntas" }];
const faq = [
  ["¿Cuál es la mejor solución para mi negocio?", "Si vendes productos, empieza por un catálogo digital. Si tienes un restaurante, un menú QR; si atiendes por turnos, una agenda de citas. En cada solución puedes consultar para quién está pensada y qué puede incluir."],
  ["¿Cuánto cuesta y qué incluye?", "El precio depende del alcance, la cantidad de productos y las funciones que necesites. No publicamos una tarifa única: primero definimos contigo la solución, sus costos y lo que incluye."],
  ["¿Mis clientes necesitan instalar una aplicación?", "Para consultar un catálogo, menú o página web, no: pueden abrir el enlace desde su navegador. Los pedidos por WhatsApp se completan a través de ese servicio."],
  ["¿Puedo actualizar mis productos y precios?", "Podemos incluir una opción para que administres productos y precios. El acceso de administración y el acompañamiento se definen antes de comenzar."],
  ["¿Cuándo estará lista mi solución?", "Acordamos una fecha después de conocer tus necesidades y recibir los materiales. El tiempo cambia según la complejidad; no prometemos un plazo sin revisar tu proyecto."],
  ["¿La facturación incluye factura electrónica de la DIAN?", "El servicio de ventas e inventario no supone una habilitación de factura electrónica ante la DIAN. Si necesitas esa función, debemos revisar por separado sus requisitos e integración."],
];

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);
  const [contact, setContact] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const filtered = filterServices(query, category);
  const whatsappUrl = getWhatsAppUrl(BUSINESS_WHATSAPP, contact ?? "Soluciones digitales");
  const contactAction = (service: string) => { setSelected(null); setContact(service); };

  return (
    <div id="inicio" className="min-h-screen bg-background">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="page-container flex h-20 items-center justify-between gap-4">
          <a href="#inicio" className="brand flex min-w-0 items-center gap-3" aria-label="Sistemas y Soluciones LP, inicio">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-lg font-extrabold text-primary-foreground">LP<span className="text-brand-highlight">.</span></span>
            <span className="text-sm font-extrabold leading-tight sm:text-base">Sistemas y<br className="sm:hidden" /> Soluciones LP<span className="hidden text-[10px] font-medium uppercase text-muted-foreground sm:block">Soluciones digitales · La Guajira</span></span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
            {navigation.map(item => <a key={item.id} href={`#${item.id}`} className="nav-link">{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => contactAction("Asesoría para mi negocio")} className="hidden h-10 sm:inline-flex">Hablemos <ArrowRight /></Button>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menú"><Menu /></Button></SheetTrigger>
              <SheetContent className="w-[85%]">
                <SheetTitle className="mt-8">Sistemas y Soluciones LP</SheetTitle><SheetDescription>Riohacha · La Guajira</SheetDescription>
                <nav aria-label="Menú móvil" className="mt-8 flex flex-col gap-1">{navigation.map(item => <a key={item.id} className="border-b border-border py-4 font-semibold" href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<a href="#contacto" className="py-4 font-semibold text-primary" onClick={() => setMenuOpen(false)}>Contacto</a></nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main id="contenido">
        <section className="hero relative isolate overflow-hidden text-hero-foreground" aria-labelledby="hero-title">
          <img src={guajiraImage} alt="Mar Caribe y playa de La Guajira, con un computador y un celular mostrando un catálogo digital" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="page-container py-14 md:py-20">
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase text-hero-muted"><MapPin className="h-4 w-4" /> Desde Riohacha, para tu negocio</div>
            <h1 id="hero-title" className="max-w-xl text-4xl font-bold leading-[1.16] md:text-5xl">Sistemas y<br />Soluciones LP<span className="text-brand-highlight">.</span></h1>
            <p className="mt-5 max-w-md text-xl font-medium md:text-2xl">Tu negocio local.<br /><span className="text-hero-muted">Su próxima versión, digital.</span></p>
            <p className="mt-4 max-w-md text-sm leading-7 text-hero-muted md:text-base">Catálogos, páginas web y herramientas que hacen más sencillo vender, organizar y crecer en La Guajira.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6"><a href="#servicios">Explorar soluciones <ArrowRight /></a></Button>
              <Button variant="outline" className="h-12 border-hero-foreground/40 bg-transparent px-5 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground" onClick={() => contactAction("Asesoría para mi negocio")}>Hablemos de tu negocio</Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-hero-muted"><span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Atención local</span><span className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> Pensado para tu celular</span><span className="flex items-center gap-2"><Users className="h-4 w-4" /> Acompañamiento cercano</span></div>
          </div>
          <div className="hero-caption absolute bottom-5 right-8 hidden items-center gap-2 text-[10px] text-hero-foreground/80 lg:flex"><span className="h-px w-7 bg-hero-foreground/60" /> Tecnología con raíces en La Guajira</div>
        </section>
        <div className="border-b border-border bg-secondary">
          <div className="page-container flex flex-wrap items-center justify-between gap-3 py-5 text-sm"><span className="font-semibold">Grandes ideas para negocios de todos los tamaños.</span><span className="flex items-center gap-2 text-muted-foreground"><Code2 className="h-4 w-4 text-primary" /> Comercio · Gastronomía · Servicios</span></div>
        </div>

        <section id="servicios" className="section-space">
          <div className="page-container">
            <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Nuestras soluciones</p><h2 className="section-title mt-3">Encuentra lo que tu negocio necesita.</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">Herramientas prácticas, una imagen profesional y menos complicaciones.</p></div>
            <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="flex flex-wrap gap-1" role="group" aria-label="Filtrar por tipo de negocio">{serviceCategories.map(item => <Button key={item} variant={category === item ? "default" : "ghost"} aria-pressed={category === item} onClick={() => setCategory(item)} className="h-10 px-4">{item}</Button>)}</div>
              <div className="relative md:w-72"><Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><input type="search" aria-label="Buscar una solución" placeholder="Buscar una solución…" value={query} onChange={event => setQuery(event.target.value)} className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring" />{query && <Button variant="ghost" size="icon" aria-label="Limpiar búsqueda" className="absolute right-1 top-0.5 h-9 w-9" onClick={() => setQuery("")}><X /></Button>}</div>
            </div>
            <p className="sr-only" role="status">{filtered.length} soluciones encontradas</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(service => <article key={service.id} className={`service-card flex flex-col rounded-lg border p-6 ${service.id === "catalogo" ? "border-primary/40 bg-secondary/60" : "border-border bg-card"}`}>
              <div className="flex items-center justify-between gap-2"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-accent text-primary"><service.icon className="h-6 w-6" /></span>{service.tag && <span className="text-[10px] font-bold uppercase text-primary">{service.tag}</span>}</div>
              <h3 className="mt-5 text-lg font-bold">{service.title}</h3><p className="mt-1 text-xs font-semibold text-primary">{service.subtitle}</p><p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
              <Button variant="ghost" onClick={() => setSelected(service)} aria-label={`Ver detalles de ${service.title}`} className="mt-5 h-10 justify-between border-t border-border px-0 text-foreground hover:bg-transparent hover:text-primary">Conocer la solución <ArrowRight /></Button>
            </article>)}</div>
            {filtered.length === 0 && <div className="py-12 text-center"><Search className="mx-auto h-8 w-8 text-muted-foreground" /><h3 className="mt-4 font-semibold">No encontramos esa solución</h3><p className="mt-2 text-sm text-muted-foreground">Prueba con otra palabra o consulta todas las opciones.</p><Button variant="outline" className="mt-5" onClick={() => { setQuery(""); setCategory("Todos"); }}>Ver todas las soluciones</Button></div>}
          </div>
        </section>

        <section id="proceso" className="section-space border-y border-border bg-secondary/50"><div className="page-container"><p className="eyebrow">De la idea a la realidad</p><h2 className="section-title mt-3">Sin enredos. Paso a paso.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[
          ["01", "Escuchamos tu negocio", "Nos cuentas cómo trabajas y qué quieres mejorar. Definimos una solución que tenga sentido para ti."],
          ["02", "Construimos contigo", "Acordamos alcance, precio y tiempos. Preparamos tu solución y revisamos juntos los detalles."],
          ["03", "Te acompañamos", "Te mostramos cómo usarla y definimos el apoyo que necesitas para ponerla en marcha."],
        ].map(([number, title, description]) => <div key={number} className="border-t border-border pt-5"><span className="font-display text-3xl font-bold text-primary/70">{number}<span className="text-primary">.</span></span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground">{description}</p></div>)}</div></div></section>

        <section id="nosotros" className="section-space"><div className="page-container grid items-center gap-10 md:grid-cols-2"><div><p className="eyebrow">Nuestra esencia</p><h2 className="section-title mt-3">La tecnología avanza.<br />La cercanía se queda.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">Somos Sistemas y Soluciones LP, una iniciativa de Luis Pimienta en Riohacha. Creemos que los comercios de La Guajira merecen herramientas digitales útiles y una atención que hable su mismo idioma.</p><a href="#contacto" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Conversemos sobre tu idea <ArrowRight className="h-4 w-4" /></a></div><div className="grid gap-6">{[[Users, "Trato cercano", "Hablamos en español claro, sin palabras complicadas."], [Smartphone, "Sencillo y práctico", "Pensamos en cómo trabajas, también desde el celular."], [ShieldCheck, "Acuerdos claros", "Definimos qué incluye tu solución antes de empezar."]].map(([Icon, title, description]) => { const FeatureIcon = Icon as typeof Users; return <div key={String(title)} className="flex gap-4 border-b border-border pb-6"><FeatureIcon className="mt-1 h-6 w-6 shrink-0 text-primary" /><div><h3 className="text-sm font-bold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(description)}</p></div></div>; })}</div></div></section>

        <section id="preguntas" className="section-space border-t border-border bg-secondary/40"><div className="page-container grid gap-10 lg:grid-cols-[1fr_1.5fr]"><div><p className="eyebrow">Resolvemos tus dudas</p><h2 className="section-title mt-3">Antes de dar<br />el primer paso.</h2><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">Lo importante, explicado con claridad.</p></div><Accordion type="single" collapsible>{faq.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="gap-4 py-5 text-sm font-semibold">{question}</AccordionTrigger><AccordionContent className="pr-6 leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section id="contacto" className="bg-ocean py-14 text-ocean-foreground"><div className="page-container flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase text-brand-highlight">Tu próxima buena idea empieza aquí</p><h2 className="mt-3 text-2xl font-bold md:text-3xl">Hablemos de tu negocio.</h2><p className="mt-3 max-w-lg text-sm leading-6 text-ocean-foreground/75">Cuéntanos qué necesitas. Busquemos juntos una solución a tu medida.</p></div><Button size="lg" className="h-12 px-6" onClick={() => contactAction("Asesoría para mi negocio")}><MessageCircle /> Consultar disponibilidad <ArrowRight /></Button></div></section>
      </main>
      <footer className="border-t border-border py-8"><div className="page-container"><div className="flex flex-wrap items-center justify-between gap-5"><div><span className="text-sm font-extrabold">Sistemas y Soluciones LP<span className="text-primary">.</span></span><p className="mt-1 text-xs text-muted-foreground">Riohacha, La Guajira · Colombia</p></div><nav aria-label="Enlaces de pie de página" className="flex flex-wrap items-center gap-5 text-xs"><a href="#servicios" className="nav-link">Soluciones</a><a href="#contacto" className="nav-link">Contacto</a><Button variant="link" className="h-auto p-0 text-xs text-muted-foreground" onClick={() => setPrivacyOpen(true)}>Privacidad</Button><Button asChild variant="ghost" size="icon"><a href="#inicio" aria-label="Volver arriba" title="Volver arriba"><ArrowUp /></a></Button></nav></div><div className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">Tecnología con raíces en La Guajira.</div></div></footer>

      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg p-6 sm:p-8">{selected && <><DialogHeader><span className="mb-3 text-xs font-bold uppercase text-primary">{selected.category}</span><DialogTitle className="text-2xl leading-tight">{selected.title}</DialogTitle><DialogDescription className="pt-3 leading-6">{selected.description}</DialogDescription></DialogHeader><div className="border-t border-border pt-4"><h3 className="text-sm font-bold">Ideal para</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{selected.audience}</p><h3 className="mt-5 text-sm font-bold">Tu solución puede incluir</h3><ul className="mt-3 space-y-3">{selected.features.map(feature => <li key={feature} className="flex gap-3 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul></div><p className="text-xs leading-6 text-muted-foreground">El alcance, el precio y el tiempo de entrega se acuerdan según las necesidades de tu negocio.</p><Button className="h-11" onClick={() => contactAction(selected.title)}>Me interesa esta solución <ChevronRight /></Button></>}</DialogContent></Dialog>
      <Dialog open={contact !== null} onOpenChange={open => { if (!open) setContact(null); }}><DialogContent className="w-[calc(100%-2rem)] rounded-lg p-7"><DialogHeader><MessageCircle className="mb-3 h-8 w-8 text-primary" /><DialogTitle className="text-xl">Hablemos de tu proyecto</DialogTitle><DialogDescription className="pt-3 leading-6">Tu interés: {contact}.</DialogDescription></DialogHeader>{whatsappUrl ? <Button asChild className="h-11"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Continuar en WhatsApp <ArrowRight /></a></Button> : <div className="border-t border-border pt-4"><p className="text-sm font-semibold">Nuestro contacto estará disponible pronto.</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Estamos preparando el canal de atención por WhatsApp. Por ahora no recibimos solicitudes desde esta página.</p></div>}</DialogContent></Dialog>
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}><DialogContent className="max-h-[85dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg p-7"><DialogHeader><DialogTitle>Privacidad en esta página</DialogTitle><DialogDescription className="pt-3 leading-6">Información sobre tus datos al explorar nuestras soluciones.</DialogDescription></DialogHeader><div className="space-y-4 text-sm leading-7 text-muted-foreground"><p>Este catálogo no solicita nombres, teléfonos ni información de pago. La búsqueda y los filtros funcionan en tu navegador; no guardamos solicitudes de contacto desde esta página.</p><p>La página carga tipografías de Google Fonts, cuyo proveedor puede recibir datos técnicos de conexión. La plataforma de alojamiento puede registrar información técnica de uso y errores.</p><p>Cuando esté disponible el enlace a WhatsApp, abrirlo te llevará a un servicio externo sujeto a su propia política de privacidad. Nunca compartas contraseñas ni información bancaria por mensajes.</p><p>Responsable del contenido: Sistemas y Soluciones LP, Riohacha, La Guajira. El canal de contacto está pendiente de activación.</p></div></DialogContent></Dialog>
    </div>
  );
}
