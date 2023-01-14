import { action, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import { Slider } from 'antd';
import { Row, Col } from 'antd';

class Filter {
  daysAgo = 0
  constructor() {
    makeAutoObservable(this)
  }
}

const filter = new Filter()

export const applyFilter = ({ date }) => {
  const now = Date.now();
  const diff = now - date
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  return diffDays == filter.daysAgo;
};

export default observer(({ cursor, painPoints }) => {
  return <>
    <Row>
      <Col span={19} offset={1}>
        <Slider included={true} value={filter.daysAgo} min={0} max={61} step={1} marks={{
          0: 'Today',
          30: 'Last month',
          60: '60days'
        }}
          onChange={action(x => filter.daysAgo = x)}
        />
      </Col>
      <Col span={4}>
      </Col>
    </Row>
  </>
});

