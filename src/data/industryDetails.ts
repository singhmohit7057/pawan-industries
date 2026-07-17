export interface IndustryDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  capabilities: string[];
  images: { src: string; alt: string }[];
}

export const industryDetails: Record<string, IndustryDetail> = {
  ceramic: {
    id: 'ceramic',
    title: 'Ceramic Industry',
    subtitle: 'Complete machinery solutions for ceramic & insulator manufacturing',
    description:
      'Pawan Industries has been a trusted partner to the ceramic and insulator manufacturing industry for over two decades. We design, fabricate, and supply specialized machinery and equipment tailored to the unique demands of ceramic production processes.',
    content: [
      'Our expertise spans the entire spectrum of ceramic manufacturing — from raw material processing equipment like blungers and ball mills to forming machinery such as pug mills, filter presses, and hydraulic presses. We understand the precision required in insulator manufacturing and deliver equipment that meets exacting tolerances.',
      'We have supplied complete plant solutions to leading ceramic companies across India, including custom-designed testing equipment for quality control laboratories. Our team works closely with plant engineers to understand process requirements and deliver solutions that improve efficiency and reduce downtime.',
      'Whether you need a single replacement component or a complete turnkey production line, our in-house design and fabrication capabilities allow us to deliver on time and within specification.',
    ],
    capabilities: [
      'Blungers & Mixers',
      'Pug Mills & Extruders',
      'Ball Mills & Grinding Equipment',
      'Filter Presses',
      'Hydraulic Presses',
      'Insulator Testing Machines',
      'Drying & Kiln Equipment',
      'Material Handling Systems',
    ],
    images: [
      { src: '/industries/HIGH SPEED BLUNGER.jpg', alt: 'High Speed Blunger' },
      { src: '/industries/INSULATOR TESTING MACHINE 1.jpg', alt: 'Insulator Testing Machine' },
      { src: '/industries/DE - AIRING EXTRUDER OR PUG MILL _1.jpg', alt: 'De-Airing Extruder' },
    ],
  },
  glass: {
    id: 'glass',
    title: 'Glass Industry',
    subtitle: 'Turnkey equipment for glass manufacturing plants',
    description:
      'Pawan Industries is a proven supplier of engineered solutions for the glass manufacturing industry. From float glass plants to container glass facilities, we deliver critical equipment that withstands extreme temperatures and demanding production environments.',
    content: [
      'Our glass industry expertise covers the design and fabrication of ducting systems, burner assemblies, batch houses, and structural steel work for furnace areas. We understand the thermal challenges and material requirements specific to glass production — from high-temperature alloys to precision-welded gas distribution systems.',
      'We have executed major projects for leading glass manufacturers including Saint-Gobain, Sisecam, and Borosil. Our capability to handle large-scale fabrication with tight tolerances makes us a preferred partner for furnace rebuild and expansion projects.',
      'Our turnkey approach means we manage everything from design engineering and material procurement to fabrication, surface treatment, and site installation — giving plant managers a single point of accountability.',
    ],
    capabilities: [
      'Furnace Ducting Systems',
      'Burner Assemblies & Gas Trains',
      'Batch House Equipment',
      'Annealing Lehr Components',
      'Structural Steel for Furnace Areas',
      'Combustion Air Systems',
      'Cooling Systems & Heat Exchangers',
      'Site Installation & Commissioning',
    ],
    images: [
      { src: '/industries/Glass Plant Projects 1.jpg', alt: 'Glass Plant Ducting' },
      { src: '/industries/Glass Plant Projects 2.jpg', alt: 'Glass Plant Equipment' },
      { src: '/industries/Glass Plant Projects 3.jpg', alt: 'Glass Plant Components' },
    ],
  },
  railway: {
    id: 'railway',
    title: 'Railway Industry',
    subtitle: 'Precision jigs, fixtures & assembly equipment for rail manufacturing',
    description:
      'Pawan Industries serves the railway sector with high-precision tooling, jigs, fixtures, and assembly equipment designed for coach and bogie manufacturing. Our solutions support both conventional rail and metro projects across India.',
    content: [
      'Railway manufacturing demands exceptional accuracy and repeatability. Our team designs and builds welding jigs, assembly fixtures, and positioners that ensure consistent quality across thousands of production cycles. Every fixture is engineered to hold tight tolerances while remaining operator-friendly.',
      'We have supplied tooling and equipment to major railway coach manufacturers, including projects for metro rail systems. Our capabilities include large-scale welding positioners (up to 20-ton capacity), multi-axis manipulators, and dedicated assembly stations for bogie frames and undercarriage components.',
      'Quality and traceability are paramount in railway applications. Our manufacturing process includes full dimensional inspection, material certification, and documentation packages that meet railway industry standards.',
    ],
    capabilities: [
      'Welding Jigs & Fixtures',
      'Welding Positioners (up to 20T)',
      'Assembly Stations',
      'Bogie Frame Tooling',
      'Multi-axis Manipulators',
      'Testing & Inspection Fixtures',
      'Coach Body Assembly Equipment',
      'Metro Rail Project Equipment',
    ],
    images: [
      { src: '/industries/Railway Projects 1.jpg', alt: 'Railway Welding Positioner' },
      { src: '/industries/Railway Projects 2.jpg', alt: 'Railway Assembly Fixture' },
      { src: '/industries/Railway Projects 3.jpg', alt: 'Railway Coach Equipment' },
    ],
  },
  chemical: {
    id: 'chemical',
    title: 'Chemical Industry',
    subtitle: 'Process equipment for chemical & petrochemical plants',
    description:
      'Pawan Industries manufactures critical process equipment for the chemical and petrochemical industry. Our fabrication capabilities cover pressure vessels, storage tanks, reactors, and heat exchangers built to ASME and IS standards.',
    content: [
      'Chemical process equipment demands materials expertise, precision welding, and strict adherence to codes and standards. Our team is experienced in working with carbon steel, stainless steel, and special alloys required for corrosive and high-pressure environments.',
      'We fabricate equipment ranging from small laboratory reactors to large storage tanks and pressure vessels. Our facility includes heavy plate rolling, automatic welding systems, and in-house stress relieving capability — allowing us to deliver complete vessels ready for installation.',
      'Every piece of equipment undergoes rigorous quality checks including radiographic testing, hydrostatic testing, and dimensional verification. We provide complete documentation packages including material test certificates, weld maps, and NDT reports.',
    ],
    capabilities: [
      'Pressure Vessels (ASME/IS)',
      'Storage Tanks',
      'Reactors & Agitators',
      'Heat Exchangers',
      'Process Columns',
      'Piping Fabrication',
      'Jacketed Vessels',
      'NDT & Hydro Testing',
    ],
    images: [
      { src: '/industries/10.jpg', alt: 'Chemical Process Equipment' },
      { src: '/industries/Cement-Chemical Projects 1.jpg', alt: 'Chemical Plant Vessel' },
      { src: '/industries/Cement-Chemical Projects 2.jpg', alt: 'Chemical Storage Tank' },
    ],
  },
  cement: {
    id: 'cement',
    title: 'Cement Industry',
    subtitle: 'Heavy-duty equipment for cement manufacturing facilities',
    description:
      'Pawan Industries supplies heavy fabricated components and equipment for the cement industry. Our capabilities in large-scale fabrication, precision machining, and site erection make us a valuable partner for cement plant projects.',
    content: [
      'Cement plants operate in harsh, abrasive environments with heavy loads and continuous operation. Our equipment is designed and built to withstand these demanding conditions — using wear-resistant materials, heavy-gauge construction, and proven design practices.',
      'We fabricate and supply ball mill components, rotary kiln parts, conveyor structures, classifier housings, and other critical equipment. Our heavy machining capability allows us to handle large-diameter components that many workshops cannot accommodate.',
      'From new plant construction to shutdown maintenance and replacement parts, we support cement manufacturers throughout the equipment lifecycle. Our proximity to major cement clusters in Gujarat enables quick response for urgent breakdown support.',
    ],
    capabilities: [
      'Ball Mill Components',
      'Rotary Kiln Parts',
      'Conveyor Structures',
      'Classifier Housings',
      'Structural Steel Work',
      'Chute & Hopper Fabrication',
      'Wear Plate Lining',
      'Site Erection & Alignment',
    ],
    images: [
      { src: '/industries/Cement-Chemical Projects 3.jpg', alt: 'Cement Plant Equipment' },
      { src: '/industries/Cement-Chemical Projects 4.jpg', alt: 'Cement Rotary Components' },
      { src: '/industries/Cement-Chemical Projects 5.jpg', alt: 'Cement Structural Work' },
    ],
  },
  infrastructure: {
    id: 'infrastructure',
    title: 'Industrial Infrastructure',
    subtitle: 'Structural steel, platforms & industrial support structures',
    description:
      'Pawan Industries delivers structural steel work and industrial infrastructure solutions for manufacturing plants across sectors. From pipe racks to multi-level platforms, we handle projects from design through installation.',
    content: [
      'Industrial infrastructure forms the backbone of any manufacturing facility. Our team designs and fabricates platforms, walkways, pipe racks, equipment supports, and complete structural frames — ensuring safety, accessibility, and load-bearing capacity meet project specifications.',
      'We work with standard structural sections as well as custom-fabricated members for specialized applications. Our capabilities include hot-dip galvanizing coordination, epoxy painting, and grouting/alignment during site erection.',
      'Our infrastructure projects span multiple industries — from chemical plant pipe racks to glass factory furnace platforms to warehouse structures. We bring the same precision and quality to structural work that we apply to process equipment.',
    ],
    capabilities: [
      'Pipe Racks & Supports',
      'Multi-level Platforms',
      'Walkways & Handrails',
      'Equipment Foundations',
      'Warehouse Structures',
      'Gratings & Floor Plates',
      'Ladders & Cages',
      'Site Erection & Grouting',
    ],
    images: [
      { src: '/industries/Structure Projects 1.jpg', alt: 'Industrial Platform' },
      { src: '/industries/Structure Projects 2.jpg', alt: 'Steel Structure' },
      { src: '/industries/Structure Projects 3.jpg', alt: 'Walkway & Gratings' },
    ],
  },
};
