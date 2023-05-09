import { Container } from 'reactstrap';
import homepic from './studTeachquotes.jpg';
// import {  Typography } from 'antd';
// const { Title, Paragraph,  Link } = Typography;

const Home = ()=>{
    return  <div>
                <img src={homepic}></img>
                <Container style={{Fontsize:'50px' , textAlign: 'left'}}>
                    
                </Container>
            </div>
}
export default Home ;