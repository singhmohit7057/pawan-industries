import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'High Speed Blunger',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Custom-designed high speed blunger for ceramic slurry preparation with optimized blade geometry.',
    image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&q=80',
  },
  {
    id: '2',
    title: 'Insulator Testing Machine',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Hydro-pressure testing machine for high-voltage ceramic insulators with automated test cycles.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
  },
  {
    id: '3',
    title: 'De-Airing Extruder',
    category: 'ceramic',
    industry: 'Ceramic Industry',
    description:
      'Heavy-duty de-airing extruder for ceramic body preparation with vacuum system integration.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80',
  },
  {
    id: '4',
    title: 'Glass Plant Ducting System',
    category: 'glass',
    industry: 'Glass Industry',
    description:
      'Complete stainless steel ducting system for glass melting furnace with custom Y-joints and elbows.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  },
  {
    id: '5',
    title: 'Burner Assembly',
    category: 'glass',
    industry: 'Glass Industry',
    description:
      'Multi-port burner assembly for glass furnace with precision-machined nozzles and mounting brackets.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
  },
  {
    id: '6',
    title: 'Welding Positioner for Railways',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Heavy-duty welding positioner for railway coach underframe assembly with motorized rotation.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80',
  },
  {
    id: '7',
    title: 'Bogie Assembly Fixture',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Precision fixture for metro coach bogie assembly with adjustable clamping and alignment features.',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?w=600&q=80',
  },
  {
    id: '8',
    title: 'Coach Lifting Equipment',
    category: 'railway',
    industry: 'Railway Industry',
    description:
      'Scissor lift table system for railway coach maintenance and assembly operations.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
  },
  {
    id: '9',
    title: 'Pressure Vessel',
    category: 'chemical',
    industry: 'Chemical Industry',
    description:
      'ASME-standard pressure vessel for chemical processing with multiple nozzle connections.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
  },
  {
    id: '10',
    title: 'Storage Tank',
    category: 'chemical',
    industry: 'Chemical Industry',
    description:
      'Large-capacity horizontal storage tank for chemical plant with internal baffles and heating coils.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80',
  },
  {
    id: '11',
    title: 'Industrial Platform & Walkway',
    category: 'structural',
    industry: 'Industrial Infrastructure',
    description:
      'Multi-level industrial platform with gratings, handrails, and access staircases for plant operations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    id: '12',
    title: 'Structural Steel Framework',
    category: 'structural',
    industry: 'Industrial Infrastructure',
    description:
      'Heavy structural steel framework for industrial building with crane girder support.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
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
