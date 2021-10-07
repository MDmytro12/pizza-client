import React from 'react';
import styled from 'styled-components';
import { BsCart2 } from 'react-icons/bs';
import Link from 'next/link';

export const HeaderView = () => {
	return (
		<HeaderContainer>
			<Link href="/">
				<a>
					<LogoContainer>
						<LogoImg src="/static/png/logo.png" />
						<LogoTitleContainer>
							<LogoTitle>реакт піцца</LogoTitle>
							<LogoSupTitle>найсмачніша піцца у всьому світі</LogoSupTitle>
						</LogoTitleContainer>
					</LogoContainer>
				</a>
			</Link>

			<ButtonContainer>
				<Link href="/">
					<a>
						<PriceName>520 ₽</PriceName>
					</a>
				</Link>

				<ButtonLine />

				<Link href="/">
					<a>
						<BasketContainer>
							<BsCart2 style={{ marginRight: 7 }} />
							<PriceName>3</PriceName>
						</BasketContainer>
					</a>
				</Link>
			</ButtonContainer>
		</HeaderContainer>
	);
};

const BasketContainer = styled.div`
	display: flex;

	&:hover > svg > path {
		fill: rgba(255, 255, 255, 0.5);
	}
`;

const ButtonLine = styled.div`
	width: 1px;
	background-color: rgba(255, 255, 255, 0.25);
	margin-left: 11px;
	margin-right: 11px;
`;

const PriceName = styled.p`
	color: white;
	font-weight: 700;
	font-size: 16px;
	height: 100%;

	&:hover {
		color: rgba(255, 255, 255, 0.5);
	}
`;

const ButtonContainer = styled.div`
	min-width: 150px;
	min-height: 50px;
	background-color: rgba(254, 95, 30, 1);
	border-radius: 30px;
	padding: 16px 25px;
	display: flex;

	& > a > div > svg > path {
		fill: white;
	}
	&:hover {
		background-color: #bb4e22;
		box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
	}
	&:hover > div {
		background-color: rgba(255, 255, 255, 0.7);
	}
`;

const LogoSupTitle = styled.p`
	color: rgba(123, 123, 123, 1);
	font-size: 14px;
	font-weight: 500;
`;

const LogoTitle = styled.p`
	font-weight: 600;
	font-size: 24px;
	text-transform: uppercase;
`;

const LogoTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 53px;
`;

const LogoImg = styled.img`
	position: absolute;
	top: 10%;
`;

const LogoContainer = styled.div`
	display: flex;
	position: relative;
`;

const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
