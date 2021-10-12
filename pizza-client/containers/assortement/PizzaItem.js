import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../assets/svg/plus.svg';

export const PizzaItem = ({ pizzaInfo }) => {
	return (
		<Cont>
			<PizzaAvatar src={pizzaInfo.avatarPath} />
			<PizzaName>{pizzaInfo.title}</PizzaName>
			<PizzaInfoCont>
				{pizzaInfo.allTypes[0].map((item, index) => (
					<PizzaInfoItem
						size={50}
						active={index + 1 === pizzaInfo.activeTypes[0]}
						key={index * 78}
					>
						{item}
					</PizzaInfoItem>
				))}
				{pizzaInfo.allTypes[1].map((item, index) => (
					<PizzaInfoItem
						size={30}
						key={index * 133}
						active={index + 1 === pizzaInfo.activeTypes[1]}
					>
						{item}
					</PizzaInfoItem>
				))}
			</PizzaInfoCont>
			<PizzaPriceName>від {pizzaInfo.price} ₽</PizzaPriceName>
			<PizzaButton>
				<img src={Plus} />
				Добавти
			</PizzaButton>
		</Cont>
	);
};

const PizzaButton = styled.div`
	border: 1px solid #eb5a1e;
	border-radius: 100px;
	padding: 12px 30px;
	position: absolute;
	color: #eb5a1e;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;

	bottom: -2%;
	right: 1%;

	&:hover {
		color: white;
		background-color: #eb5a1e;
	}
`;

const PizzaPriceName = styled.p`
	font-size: 22px;
	font-weight: 700;
	padding-top: 24px;
`;

const PizzaInfoItem = styled.p`
	width: ${({ size }) => (size === 50 ? '48% ; margin-bottom: 7px;' : '29%')};
	text-align: center;
	font-size: 14px;
	font-weight: 700;
	padding-top: 10px;
	padding-bottom: 10px;
	${({ active }) =>
		active
			? 'background: #FFFFFF; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04); border-radius: 5px;'
			: ''}
`;

const PizzaInfoCont = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: #f3f3f3;
	border-radius: 10px;
	width: 100%;
	justify-content: space-between;
	padding: 10px 15px;
`;

const PizzaName = styled.p`
	font-size: 20px;
	font-weight: 700;
	width: 100%;
	text-align: center;
	margin-bottom: 20px;
`;

const PizzaAvatar = styled.img``;

const Cont = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
`;
