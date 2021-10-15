import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const PizzaItem = ({ pizzaInfo, noMarginEdge }) => {
	const [pizzaInfoState, setPizzaInfo] = useState(pizzaInfo);

	const onTypeHandler = (index) => {
		setPizzaInfo({
			...pizzaInfoState,
			activeTypes: [index, pizzaInfoState.activeTypes[1]],
		});
	};

	const onSizeHandler = (index) => {
		setPizzaInfo({
			...pizzaInfoState,
			activeTypes: [pizzaInfoState.activeTypes[0], index],
		});
	};

	return (
		<Cont>
			<PizzaAvatar src={pizzaInfoState.avatarPath} />
			<PizzaName>{pizzaInfoState.title}</PizzaName>
			<PizzaInfoCont>
				{pizzaInfoState.allTypes[0].map((item, index) => (
					<PizzaInfoItem
						onClick={() => onTypeHandler(index + 1)}
						size={50}
						active={index + 1 === pizzaInfoState.activeTypes[0]}
						key={index * 78}
					>
						{item}
					</PizzaInfoItem>
				))}
				{pizzaInfoState.allTypes[1].map((item, index) => (
					<PizzaInfoItem
						onClick={() => {
							if (pizzaInfoState.accesTypes[1].includes(index + 1)) {
								onSizeHandler(index + 1);
							}
						}}
						size={30}
						key={index * 133}
						active={index + 1 === pizzaInfoState.activeTypes[1]}
						hide={!pizzaInfoState.accesTypes[1].includes(index + 1)}
					>
						{item}
					</PizzaInfoItem>
				))}
			</PizzaInfoCont>
			<PizzaPriceName>від {pizzaInfoState.price} грн.</PizzaPriceName>
			<PizzaButton>
				<FaPlus size={13} />
				<span>Добавти</span>
				<PizzaCount className="pizza-count">
					<span>2</span>
				</PizzaCount>
			</PizzaButton>
		</Cont>
	);
};

const PizzaCount = styled.div`
	width: 22px;
	height: 22px;
	background-color: #eb5a1e;
	border-radius: 100px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: white;
	font-size: 13px;
	font-weight: 700;

	margin-left: 10px;
`;

const PizzaButton = styled.div`
	border: 1px solid #eb5a1e;
	border-radius: 100px;
	padding: 12px 30px;
	position: absolute;
	color: #eb5a1e;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;

	display: flex;
	align-items: center;

	bottom: -2%;
	right: 1%;

	&:hover {
		color: white;
		background-color: #eb5a1e;
	}

	& > span {
		margin-left: 8px;
	}

	&: hover > .pizza-count {
		background-color: white;
		color: #eb5a1e;
	} ;
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
	color: ${({ hide }) =>
		hide ? 'rgba(0,0,0,0.4 )' : 'black ; cursor: pointer'};
	padding-bottom: 10px;
	${({ active }) =>
		active
			? 'background: #FFFFFF; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04); border-radius: 5px;'
			: ''}
	${({ hide }) =>
		hide
			? ''
			: '&:hover{ background-color: #FFFFFF; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04); border-radius: 5px;	 }'}
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
	width: 21.5%;
	margin-bottom: 60px;
	${({ edge }) => (!edge ? 'margin-left: 35px;' : '')}
`;
