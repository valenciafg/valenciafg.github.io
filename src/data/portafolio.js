import villablanca from '../images/villablanca.png';
import dokument from '../images/dokument.png';
import meru from '../images/meru.png';
import guardias from '../images/guardias.png';
import caroni from '../images/sc.png';

const portafolio = [
  {
    id: 0,
    title: 'Villa Blanca',
    description: 'Website to Villa Blanca mansion located in Barcelona, Spain',
    image: villablanca,
    technologies: [
      { id: 0, name: 'Wordpress' },
      { id: 1, name: 'PHP' },
      { id: 2, name: 'Semantic-UI' },
      { id: 3, name: 'jQuery' },
      { id: 4, name: 'ReactJS' },
    ],
    url: 'http://villablancabarcelona.com/',
  },
  {
    id: 1,
    title: 'Dokument v2.0',
    image: dokument,
    technologies: [
      { id: 0, name: 'Codeigniter' },
      { id: 1, name: 'PHP' },
      { id: 2, name: 'MySQL' },
      { id: 3, name: 'AdminLTE' },
      { id: 4, name: 'Bootstrap' },
    ],
    description: 'It\'s an application dedicated to the digitalization and massive management of documents, helps to lower the high number of consumables in the office',
    url: 'http://www.linuxsolutions.com.ve/dokument-software-de-digitalizacion-y-gestion-de-documentos/',
  },
  {
    id: 2,
    title: 'Hotel Plaza Merú Website',
    image: meru,
    technologies: [
      { id: 0, name: 'PHP' },
      { id: 1, name: 'Bootstrap' },
      { id: 2, name: 'jQuery' },
    ],
    description: 'Improvements to the backend structure, integration of the language switch component, creation of the reservation component, as well as some changes to the user interface',
    url: 'https://www.hotelplazameru.com/',
  },
  {
    id: 3,
    title: 'Rotary Guards Control System',
    image: guardias,
    technologies: [
      { id: 0, name: 'Web2py' },
      { id: 1, name: 'Python' },
      { id: 2, name: 'Bootstrap' },
      { id: 3, name: 'jQuery' },
    ],
    description: 'Activities control system for IT staff ',
    url: 'https://github.com/valenciafg/rgcs',
  },
  {
    id: 4,
    title: 'List of Car Workshops and Health Centers',
    image: caroni,
    technologies: [
      { id: 0, name: 'Codeigniter' },
      { id: 1, name: 'Oracle' },
      { id: 2, name: 'jQuery' },
    ],
    description: 'Search and reporting of health care providers and auto shops',
    url: 'http://www.seguroscaroni.com/',
  },
];

export default portafolio;
