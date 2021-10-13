import React from 'react';
import styled from 'styled-components';

import { PizzaItem } from './PizzaItem';

export const AssortementView = () => {
	const pizzaInfo = [
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/pizza_1.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Сирна',
			avatarPath: 'static/png/chees.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [[1, 2], [1]],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/p_3.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/p_4.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/pizza_1.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Сирна',
			avatarPath: 'static/png/chees.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [[1, 2], [1]],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/p_3.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
		{
			title: 'Чизбургер-піцца',
			avatarPath: 'static/png/p_4.png',
			type: 1,
			allTypes: [
				['тонке', 'традиційне'],
				['26 см.', '30 cм.', '40 см.'],
			],
			accesTypes: [
				[1, 2],
				[1, 2, 3],
			],
			activeTypes: [1, 1],
			diametr: 1,
			price: 395,
		},
	];

	return (
		<AssCont>
			<AssTitle>Всі піцци</AssTitle>
			<PizzaCont>
				{pizzaInfo.map((item, index) => (
					<PizzaItem
						noMarginEdge={(index + 1) % 4 === 1}
						pizzaInfo={item}
						key={index * 89}
					/>
				))}
			</PizzaCont>
		</AssCont>
	);
};

const PizzaCont = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	flex-wrap: wrap;
	justify-content: space-between;
`;

const AssTitle = styled.p`
	font-size: 32px;
	font-weight: 600;
	padding-top: 30px;
	padding-bottom: 35px;
`;

const AssCont = styled.div``;
