import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png'
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItemBasket = ({product}) => {
    const history = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Филадельфия...</div>
                    <div className="d-flex align-items-center">
                        <div>{product.rating}</div>
                        <Image width={16} height={16} src={star}/>
                    </div>
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItemBasket;