
import './home.less';
import { Carousel, Card, Row, Col } from 'antd';
import CarouselImg from './CarouselImg';
import IntroduceRow from './IntroduceRow';


const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

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

  const cardTitle = ({ textAlign, content }) => (
    <h3 style={{ textAlign: `${textAlign}` }}>{content}</h3>
  )

  return (
    <div style={{ margin: '0 15%' }}>
      <Carousel effect='fade' autoplay dots>
        {imgData.map(item => (<CarouselImg src={item.src} key={item.key} title={item.title} />))}
      </Carousel>
      <IntroduceRow loading={false} visiData={cardData} />
      <hr />
      <Card
        title={cardTitle({
          textAlign: 'center',
          content: '主要的业务范围'
        })}
      >
        <Row gutter='24'>
          <Col {...topColResponsiveProps}>
            <Card
              title={
                cardTitle({
                  textAlign: 'left',
                  content: '虚拟漫游'
                })
              }
              bordered={false}
            >
              虚拟漫游，是虚拟现实(VR)技术的重要分支，在建筑、旅游、游戏、航空航天、医学等多种行业发展很快。由于有可贵的3I特性–沉浸感、交互性和构想性，使得沿用固定漫游路径等手段的其他漫游技术和系统无法与之相比。
            </Card>
            <Card
              title={
                cardTitle({
                  textAlign: 'left',
                  content: '虚拟装配'
                })
              }
              bordered={false}
            >
              基于虚拟现实的产品虚拟拆装技术在新产品开发、产品的维护以及操作培训方面具有独特的作用。在交互式虚拟装配环境中，用户使用各类交互设备，像在真实环境中一样对产品的零部件进行各类装配操作，从而使得用户能够对产品的可装配性进行分析、对产品零部件装配序列进行验证和规划、对装配操作人员进行培训等。
            </Card>
          </Col>
          <Col {...topColResponsiveProps}>
            <Card
              title={
                cardTitle({
                  textAlign: 'left',
                  content: '虚拟演练'
                })
              }
              bordered={false}
            >
              演练系统提供针对不同角色进行训练的功能。根据登陆的不同角色，系统提供不同的能力和权限。 根据在应对灾害时职责和所需能力的不同，角色主要包括以下几类：群众、社会救援力量、现场专业救援力量，指挥中心等。
            </Card>
            <Card
              title={
                cardTitle({
                  textAlign: 'left',
                  content: '虚拟全景展示'
                })
              }
              bordered={false}
            >
              全方位，全面的展示了双360度球型范围内的所有景致；可在例子中用鼠标左键按住拖动，观看场景的各个方向；实景，真实的场景，三维全景大多是在照片基础之上拼合得到的图像，最大限度的保留了场景的真实性。
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
