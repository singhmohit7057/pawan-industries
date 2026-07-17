import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'High Speed Blunger',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Custom-designed high speed blunger for ceramic slurry preparation with optimized blade geometry.',
    image: '/industries/HIGH SPEED BLUNGER.jpg',
  },
  {
    id: '2',
    title: 'Insulator Testing Machine',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Hydro-pressure testing machine for high-voltage ceramic insulators with automated test cycles.',
    image: '/industries/INSULATOR TESTING MACHINE 1.jpg',
  },
  {
    id: '3',
    title: 'De-Airing Extruder',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Heavy-duty de-airing extruder for ceramic body preparation with vacuum system integration.',
    image: '/industries/DE - AIRING EXTRUDER OR PUG MILL _1.jpg',
  },
  {
    id: '4',
    title: 'Glass Plant Ducting System',
    category: 'glass',
    industry: 'Glass Industry',
    description:
      'Complete stainless steel ducting system for glass melting furnace with custom Y-joints and elbows.',
    image: '/industries/Glass Plant Projects 1.jpg',
  },
  {
    id: '5',
    title: 'Burner Assembly',
    category: 'glass',
    industry: 'Glass Industry',
    description:
      'Multi-port burner assembly for glass furnace with precision-machined nozzles and mounting brackets.',
    image: '/industries/Glass Plant Projects 2.jpg',
  },
  {
    id: '6',
    title: 'Welding Positioner for Railways',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Heavy-duty welding positioner for railway coach underframe assembly with motorized rotation.',
    image: '/industries/Railway Projects 1.jpg',
  },
  {
    id: '7',
    title: 'Bogie Assembly Fixture',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Precision fixture for metro coach bogie assembly with adjustable clamping and alignment features.',
    image: '/industries/Railway Projects 2.jpg',
  },
  {
    id: '8',
    title: 'Coach Lifting Equipment',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Scissor lift table system for railway coach maintenance and assembly operations.',
    image: '/industries/Railway Projects 3.jpg',
  },
  {
    id: '9',
    title: 'Pressure Vessel',
    category: 'chemical',
    industry: 'Chemical Industry',
    description:
      'ASME-standard pressure vessel for chemical processing with multiple nozzle connections.',
    image: '/industries/10.jpg',
  },
  {
    id: '10',
    title: 'Storage Tank',
    category: 'chemical',
    industry: 'Chemical Industry',
    description:
      'Large-capacity horizontal storage tank for chemical plant with internal baffles and heating coils.',
    image: '/industries/Cement-Chemical Projects 2.jpg',
  },
  {
    id: '11',
    title: 'Industrial Platform & Walkway',
    category: 'structural',
    industry: 'Industrial Infrastructure',
    description:
      'Multi-level industrial platform with gratings, handrails, and access staircases for plant operations.',
    image: '/industries/Structure Projects 1.jpg',
  },
  {
    id: '12',
    title: 'Structural Steel Framework',
    category: 'structural',
    industry: 'Industrial Infrastructure',
    description:
      'Heavy structural steel framework for industrial building with crane girder support.',
    image: '/industries/Structure Projects 2.jpg',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ceramic', label: 'Ceramic Projects' },
  { id: 'glass', label: 'Glass Plant Projects' },
  { id: 'railway', label: 'Railway Projects' },
  { id: 'chemical', label: 'Chemical Projects' },
  { id: 'structural', label: 'Structural Projects' },
];
