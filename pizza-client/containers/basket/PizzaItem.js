import React from 'react';
import styled from 'styled-components';

import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';

export const PizzaItem = ({ pizzaInfo, last }) => {
	return (
		<>
			<PizzaItemCont>
				<PizzaAvatar src={pizzaInfo.imgPath} />
				<PizzaItemTitle>
					{pizzaInfo.title} <br />{' '}
					<span>
						{pizzaInfo.type} , {pizzaInfo.size}
					</span>{' '}
				</PizzaItemTitle>

				<PizzaCountCont>
					<ButtonWrapper>
						<HiMinusSm />
					</ButtonWrapper>
					<PizzaCountText>2</PizzaCountText>
					<ButtonWrapper>
						<HiPlusSm />
					</ButtonWrapper>
				</PizzaCountCont>

				<PriceText>{pizzaInfo.price} грн.</PriceText>

				<DeleteWrapper>
					<GrFormClose />
				</DeleteWrapper>
			</PizzaItemCont>
			{!last && <Line />}
		</>
	);
};

const DeleteWrapper = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 100px;
	border: 2px solid #d7d7d7;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-left: 90px;

	& > svg > path {
		stroke: #d7d7d7;
	}

	&:hover {
		background-color: black;
		border-color: white;
	}

	&:hover > svg > path {
		stroke: white;
	}
`;

const PriceText = styled.p`
	font-size: 22px;
	font-weight: 700;
	text-align: center;
	margin-left: 90px;
`;

const PizzaCountText = styled.p`
	font-size: 22px;
	font-weight: 700;
	text-align: center;
	padding-top: 3px;
	padding-left: 12px;
	padding-right: 12px;
`;

const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: #f4f4f4;
`;

const ButtonWrapper = styled.div`
	width: 32px;
	height: 32px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid #fe5f1e;
	border-radius: 100px;

	& > svg > path {
		fill: #fe5f1e;
	}

	&:hover {
		border-color: white;
		background-color: #fe5f1e;
	}

	&:hover > svg > path {
		fill: white;
	}
`;

const PizzaCountCont = styled.div`
	display: flex;
`;

const PizzaItemTitle = styled.p`
	font-weight: 700;
	font-size: 22px;
	margin-left: 15px;
	margin-right: 120px;

	& > span {
		color: #8d8d8d;
		font-size: 18px;
		font-weight: 400;
	}
`;

const PizzaAvatar = styled.img`
	max-width: 80px;
	max-height: 80px;
	width: 100%;
	height: 100%;
`;

const PizzaItemCont = styled.div`
	display: flex;
	align-items: center;
	padding-top: 30px;
	padding-bottom: 30px;
`;
