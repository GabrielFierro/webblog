import Card from '../card/Card';
import { htmlData } from '../../data/jsData';
import { cssData } from '../../data/jsData';
import { jsData } from '../../data/jsData';
import { reactData } from '../../data/jsData';

export default function View() {
  return (
    <div>
      <Card data={htmlData} />
      <Card data={cssData} />
      <Card data={jsData} />
      <Card data={reactData} />
    </div>
  );
}
