import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'design-engineering',
    title: 'Design Engineering',
    description:
      'Advanced CAD-based design engineering solutions tailored to your specific industrial requirements.',
    features: ['CAD Design', 'Structural Design', 'FEA Analysis', 'Custom Engineering'],
    icon: 'Ruler',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  },
  {
    id: 'fabrication',
    title: 'Fabrication',
    description:
      'Heavy and light fabrication capabilities with CNC plasma cutting, press brakes, and welding facilities.',
    features: ['Heavy Fabrication', 'Process Equipment', 'Steel Structures', 'Pressure Vessels'],
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  },
  {
    id: 'machining',
    title: 'Precision Machining',
    description:
      'Comprehensive machining services with heavy-duty lathes, milling machines, and precision grinders.',
    features: ['Milling', 'Turning', 'Grinding', 'Slotting'],
    icon: 'Cog',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
  },
  {
    id: 'machine-manufacturing',
    title: 'Machine Manufacturing',
    description:
      'Custom machine design and manufacturing for ceramic, glass, and other industrial applications.',
    features: ['Industrial Machinery', 'Testing Equipment', 'Special Purpose Machines'],
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  },
  {
    id: 'project-execution',
    title: 'Project Execution',
    description:
      'End-to-end turnkey project solutions from concept design to installation and commissioning.',
    features: ['Turnkey Solutions', 'Installation Support', 'Commissioning'],
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=80',
  },
];
