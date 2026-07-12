import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'cartilla-arevalo',
    title: 'Cartilla Médica Interactiva y Panel de Gestión',
    subtitle: 'Grupo Arévalo',
    description: 'Plataforma web full-stack, responsive y de alto rendimiento diseñada para la búsqueda ágil de prestadores de salud, médicos y clínicas del Grupo Arévalo (Tucumán, Argentina). El sistema ofrece a los afiliados un motor de búsqueda interactivo geolocalizado, y provee a los administradores un panel centralizado (Backoffice) para la gestión masiva de datos (CRUD), importación estructural desde hojas de cálculo y auditoría de seguridad en tiempo real.',
    category: 'enterprise',
    technologies: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet Map', 'XLSX (SheetJS)', 'jspdf', 'Lucide React'],
      backend: ['Node.js', 'Express API Gateway', 'esbuild Bundling'],
      integrations: ['Firebase Firestore', 'Firebase Authentication', 'Google OAuth', 'Bitácora de Auditoría'],
      reports: ['Parseo de planillas Excel (.xlsx)', 'Generación de Cartilla PDF']
    },
    url: 'https://prestadores-sucursales-arevalo.com.ar/'
  },
  {
    id: 'cct-sueldos',
    title: 'Sistema de Liquidación de Sueldos',
    subtitle: 'CCT 130/75 - Comercio',
    description: 'Aplicación web full-stack de alto rendimiento para automatizar, calcular y administrar liquidaciones de sueldos en Argentina bajo el Convenio Colectivo de Trabajo 130/75 (Comercio). Resuelve la complejidad regulatoria automatizando el cálculo de conceptos básicos, adicionales legales, sumas no remunerativas, descuentos y retenciones de ley. Integra Inteligencia Artificial avanzada para agilizar y simplificar la carga automática de escalas salariales vigentes a partir de PDFs, y se despliega sobre una infraestructura de nube optimizada para persistencia de datos segura.',
    category: 'ai',
    technologies: {
      frontend: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
      backend: ['Node.js', 'Express', 'Google GenAI SDK (Gemini 3.5 Flash)', 'Multer'],
      integrations: ['Google Sheets API v4', 'Google Apps Script', 'LocalStorage'],
      reports: ['jspdf', 'xlsx / SheetJS']
    },
    url: 'https://liquidacion-de-sueldos-arevalo.vercel.app/'
  },
  {
    id: 'liquidacion-medicos',
    title: 'Gestión de Liquidación, Auditoría y Pagos Médicos',
    subtitle: 'Sistema de Facturación de Prestadores',
    description: 'Aplicación web de nivel Enterprise diseñada para centralizar, auditar y automatizar por completo el ciclo de facturación y pago de prestadores de salud de manera transparente y eficiente. Implementa un sistema dinámico y riguroso de control de acceso basado en roles (RBAC - Role Based Access Control), el cual segmenta minuciosamente el flujo operativo en tres fases clave y auditables: Liquidación, Control técnico/médico y Pago final.',
    category: 'enterprise',
    technologies: {
      frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'Framer Motion'],
      backend: ['Firebase Authentication', 'Cloud Firestore'],
      integrations: ['Reglas de Seguridad Integradas (RBAC)', 'Web Storage API']
    },
    url: 'https://liquidacion-medicos-arevalo.vercel.app/'
  },
  {
    id: 'home-arevalo',
    title: 'Home-Arevalo',
    subtitle: 'Portal Centralizado de Gestión y Auditoría',
    description: 'Landing page institucional de vanguardia y Hub tecnológico unificado del ecosistema digital de Arevalo Servicios Sociales. Actúa como un portal central seguro que consolida el acceso a las diversas herramientas operativas internas de la organización, logrando reducir en un destacado 70% el tiempo de navegación inicial y optimizando de forma drástica la seguridad del ecosistema. Diseñado con una arquitectura Single Page Application (SPA) para garantizar un rendimiento con latencia casi nula (Near-Zero Latency).',
    category: 'ecosystem',
    technologies: {
      frontend: ['React 19', 'TypeScript', 'Vite 6', 'Tailwind CSS v4', 'motion/react (Framer Motion v12)', 'lucide-react'],
      backend: ['Edge Routing Optimization', 'Asset Compression'],
      integrations: ['Ecosistema Unificado de Servicios', 'Auditoría Centralizada']
    },
    url: 'https://home-auditoria-arevalo.vercel.app/', // Base URL, will show ecosystem details inside card
    ecosystem: [
      {
        name: 'Cartilla Médica Interactiva',
        url: 'https://prestadores-sucursales-arevalo.com.ar/',
        description: 'Buscador interactivo de prestadores, médicos, clínicas y sucursales con geolocalización y panel de gestión.'
      },
      {
        name: 'Tareas y Novedades Internas',
        url: 'https://auditoria-arevalo.vercel.app/',
        description: 'Plataforma para el seguimiento ágil y coordinación de novedades de auditoría y tareas internas.'
      },
      {
        name: 'Liquidación de Médicos Inteligente',
        url: 'https://liquidacion-medicos-arevalo.vercel.app/',
        description: 'Ciclo completo de auditoría médica y facturación de prestadores.'
      },
      {
        name: 'Gestión de Horas Extras',
        url: 'https://horas-extra-arevalo.vercel.app/',
        description: 'Cálculo, autorización y control detallado de la jornada y horas suplementarias.'
      },
      {
        name: 'Gestión y Pago de Facturas',
        url: 'https://facturitas-arevalo.vercel.app/',
        description: 'Sistema administrativo ágil para la carga, clasificación y ordenamiento de pagos.'
      },
      {
        name: 'Afiliación Online',
        url: 'https://afiliacion-online-arevalo.vercel.app/',
        description: 'Portal de registro ágil y digitalización del proceso de afiliaciones.'
      }
    ]
  }
];
