import {
  Store,
  UtensilsCrossed,
  Wallet,
  Globe,
  CalendarCheck,
  Receipt,
  GraduationCap,
  ClipboardCheck,
  BedDouble,
  MapPinned,
  Wrench,
  FileText,
  QrCode,
  Share2,
  Truck,
  Bot,
} from "lucide-react";

export const serviceCategories = [
  "Todos",
  "Educación",
  "Comercios",
  "Restaurantes",
  "Servicios",
  "Turismo",
  "Presencia digital",
] as const;

export const serviceAreas = [
  {
    name: "Educación",
    icon: GraduationCap,
    description: "Herramientas para docentes, academias e instituciones educativas.",
  },
  {
    name: "Comercios",
    icon: Store,
    description: "Inventario, ventas, caja, catálogos y control del día a día.",
  },
  {
    name: "Restaurantes",
    icon: UtensilsCrossed,
    description: "Menús digitales, códigos QR y pedidos más sencillos.",
  },
  {
    name: "Servicios",
    icon: Wrench,
    description: "Citas, reparaciones, cotizaciones y seguimiento de clientes.",
  },
  {
    name: "Turismo",
    icon: MapPinned,
    description: "Reservas, experiencias y promoción de servicios locales.",
  },
  {
    name: "Presencia digital",
    icon: Globe,
    description: "Páginas web, contenido para redes y asistentes informativos.",
  },
] as const;

export const services = [
  {
    id: "inventario",
    icon: Receipt,
    category: "Comercios",
    title: "Ventas e inventario",
    subtitle: "Tu negocio, bajo control.",
    description:
      "Organiza productos, existencias y ventas para consultar con más facilidad los movimientos de tu negocio.",
    audience: "Tiendas de barrio, boutiques, ferreterías, papelerías y micronegocios.",
    features: [
      "Registro de productos y precios",
      "Entradas y salidas de inventario",
      "Registro de ventas",
      "Avisos de pocas existencias y resúmenes, según el alcance acordado",
    ],
    tag: "Solución para micronegocios",
  },
  {
    id: "menu",
    icon: UtensilsCrossed,
    category: "Restaurantes",
    title: "Menú digital con QR",
    subtitle: "Una carta que abre el apetito.",
    description:
      "Presenta tus platos con fotos, categorías y precios. Tus clientes pueden abrir el menú desde un código QR y preparar su pedido para WhatsApp.",
    audience: "Restaurantes, comidas rápidas, cafeterías, reposterías y negocios de almuerzos.",
    features: [
      "Carta organizada por categorías",
      "Fotos y precios de tus productos",
      "Código QR para compartir o poner en las mesas",
      "Enlace para continuar el pedido por WhatsApp",
    ],
  },
  {
    id: "alojamientos",
    icon: BedDouble,
    category: "Turismo",
    title: "Reservas para alojamientos",
    subtitle: "Más claridad en cada reserva.",
    description:
      "Una herramienta sencilla para organizar habitaciones, fechas, anticipos y ocupación de alojamientos pequeños.",
    audience: "Hostales, posadas y hoteles pequeños.",
    features: [
      "Calendario de habitaciones",
      "Registro de reservas y fechas",
      "Control básico de anticipos",
      "Consulta de ocupación",
    ],
  },
  {
    id: "catalogo",
    icon: Store,
    category: "Comercios",
    title: "Catálogo digital",
    subtitle: "Tus productos. Su próximo pedido.",
    description:
      "Una vitrina digital con fotos, precios y disponibilidad para compartir tus productos y recibir consultas por WhatsApp.",
    audience:
      "Artesanos, tiendas de ropa, vendedores de mochilas, accesorios, calzado y productos locales.",
    features: [
      "Productos organizados por categorías",
      "Fotos, descripciones y precios",
      "Enlace para compartir productos",
      "Contacto directo por WhatsApp",
    ],
    tag: "Nuestra especialidad",
  },
  {
    id: "citas",
    icon: CalendarCheck,
    category: "Servicios",
    title: "Agenda de citas",
    subtitle: "Más orden en cada jornada.",
    description:
      "Organiza horarios, reservas y datos básicos de clientes para reducir cruces y tener clara tu jornada.",
    audience: "Barberías, peluquerías, salones de belleza y profesionales independientes.",
    features: [
      "Servicios y horarios disponibles",
      "Registro de clientes y reservas",
      "Consulta de citas por fecha",
      "Recordatorios, si se acuerda una integración compatible",
    ],
  },
  {
    id: "academico",
    icon: GraduationCap,
    category: "Educación",
    title: "Gestión académica básica",
    subtitle: "Organiza grupos y seguimiento.",
    description:
      "Herramientas para ordenar matrículas, asistencia o notas de acuerdo con las necesidades de una institución pequeña.",
    audience: "Academias, centros de capacitación, escuelas deportivas y pequeños colegios.",
    features: [
      "Registro básico de cursos y grupos",
      "Asistencia y seguimiento",
      "Notas o reportes sencillos",
      "Alcance definido con cuidado para proteger los datos de estudiantes",
    ],
  },
  {
    id: "web",
    icon: Globe,
    category: "Presencia digital",
    title: "Página web profesional",
    subtitle: "Una presencia a tu altura.",
    description:
      "Presenta tu negocio, tus servicios y tus canales de contacto en una página clara que funciona en celulares y computadores.",
    audience: "Comercios, profesionales, instituciones, alojamientos y prestadores turísticos.",
    features: [
      "Diseño adaptado a tu marca",
      "Servicios e información de contacto",
      "Diseño adaptable a celulares y computadores",
      "Contenido preparado para buscadores",
    ],
  },
  {
    id: "caja",
    icon: Wallet,
    category: "Comercios",
    title: "Caja, gastos y ganancias",
    subtitle: "Entiende mejor tus cuentas.",
    description:
      "Registra ingresos, gastos y cuentas pendientes para consultar cierres diarios y resúmenes del negocio.",
    audience: "Vendedores independientes, tiendas, restaurantes y emprendimientos familiares.",
    features: [
      "Registro de ingresos y gastos",
      "Cuentas por cobrar y deudas pendientes",
      "Cierre diario",
      "Resumen mensual básico",
    ],
  },
  {
    id: "fiado",
    icon: Wallet,
    category: "Comercios",
    title: "Control de fiado y cartera",
    subtitle: "Cuentas claras, sin cuadernos.",
    description: "Organiza los saldos de tus clientes, sus abonos y el historial de cada cuenta.",
    audience: "Tiendas de barrio y comercios que venden a crédito.",
    features: [
      "Registro de clientes y saldos",
      "Historial de compras y abonos",
      "Consulta de cuentas pendientes",
      "Resumen de cartera",
    ],
  },
  {
    id: "reparaciones",
    icon: Wrench,
    category: "Servicios",
    title: "Órdenes de trabajo y reparaciones",
    subtitle: "Cada servicio, con su seguimiento.",
    description:
      "Registra qué equipo recibiste, el diagnóstico, presupuesto y estado de cada reparación.",
    audience:
      "Talleres de motos y servicios de reparación de celulares, computadores o electrodomésticos.",
    features: [
      "Datos básicos del cliente y equipo",
      "Diagnóstico y presupuesto",
      "Estado de la reparación",
      "Repuestos y fecha estimada de entrega",
    ],
  },
  {
    id: "cotizador",
    icon: FileText,
    category: "Servicios",
    title: "Cotizaciones en PDF",
    subtitle: "Presupuestos listos para compartir.",
    description:
      "Calcula materiales, cantidades y mano de obra para preparar cotizaciones con la imagen de tu negocio.",
    audience: "Técnicos, instaladores, electricistas, talleres, imprentas y contratistas.",
    features: [
      "Registro de conceptos y cantidades",
      "Cálculo de costos y mano de obra",
      "Logo y datos del negocio",
      "Documento PDF para compartir",
    ],
  },
  {
    id: "talleres",
    icon: ClipboardCheck,
    category: "Educación",
    title: "Talleres y evaluaciones interactivas",
    subtitle: "Aprender practicando.",
    description:
      "Actividades visuales, cuestionarios y ejercicios con retroalimentación para cursos y procesos de formación.",
    audience: "Docentes, academias, escuelas deportivas y centros de capacitación.",
    features: [
      "Cuestionarios y ejercicios",
      "Retroalimentación para cada actividad",
      "Material ajustado al curso",
      "Reportes sencillos, si se requieren",
    ],
  },
  {
    id: "turismo",
    icon: MapPinned,
    category: "Turismo",
    title: "Catálogo turístico de La Guajira",
    subtitle: "Experiencias locales fáciles de descubrir.",
    description:
      "Presenta experiencias, precios, fotos y contactos de prestadores turísticos en un catálogo digital organizado.",
    audience: "Guías, operadores, transportadores y prestadores de experiencias turísticas.",
    features: [
      "Fichas de experiencias y servicios",
      "Fotos, precios y ubicación",
      "Datos de contacto",
      "Solicitudes directas al prestador",
    ],
  },
  {
    id: "qr-etiquetas",
    icon: QrCode,
    category: "Comercios",
    title: "Códigos QR y etiquetas",
    subtitle: "Conecta lo impreso con lo digital.",
    description:
      "Prepara códigos QR y etiquetas que enlazan a un catálogo, menú, producto o formulario del negocio.",
    audience: "Tiendas, restaurantes, emprendimientos, ferias y organizadores de eventos.",
    features: [
      "Códigos QR para enlaces elegidos",
      "Etiquetas listas para imprimir",
      "Acceso a catálogo, menú o formularios",
      "Organización de los enlaces generados",
    ],
  },
  {
    id: "contenido-redes",
    icon: Share2,
    category: "Presencia digital",
    title: "Contenido para redes sociales",
    subtitle: "Ideas y publicaciones para tu negocio.",
    description:
      "Apoyo para preparar textos promocionales, ideas de publicaciones y calendarios de contenido adaptados a tu marca.",
    audience: "Restaurantes, tiendas, emprendimientos y profesionales.",
    features: [
      "Ideas para publicaciones",
      "Textos promocionales",
      "Calendario básico de contenidos",
      "Piezas visuales según el paquete acordado",
    ],
  },
  {
    id: "distribuidores",
    icon: Truck,
    category: "Comercios",
    title: "Pedidos para vendedores y distribuidores",
    subtitle: "Clientes, pedidos y pagos en un solo lugar.",
    description:
      "Registra clientes, pedidos, productos y pagos pendientes para organizar las visitas de venta.",
    audience: "Distribuidores y vendedores de alimentos, bebidas, aseo y otros productos.",
    features: [
      "Registro de clientes y pedidos",
      "Productos vendidos y cantidades",
      "Pagos pendientes",
      "Rutas o visitas, según el alcance",
    ],
  },
  {
    id: "asistente-ia",
    icon: Bot,
    category: "Presencia digital",
    title: "Asistente para preguntas frecuentes",
    subtitle: "Respuestas claras para tus clientes.",
    description:
      "Un asistente puede orientar sobre horarios, ubicación o información del catálogo y derivar consultas a una persona, según las integraciones disponibles.",
    audience: "Negocios que reciben preguntas repetidas por su página o canales digitales.",
    features: [
      "Respuestas basadas en información aprobada por el negocio",
      "Acceso a datos básicos de servicios o productos",
      "Derivación a una persona cuando haga falta",
      "Integraciones y costos revisados antes de ofrecer automatización",
    ],
  },
];

export function filterServices(query: string, category: string) {
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  const term = normalize(query);
  return services.filter(
    (service) =>
      (category === "Todos" || service.category === category) &&
      normalize(
        `${service.category} ${service.title} ${service.subtitle} ${service.description} ${service.audience} ${service.features.join(" ")}`,
      ).includes(term),
  );
}

// Keep unset until Luis provides his actual business number; never route customers to example numbers.
export const BUSINESS_WHATSAPP: string | null = null;
export function getWhatsAppUrl(number: string | null, service: string) {
  if (!number || !/^\d{10,15}$/.test(number) || number === "573000000000") return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(`Hola, Sistemas y Soluciones LP. Me interesa: ${service}. Quisiera conocer las opciones para mi negocio.`)}`;
}
