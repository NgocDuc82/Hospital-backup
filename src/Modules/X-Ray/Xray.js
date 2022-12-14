import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'reactstrap';
import Styles from './Xray.module.scss';
import classNames from 'classnames/bind';
import ResultXray from './ResultXray/resultXray';
import XRayForm from './components/XrayForm/xRayForm';
import Style from "../X-Ray/ResultXray/resultXray.module.scss"
import { useState, useRef } from 'react';
const cx = classNames.bind(Styles);
const xl = classNames.bind(Style);
function XRayRender() {
    let Local = JSON.parse(localStorage.getItem('listInfoUser'));
    // eslint-disable-next-line no-unused-vars
    const [showLocal, setshowLocal] = useState(Local);
    const [data, setData] = useState({});
    let idItem = useRef();
    const deletePatient = (i) => {
        idItem.current = i;
    };
    const handleClick = (data) => {
        setData(data);
    };
    return (
        <Container className={cx('wrapper')}>
            <Row>
                <Col sm={8}>
                    <ResultXray setdata={setData} count={idItem.current} showLocal={showLocal} data={data} onCLick={handleClick} />
                </Col>
                <Col sm={4}>
                    <XRayForm hide={xl('noPrint')} handleDelete={deletePatient} showLocal={showLocal} onCLick={handleClick} />
                </Col>
            </Row>
        </Container>
    );
}
export default XRayRender;
