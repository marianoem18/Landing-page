export type ServiceGroup = {
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Automatización de procesos',
    description: 'Conecto tus herramientas para que el trabajo repetitivo se resuelva solo.',
    items: ['WhatsApp', 'Emails', 'Google Sheets', 'Formularios', 'Reportes', 'Integraciones'],
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Asistentes que atienden, responden y acompañan a tu equipo en tiempo real.',
    items: ['Chatbots IA', 'Agentes IA', 'Atención automática', 'IA para empleados', 'Automatización inteligente'],
  },
  {
    title: 'Desarrollo web',
    description: 'Sitios rápidos y sistemas a medida que representan bien a tu negocio.',
    items: ['Landing pages', 'Sitios institucionales', 'Tiendas online', 'Sistemas web', 'Sistemas personalizados'],
  },
  {
    title: 'Sistemas y paneles',
    description: 'Gestioná stock, ventas y clientes desde un solo lugar, sin vueltas.',
    items: ['Stock', 'Ventas', 'Clientes', 'Turnos', 'Inventario', 'Paneles administrativos'],
  },
  {
    title: 'Integraciones',
    description: 'Todo tu ecosistema digital hablando entre sí, sin cargar datos a mano.',
    items: ['WhatsApp', 'Telegram', 'Gmail', 'Google Calendar', 'Mercado Pago', 'Stripe', 'Agenda de clientes', 'Sistemas existentes'],
  },
];

export const industries: string[] = [
  'Restaurante',
  'Gimnasio',
  'Barbería',
  'Tienda',
  'Consultorio',
  'Veterinaria',
  'Inmobiliaria',
  'Hotel',
  'Colegio',
  'Club',
  'Taller',
  'Ferretería',
  'Farmacia',
  'Estudio jurídico',
  'Contador',
  'Empresa',
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: '¿Necesito cambiar mi sistema actual?',
    answer: 'No. En la mayoría de los casos automatizo e integro lo que ya usás, sin obligarte a migrar todo de cero.',
  },
  {
    question: '¿Funciona con WhatsApp?',
    answer: 'Sí. WhatsApp es uno de los canales más usados en las automatizaciones que desarrollo, junto con Email y Telegram.',
  },
  {
    question: '¿Cuánto demora?',
    answer: 'Depende del proyecto. Una automatización simple puede estar lista en pocos días; un sistema completo lleva algunas semanas. Te doy un plazo claro después de la reunión inicial.',
  },
  {
    question: '¿Qué tipo de tareas se pueden resolver con un sistema?',
    answer: 'Casi todo lo que hoy hacés a mano y se repite: turnos, cobros, recordatorios, stock, reportes o atención por WhatsApp. En la primera charla vemos qué tiene más impacto para tu negocio.',
  },
  {
    question: '¿También desarrollás páginas web?',
    answer: 'Sí. Landing pages, sitios institucionales, tiendas online y sistemas web a medida, todo con foco en convertir visitantes en clientes.',
  },
  {
    question: '¿Ofrecés soporte?',
    answer: 'Sí, todo proyecto incluye acompañamiento posterior a la entrega para resolver dudas y ajustes.',
  },
];
