import type { LucideIcon } from 'lucide-react';
import {
  Workflow, Globe, Plug,
  Bot, Cpu, LayoutDashboard,
  UtensilsCrossed, Dumbbell, Store, Stethoscope, PawPrint, Home,
  Hotel, GraduationCap, Trophy, Wrench, HardHat, Pill, Scale, Calculator, Briefcase,
  PhoneCall, ScanSearch, PenTool, Rocket, LifeBuoy,
} from 'lucide-react';

export type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    description: 'Conectamos tus herramientas para que el trabajo repetitivo se resuelva solo.',
    items: ['WhatsApp', 'Emails', 'Google Sheets', 'Formularios', 'Reportes', 'Integraciones'],
  },
  {
    icon: Bot,
    title: 'Inteligencia Artificial',
    description: 'Asistentes que atienden, responden y acompañan a tu equipo en tiempo real.',
    items: ['Chatbots IA', 'Agentes IA', 'Atención automática', 'IA para empleados', 'Automatización inteligente'],
  },
  {
    icon: Globe,
    title: 'Desarrollo web',
    description: 'Sitios rápidos y sistemas a medida que representan bien a tu negocio.',
    items: ['Landing pages', 'Sitios institucionales', 'Tiendas online', 'Sistemas web', 'Sistemas personalizados'],
  },
  {
    icon: LayoutDashboard,
    title: 'Sistemas y paneles',
    description: 'Gestioná stock, ventas y clientes desde un solo lugar, sin vueltas.',
    items: ['Stock', 'Ventas', 'Clientes', 'Turnos', 'Inventario', 'Paneles administrativos'],
  },
  {
    icon: Plug,
    title: 'Integraciones',
    description: 'Todo tu ecosistema digital hablando entre sí, sin cargar datos a mano.',
    items: ['WhatsApp', 'Telegram', 'Gmail', 'Google Calendar', 'Mercado Pago', 'Stripe', 'Agenda de clientes', 'Sistemas existentes'],
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  example: string;
};

export const industries: Industry[] = [
  { icon: UtensilsCrossed, name: 'Restaurante', example: 'Reservas y pedidos por WhatsApp automáticos' },
  { icon: Dumbbell, name: 'Gimnasio', example: 'Recordatorios de pago y control de asistencia' },
  { icon: Store, name: 'Tienda', example: 'Stock sincronizado y catálogo online' },
  { icon: Stethoscope, name: 'Consultorio', example: 'Agenda de turnos y confirmaciones automáticas' },
  { icon: PawPrint, name: 'Veterinaria', example: 'Historial de mascotas y recordatorios de vacunas' },
  { icon: Home, name: 'Inmobiliaria', example: 'Seguimiento automático de interesados' },
  { icon: Hotel, name: 'Hotel', example: 'Check-in digital y reportes de ocupación' },
  { icon: GraduationCap, name: 'Colegio', example: 'Comunicación automática con familias' },
  { icon: Trophy, name: 'Club', example: 'Cobro de cuotas y control de socios' },
  { icon: Wrench, name: 'Taller', example: 'Seguimiento de órdenes de trabajo' },
  { icon: HardHat, name: 'Ferretería', example: 'Control de inventario en tiempo real' },
  { icon: Pill, name: 'Farmacia', example: 'Alertas de stock y vencimientos' },
  { icon: Scale, name: 'Estudio jurídico', example: 'Gestión de expedientes y plazos' },
  { icon: Calculator, name: 'Contador', example: 'Reportes automáticos para clientes' },
  { icon: Briefcase, name: 'Empresa', example: 'Paneles de gestión a medida' },
];

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { icon: PhoneCall, title: 'Reunión inicial', description: 'Charlamos sobre tu negocio, sin tecnicismos.' },
  { icon: ScanSearch, title: 'Analizamos tu negocio', description: 'Detectamos dónde estás perdiendo tiempo o dinero.' },
  { icon: PenTool, title: 'Diseñamos la solución', description: 'Proponemos algo simple, claro y a tu medida.' },
  { icon: Cpu, title: 'Desarrollamos', description: 'Construimos la solución con foco en calidad.' },
  { icon: Rocket, title: 'Implementamos', description: 'La ponemos a funcionar en tu negocio real.' },
  { icon: LifeBuoy, title: 'Soporte', description: 'Te acompañamos después de la entrega.' },
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: '¿Necesito cambiar mi sistema actual?',
    answer: 'No. En la mayoría de los casos automatizamos e integramos lo que ya usás, sin obligarte a migrar todo de cero.',
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
