import { Store, UtensilsCrossed, Wallet, Globe, CalendarCheck, Receipt } from "lucide-react";

export const serviceCategories = ["Todos", "Comercio", "Restaurantes", "Servicios"] as const;
export const services = [
  { id: "catalogo", icon: Store, category: "Comercio", title: "Catálogo digital", subtitle: "Tus productos. Su próximo pedido.", description: "Fotos, precios y pedidos directos a tu WhatsApp. Una vitrina digital para tu negocio.", audience: "Tiendas de ropa, ferreterías, droguerías y emprendimientos.", features: ["Productos organizados por categorías", "Fotos, descripciones y precios", "Selección de productos para pedir por WhatsApp", "Enlace para compartir en redes sociales"], tag: "Nuestra especialidad" },
  { id: "menu", icon: UtensilsCrossed, category: "Restaurantes", title: "Menú digital con QR", subtitle: "Una carta que abre el apetito.", description: "Tu menú siempre a mano, con fotos, categorías y acceso desde un código QR.", audience: "Restaurantes, asaderos, cafeterías y negocios de comida rápida.", features: ["Carta organizada por categorías", "Fotos y precios de tus platos", "Código QR para tus mesas", "Pedidos a través de WhatsApp"] },
  { id: "fiado", icon: Wallet, category: "Comercio", title: "Control de fiado y cartera", subtitle: "Cuentas claras, sin cuadernos.", description: "Organiza los saldos de tus clientes, sus abonos y el historial de cada cuenta.", audience: "Tiendas de barrio y comercios que venden a crédito.", features: ["Registro de clientes y saldos", "Historial de compras y abonos", "Consulta de cuentas pendientes", "Resumen de tu cartera"] },
  { id: "web", icon: Globe, category: "Servicios", title: "Página web profesional", subtitle: "Una presencia a tu altura.", description: "Presenta tu negocio con claridad y ofrece a tus clientes una forma sencilla de encontrarte.", audience: "Hoteles, hostales, profesionales y empresas locales.", features: ["Diseño adaptado a tu marca", "Servicios y datos de contacto", "Presentación en celulares y computadores", "Información preparada para buscadores"] },
  { id: "citas", icon: CalendarCheck, category: "Servicios", title: "Agenda de citas", subtitle: "Más orden en cada jornada.", description: "Organiza reservas y horarios para atender a tus clientes sin cruces de citas.", audience: "Barberías, salones de belleza, spas y consultorios.", features: ["Servicios y horarios disponibles", "Registro de reservas", "Consulta de citas por fecha", "Gestión de disponibilidad"] },
  { id: "inventario", icon: Receipt, category: "Comercio", title: "Ventas e inventario", subtitle: "Tu negocio, bajo control.", description: "Consulta tus productos, registra ventas y conoce lo que entra y sale de tu negocio.", audience: "Micronegocios y comercios que necesitan organizar sus ventas.", features: ["Registro de productos y existencias", "Movimientos de inventario", "Registro de ventas", "Resumen de actividad" ] },
];

export function filterServices(query: string, category: string) {
  const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const term = normalize(query);
  return services.filter(service => (category === "Todos" || service.category === category) && normalize(`${service.title} ${service.description} ${service.audience}`).includes(term));
}

// Keep unset until Luis provides his actual business number; never route customers to example numbers.
export const BUSINESS_WHATSAPP: string | null = null;
export function getWhatsAppUrl(number: string | null, service: string) {
  if (!number || !/^\d{10,15}$/.test(number) || number === "573000000000") return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(`Hola, Sistemas y Soluciones LP. Me interesa: ${service}. Quisiera conocer las opciones para mi negocio.`)}`;
}