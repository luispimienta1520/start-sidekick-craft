import { createFileRoute } from "@tanstack/react-router";
import {
  Store,
  UtensilsCrossed,
  Wallet,
  Globe,
  CalendarCheck,
  Receipt,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/573000000000?text=Hola%20Sistemas%20y%20Soluciones%20LP%2C%20quiero%20digitalizar%20mi%20negocio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistemas y Soluciones LP — Tecnología para negocios en Riohacha" },
      {
        name: "description",
        content:
          "Catálogos digitales con pedidos por WhatsApp, menús digitales, sistemas de fiado y páginas web para comercios y micronegocios de Riohacha y La Guajira.",
      },
      { property: "og:title", content: "Sistemas y Soluciones LP — Tecnología para negocios en Riohacha" },
      {
        property: "og:description",
        content:
          "Digitalizamos tu negocio: catálogo digital con pedidos por WhatsApp, menú digital, control de fiado y más.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Store,
    title: "Catálogo digital con pedidos por WhatsApp",
    description:
      "Tu tienda abierta 24/7: tus clientes ven tus productos con fotos y precios, y te piden directo a tu WhatsApp. Sin comisiones por venta.",
    tag: "El más pedido",
  },
  {
    icon: UtensilsCrossed,
    title: "Menú digital para restaurantes",
    description:
      "Carta con código QR, fotos apetitosas y pedidos directos. Ideal para restaurantes, asaderos y comida rápida.",
  },
  {
    icon: Wallet,
    title: "Sistema de fiado y cartera",
    description:
      "Registra quién te debe, cuánto y desde cuándo. Recordatorios automáticos para cobrar sin pelear con el cuaderno.",
  },
  {
    icon: Globe,
    title: "Página web profesional",
    description:
      "Presencia seria en internet para hoteles, hostales, clínicas y empresas. Aparece en Google cuando te buscan.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda de citas",
    description:
      "Para barberías, spas y consultorios: tus clientes reservan solos y reciben recordatorios. Menos citas perdidas.",
  },
  {
    icon: Receipt,
    title: "Facturación e inventario simple",
    description:
      "Controla lo que entra y sale de tu negocio desde el celular, sin enredos contables.",
  },
];

const steps = [
  {
    number: "1",
    title: "Nos cuentas tu negocio",
    description: "Hablamos por WhatsApp o en persona sobre qué necesitas.",
  },
  {
    number: "2",
    title: "Construimos tu solución",
    description: "En días, no meses, tienes tu sistema listo y funcionando.",
  },
  {
    number: "3",
    title: "Te acompañamos",
    description: "Te enseñamos a usarlo y estamos contigo cuando lo necesites.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
              LP
            </div>
            <span className="text-lg font-bold tracking-tight">
              Sistemas y Soluciones LP
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Escríbenos
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <MapPin className="h-4 w-4" />
            Riohacha, La Guajira
          </div>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Tu negocio merece vender{" "}
            <span className="text-primary">también por internet</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Creamos catálogos digitales, menús, sistemas de fiado y páginas web
            para comercios y micronegocios de La Guajira. Tecnología sencilla,
            a tu medida y en tu idioma.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Quiero digitalizar mi negocio
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 px-8 py-4 text-base font-semibold transition-colors hover:bg-secondary"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="bg-ocean py-20 text-ocean-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Lo que podemos construir para ti
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ocean-foreground/70">
            Soluciones pensadas para el comercio real de Riohacha: fáciles de
            usar, fáciles de pagar.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative rounded-2xl bg-card p-6 text-card-foreground shadow-lg transition-transform hover:-translate-y-1"
              >
                {service.tag && (
                  <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {service.tag}
                  </span>
                )}
                <div className="mb-4 inline-flex rounded-xl bg-secondary p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Así de fácil es empezar
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-extrabold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué nosotros */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Hecho en La Guajira, para La Guajira
          </h2>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            {[
              "Atención en persona y en español claro, sin tecnicismos",
              "Precios pensados para micronegocios: pagos mensuales accesibles",
              "Tu sistema listo en días, no en meses",
              "Te enseñamos a usarlo paso a paso",
              "Sin comisiones escondidas por venta",
              "Soporte local: estamos aquí cuando nos necesites",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
            Hablemos de tu negocio hoy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Escríbenos por WhatsApp y te contamos sin compromiso cómo podemos
            ayudarte a vender más.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Escribir por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Sistemas y Soluciones LP
          </span>
          <span>Riohacha, La Guajira — Colombia</span>
        </div>
      </footer>
    </div>
  );
}
