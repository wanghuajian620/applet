// span 和 offset  代表的含义
import { Row, Col } from 'antd';

ReactDOM.render(
  <div>
    <Row>
      <Col span={8}>col-8</Col>         // span={8}也就是跨度8，未设置偏移量
      <Col span={8} offset={8}>col-8</Col>  // offset={8}偏移量为8，也就是距左边为8
    </Row>
    <Row>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>col-12 col-offset-6</Col>
    </Row>
  </div>,
  mountNode
);


// grid gutter  用法
import { Row, Col } from 'antd';

ReactDOM.render(
  <div className="gutter-example">
    <Row gutter={16}>    //You can use the gutter property of Row as grid spacing, we recommend set it to (16 + 8n) px. (n stands for natural number.) 
      <Col className="gutter-row" span={6}>  //我们可以使用行中的沟属性作为网络间隔。 间隔至少为16px 一般是(16+8n)px 
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
  </div>
, mountNode);