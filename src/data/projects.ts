import type { Icon } from '@phosphor-icons/react';
import {
  LightningIcon, UsersThreeIcon, ShieldCheckIcon,
  BarbellIcon, WalletIcon, ChartBarIcon, DatabaseIcon, KeyIcon,
  CarIcon, PackageIcon, ReceiptIcon, FileTextIcon,
  ScissorsIcon, PercentIcon, WhatsappLogoIcon,
} from '@phosphor-icons/react';
import demoAlpha from '../assets/demo-alpha.png';
import demoAlpha1 from '../assets/demo-alpha1.png';
import demoStrong from '../assets/demo-strong.png';
import demoMecanica from '../assets/demo-mecanica.png';
import demoMecanica1 from '../assets/demo-mecanica1.png';
import lalygymCheckin from '../assets/lalygym-checkin.png';
import lalygymSocios from '../assets/lalygym-socios.png';
import sectorb1 from '../assets/sectorb1.png';
import sectorb2 from '../assets/sectorb2.png';
import sectorb3 from '../assets/sectorb3.jpg';

export type Highlight = { icon: Icon; text: string };

export type ProjectImage = { src: string; alt: string; frameLabel: string };

export type Project = {
  id: string;
  title: string;
  badge?: string;
  description: string;
  images: ProjectImage[];
  highlights: Highlight[];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    id: 'lalygym',
    title: 'LalyGym — Sistema de gestión para gimnasios',
    description:
      'Check-in rápido, control de socios y pagos, copias de seguridad automáticas y accesos por puesto, todo en un panel simple pensado para el día a día del gimnasio.',
    images: [
      {
        src: lalygymCheckin,
        alt: 'Pantalla de check-in por DNI de LalyGym',
        frameLabel: 'https://gimnasio-demo-phi.vercel.app',
      },
      {
        src: lalygymSocios,
        alt: 'Panel de gestión de socios de LalyGym (datos anonimizados)',
        frameLabel: 'https://gimnasio-demo-phi.vercel.app',
      },
    ],
    highlights: [
      { icon: LightningIcon, text: 'Check-in por DNI en segundos, sin planillas ni personal extra' },
      { icon: UsersThreeIcon, text: 'Gestión de socios, pagos y vencimientos en un solo panel' },
      { icon: ShieldCheckIcon, text: 'Accesos para administrador y empleado' },
    ],
    link: { href: 'https://gimnasio-demo-phi.vercel.app', label: 'Ver sitio' },
  },
  {
    id: 'gimnasios',
    title: 'Gestión integral para gimnasios',
    badge: 'Funcionando en 2 gimnasios',
    description:
      'La evolución del sistema de LalyGym, muchísimo más completa, hoy funcionando todos los días en dos gimnasios reales: AlphaGym y Strong Gym Boutique. Cubre toda la operación del gimnasio: socios, planes, cobros, kiosco, caja y reportes, con accesos separados para administrador y empleados.',
    images: [
      {
        src: demoAlpha,
        alt: 'Pantalla de check-in por DNI de AlphaGym',
        frameLabel: 'AlphaGym — check-in por DNI',
      },
      {
        src: demoAlpha1,
        alt: 'Panel de caja diaria de AlphaGym con totales en vivo',
        frameLabel: 'AlphaGym — caja diaria',
      },
      {
        src: demoStrong,
        alt: 'Pantalla de check-in por DNI de Strong Gym Boutique',
        frameLabel: 'Strong Gym Boutique — check-in',
      },
    ],
    highlights: [
      { icon: LightningIcon, text: 'Check-in por DNI y ficha completa de cada socio' },
      { icon: BarbellIcon, text: 'Planes y membresías, con deudas y vencimientos al día' },
      { icon: WalletIcon, text: 'Cobros de gym y kiosco, con cuenta corriente por socio' },
      { icon: ChartBarIcon, text: 'Caja diaria con egresos y reportes para el administrador' },
      { icon: DatabaseIcon, text: 'Cierre de caja y copia de seguridad automática todos los días' },
      { icon: KeyIcon, text: 'Permisos según el puesto de cada empleado, con todos los datos del sistema anterior ya cargados' },
    ],
  },
  {
    id: 'electromecanica',
    title: 'ElectroMecánica — Sistema de gestión para taller',
    badge: 'En uso todos los días',
    description:
      'Sistema a medida para un taller electromecánico donde el trabajo es el eje: ingreso del vehículo, orden de trabajo, avance de estados y entrega con impacto en caja. Genera fichas de ingreso, recibos y presupuestos personalizados, todo en una sola operación.',
    images: [
      {
        src: demoMecanica1,
        alt: 'Pantalla de ingreso de vehículos de ElectroMecánica, con búsqueda por patente o cliente',
        frameLabel: 'ElectroMecánica — ingreso de vehículos',
      },
      {
        src: demoMecanica,
        alt: 'Detalle de una orden de trabajo de ElectroMecánica con recibo emitido',
        frameLabel: 'ElectroMecánica — orden de trabajo',
      },
    ],
    highlights: [
      { icon: FileTextIcon, text: 'Fichas de ingreso, recibos y presupuestos personalizados' },
      { icon: CarIcon, text: 'Clientes y vehículos con historial de trabajos y presupuestos' },
      { icon: PackageIcon, text: 'Stock por movimientos y gestión de proveedores' },
      { icon: ReceiptIcon, text: 'Cierre diario de caja y accesos separados para dueño y empleados' },
    ],
  },
  {
    id: 'sectorb',
    title: 'Sector B — Sistema de gestión para barbería',
    badge: 'En uso todos los días',
    description:
      'Sistema a medida para Sector B Barbería: cada corte queda registrado, cada barbero tiene su porcentaje y la caja cierra todos los días con copia de seguridad. A las dos semanas, el cliente recibe un recordatorio por WhatsApp para volver.',
    images: [
      {
        src: sectorb1,
        alt: 'Inicio de Sector B con cortes del día y ganancia por barbero',
        frameLabel: 'Sector B — inicio y cortes del día',
      },
      {
        src: sectorb2,
        alt: 'Caja diaria de Sector B con ingresos, egresos y medios de pago',
        frameLabel: 'Sector B — caja diaria',
      },
      {
        src: sectorb3,
        alt: 'Reportes semanales de Sector B con cortes, ganancia y adelantos por barbero',
        frameLabel: 'Sector B — reportes semanales',
      },
    ],
    highlights: [
      { icon: ScissorsIcon, text: 'Registro de cada corte, con la jornada y la ganancia de cada barbero a la vista' },
      { icon: PercentIcon, text: 'Porcentaje que le corresponde a cada barbero, más adelantos del día' },
      { icon: WalletIcon, text: 'Caja diaria con ingresos, egresos y totales en vivo por efectivo, transferencia y tarjeta' },
      { icon: ChartBarIcon, text: 'Reportes semanales de cortes, ganancia y adelantos por barbero' },
      { icon: DatabaseIcon, text: 'Cierre de caja y copia de seguridad automática todos los días' },
      { icon: WhatsappLogoIcon, text: 'Recordatorio por WhatsApp al cliente dos semanas después del servicio' },
    ],
  },
];
