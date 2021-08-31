import { ProjectDemo } from './project-demo';

export class ProjectDemoVO implements ProjectDemo {
  id = '';
  name = '';
  title = '';
  desc = '';
  demoImg = '';
  redhatTechId = Array<number>();
  productBenefitsId = Array<number>();
}
