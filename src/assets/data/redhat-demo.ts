import { ProjectDemo } from '../../app/common/model/project-demo';

export const PROJECTDEMO: ProjectDemo[] = [
  {id: '1', name: 'ACH', title: 'Red Hat ACH Banking',
    desc: 'At Red Hat we have a passion for what we do! Working with multiple Red Hat products as an ' +
    'integrated system to streamline your businesses rapidly with high fault tolerance and availability. ' +
    'Building effective solutions cheaper, faster, better with a modern cloud native architecture.',
    redhatTechId: [0, 1, 2, 5],
    demoImg: '',
    productBenefitsId: [0]
  },
  {id: '2', name: 'Real Time Payments', title: 'Red Hat Real Time Payments',
    desc: 'The payments  ecosystem is a  complex  network  of  different,  often  unconnected systems. From cash to cards to mobile in real-time, the payments ecosystem continues to expand. It includes many country-specific electronic payment methods, which are not interoperable.',
    redhatTechId: [3, 4, 5],
    demoImg: '../../assets/img/target-architecture.jpg',
    productBenefitsId: [1, 2, 3, 4]
  },
  {id: '3', name: 'Open Banking', title: 'Red Hat Support for Open Banking',
    desc: 'Red Hat brings the future of open banking to reality',
    redhatTechId: [0, 1, 3, 5],
    demoImg: '',
    productBenefitsId: [6, 7, 8]
  }
];
