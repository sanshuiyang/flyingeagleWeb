
import './home.less';
import { Carousel, Card, Row, Col, Layout } from 'antd';
import CarouselImg from './CarouselImg';
import IntroduceRow from './IntroduceRow';
import Section_01 from './section_01';

const { Sider, Content } = Layout;

export default function () {
  const imgData = [
    {
      src: 'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/top-backgroud-3-1.jpg',
      key: '1-1',
      title: '图1-1',
    },
    {
      src: 'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/top-backgroud-3-2.jpg',
      key: '1-2',
      title: '图1-2',
    },
    {
      src: 'https://www.flyingeagle.com.cn/wp-content/uploads/2018/03/top-backgroud-3-3.jpg',
      key: '1-3',
      title: '图1-3',
    },
  ]

  const cardData = [
    {
      title: '基于VP开发',
      content: '公司基于vp开发系统，结合creater已经积累相当多的项目实践经验。',
      icon: ''
    },
    {
      title: '基于Unity开发',
      content: '公司对于Unity3d的开发是对于VP的进一步优化，实现外网连接，进行信息传输，更多的交互。',
      icon: ''
    },
    {
      title: '基于Web3D开发',
      content: '现在公司已经具备了一套完整的基于Web3D的开发系统，拥有自己的知识产权，是国内较为领先的研究开发技术。',
      icon: ''
    },
  ]

  const topColResponsiveProps = {
    xs: 48,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 12,
    style: { marginBottom: 24 },
  }

  const cardTitle = ({ textAlign, content }) => (
    <h3 style={{ textAlign: `${textAlign}` }}>{content}</h3>
  );

  return (
    <div style={{ margin: '0 15%' }}>
      <Carousel effect='fade' autoplay dots>
        {imgData.map(item => (<CarouselImg src={item.src} key={item.key} title={item.title} />))}
      </Carousel>
      <IntroduceRow loading={false} visiData={cardData} />
      <Section_01 />
      <hr /> {/**选择我们的理由 */}
      <Row gutter="24">
        <Col {...topColResponsiveProps}>
          <Card
            title={
              cardTitle({
                textAlign: 'center',
                content: '全程跟踪/Always Tracking',
              })
            }
            bordered={false}
            style={{marginTop:'5px'}}
          >
            {'科技虚拟现实与互联网应用相结合，将领先业界的产品理念和丰富的产品开发经验相结合，为用户提供简单、方便、安全、实用的虚拟现实系统产品和解决方案，帮助客户实现低成本、低风险、快起步、高效率的目标。'}
          </Card>
          <Card
            title={
              cardTitle({
                textAlign: 'center',
                content: '深入项目/Depth Project',
              })
            }
            bordered={false}
            style={{marginTop:'5px'}}
          >
            {'每一个项目的启动都会在团队内部做好每个人的分工，让项目在持续的过程中有理有据、循序渐进，从前期开始就把每个环节做到最优，避免在后期整合时出现问题而拉慢整体进度，每一个环节都会在总监的肯定后再做下一步的工作，很好的在规定时间内满足客户要求，在质量上也是精益求精。'}
          </Card>
          <Card
            title={
              cardTitle({
                textAlign: 'center',
                content: '客户为本/Customer Service',
              })
            }
            bordered={false}
            style={{marginTop:'5px'}}
          >
            {'客户为本一直是公司的首要任务，在项目进行中我们会最大程度、最高质量的完成客户的要求，在期间也会仔细的跟客户交流，对于已经做出来的产品也会让客户完全满意后才会对项目结题。'}
          </Card>
        </Col>
        <Col {...topColResponsiveProps}>
          <h1>选择我们的理由<br />
            Reasons to choose us
          </h1>
        </Col>
      </Row>
    </div>
  );
}
