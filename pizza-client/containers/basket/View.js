import React from 'react';
import styled from 'styled-components';

import { BsCart2 } from 'react-icons/bs';
import { IoChevronBackSharp } from 'react-icons/io5';

import { Line } from '../../components';

import { PizzaItem } from './PizzaItem';
import { useRouter } from 'next/dist/client/router';

export const BasketView = () => {
	const orders = [
		{
			price: 450,
			countOrders: 1,
			imgPath: '/static/png/pizza_small.png',
			type: 'тонке тісто',
			size: '40 cм.',
			title: 'Сирне циплятко',
		},
		{
			price: 450,
			countOrders: 1,
			imgPath: '/static/png/pizza_small.png',
			type: 'тонке тісто',
			size: '40 cм.',
			title: 'Сирне циплятко',
		},
		{
			price: 450,
			countOrders: 1,
			imgPath: '/static/png/pizza_small.png',
			type: 'тонке тісто',
			size: '40 cм.',
			title: 'Сирне циплятко',
		},
		{
			price: 450,
			countOrders: 1,
			imgPath: '/static/png/pizza_small.png',
			type: 'тонке тісто',
			size: '40 cм.',
			title: 'Сирне циплятко',
		},
	];

	const router = useRouter();

	return (
		<BasketWrapper>
			<BasketCont>
				<BasketTitle>
					<BsCart2 />
					<span>Корзина</span>
				</BasketTitle>
				<Line />
				{orders.map((item, index) => (
					<PizzaItem
						last={index + 1 === orders.length}
						pizzaInfo={item}
						key={index * 99}
					/>
				))}
				<ResultInfoCon>
					<AmountText>
						Всього піц :{' '}
						<span style={{ fontWeight: 700, paddingLeft: 5 }}>
							{orders.length}
						</span>
					</AmountText>
					<AmountText>
						Сумма замовлення :{' '}
						<span
							style={{ color: '#FE5F1E', fontWeight: 700, paddingLeft: 10 }}
						>
							{' '}
							{orders.reduce(function (pr_value, cr_value) {
								return pr_value + cr_value.price;
							}, 0)}{' '}
							грн.
						</span>
					</AmountText>
				</ResultInfoCon>
				<ResultInfoCon style={{ marginTop: 58 }}>
					<BackButtonWr onClick={() => router.push('/')}>
						<IoChevronBackSharp style={{ marginRight: 12 }} />
						<span>Повернутись назад</span>
					</BackButtonWr>
					<BuyButton>Оплатити в момент</BuyButton>
				</ResultInfoCon>
			</BasketCont>
		</BasketWrapper>
	);
};

const BuyButton = styled.div`
	padding: 18px 24px;
	background-color: #fe5f1e;
	border-radius: 30px;

	font-size: 18px;
	font-weight: 700;
	color: white;

	cursor: pointer;

	&:hover {
		background: white;
		border: 1px solid #fe5f1e;
		color: #fe5f1e;
	}
`;

const BackButtonWr = styled.div`
	border: 1px solid #d3d3d3;
	border-radius: 30px;

	padding: 18px 24px;

	font-size: 18px;
	font-weight: 400;
	color: #d3d3d3;

	cursor: pointer;

	display: flex;
	align-items: center;

	&:hover {
		background-color: black;
		border-color: white;
	}

	&:hover > svg > path: {
		fill: white;
	}
`;

const ResultInfoCon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AmountText = styled.p`
	font-size: 22px;
	font-weight: 500;
`;

const BasketTitle = styled.p`
	font-size: 32px;
	font-weight: 700;
	padding-bottom: 30px;

	& > svg > path {
		stroke-width: 0.5px;
		fill: #3f3f3f;
	}

	& > svg {
		margin-right: 17px;
	}
`;

const BasketCont = styled.div`
	max-width: 820px;

	width: 100%;
`;

const BasketWrapper = styled.div`
	padding-top: 54px;
	padding-bottom: 131px;

	display: flex;
	justify-content: center;
`;
