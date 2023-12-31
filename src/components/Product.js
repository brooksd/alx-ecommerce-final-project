import React from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} />
			</Link>
			<Card.Body>
				<Link className="basic-link" to={`/product/${product._id}`}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as="div">
					<div className="my-3">
						<Rating value={product.rating} text={`${product.numReviews} reviews`} color="#f8e825" />
					</div>
				</Card.Text>
				<Card.Text as="h4">Ksh. {product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}
