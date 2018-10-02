import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import Product from "../Product/Product";

import classes from "./Products.less";

class Products extends Component {
	state = {
		product: [
			{
				description: "Манго желтое, Питахайя белая, Маракуйя 250 гр, Карамбола 2 шт., Мангостин 250 гр., Лонган (ветка), Ананас мини, Манго зеленое",
				label: "Набор Mini-fruits",
				img: "http://s.lpmcdn.com/lpfile/c/a/8/ca8b1ad297a6f9c148052ea1c10053e8.jpeg",
				price: "3670 руб"
			},
			{
				description: "Манго желтое, Питахайя белая, Маракуйя 250 гр, Карамбола 2 шт., Мангостин 250 гр., Лонган (ветка), Ананас мини, Манго зеленое",
				label: "Набор Mini-fruits",
				img: "http://s.lpmcdn.com/lpfile/c/a/8/ca8b1ad297a6f9c148052ea1c10053e8.jpeg",
				price: "3670 руб"
			},
			{
				description: "Манго желтое, Питахайя белая, Маракуйя 250 гр, Карамбола 2 шт., Мангостин 250 гр., Лонган (ветка), Ананас мини, Манго зеленое",
				label: "Набор Mini-fruits",
				img: "http://s.lpmcdn.com/lpfile/c/a/8/ca8b1ad297a6f9c148052ea1c10053e8.jpeg",
				price: "3670 руб"
			},
			{
				description: "Манго желтое, Питахайя белая, Маракуйя 250 гр, Карамбола 2 шт., Мангостин 250 гр., Лонган (ветка), Ананас мини, Манго зеленое",
				label: "Набор Mini-fruits",
				img: "http://s.lpmcdn.com/lpfile/c/a/8/ca8b1ad297a6f9c148052ea1c10053e8.jpeg",
				price: "3670 руб"
			}
		]
	}


	renderSingleProduct = () => {
		return this.state.product.map((product) => {
			return (
				<Product
					description={product.description}
					label={product.label}
					img={product.img}
					price={product.price}
				/>
			);
		});
	}

	renderTwoProducts = () => {
		return this.state.product.map((product) => {
			return (
				<Col xs={12} md={6} >
					<Product
						description={product.description}
						label={product.label}
						img={product.img}
						price={product.price}
					/>
				</Col>
			);
		});
	}

	renderMoreThenTwoProducts = () => {
		return (
			<Grid>
				<Row className={classes.productsWrapper}>
					{
						this.state.product.map((product) => {
							return (
								<Col xs={12} md={4} >
									<Product
										description={product.description}
										label={product.label}
										img={product.img}
										price={product.price}
									/>
								</Col>
							);
						})
					}
				</Row>
			</Grid>
		);
	}


	render() {

		return (
			<div className={classes.products}>
				<h3>Каталог готовых наборов</h3>
				<Grid>
					<Row>
						{ this.state.product.length === 1 &&
							this.renderSingleProduct()
						}

						{ this.state.product.length === 2 &&
							this.renderTwoProducts()
						}

						{ this.state.product.length > 2 &&
							this.renderMoreThenTwoProducts()
						}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Products;
