import Component from '@glimmer/component';
import { set } from '@ember/object';

export default class GreetingComponent extends Component {
  constructor() {
    super(...arguments);
    console.log('shubham from component');

    const person = this.args.person;
    person.firstName = 'Bruce';
    person.lastName = 'Wayne';

    console.log(this.args.person);
  }
}
