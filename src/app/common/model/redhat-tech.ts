import { RedhatTechnologies } from './redhat-technologies';


export class RedhatTech implements RedhatTechnologies {
  id: string;
  name: string;
  description: string;
  imgUrl: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.imgUrl = '';
  }

}
