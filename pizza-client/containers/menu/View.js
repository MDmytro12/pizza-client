import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const MenuView = () => {
	const btnNames = [
		{
			title: 'Всі',
			href: '#',
		},
		{
			title: "М'ясні",
			href: '#',
		},
		{
			title: 'Вегетаріанська',
			href: '#',
		},
		{
			title: 'Гриль',
			href: '#',
		},
		{
			title: 'Гострі',
			href: '#',
		},
		{
			title: 'Закриті',
			href: '#',
		},
	];

	const listValues = [
		{
			title: 'популярності',
		},
		{
			title: 'за ціною',
		},
		{
			title: 'за алфавітом',
		},
	];

	let empty_object = {};

	const [activeBtn, setActiveBtn] = useState(empty_object);

	const [selectItems, setSelectItems] = useState(empty_object);

	const [showSelect, setShowSelect] = useState(false);

	useEffect(() => {
		btnNames.forEach((item, index) => {
			if (index + 1 === 1) {
				empty_object = { ...empty_object, [index + 1]: true };
				return;
			}
			empty_object = { ...empty_object, [index + 1]: false };
		});

		setActiveBtn(empty_object);

		empty_object = {};

		listValues.forEach((item, index) => {
			if (index + 1 === 1) {
				empty_object = { ...empty_object, [index + 1]: true };
				return;
			}
			empty_object = { ...empty_object, [index + 1]: false };
		});

		setSelectItems(empty_object);
	}, []);

	const onMenuButtonClick = (index) => {
		setActiveBtn({ ...empty_object, [index]: true });
	};

	const onSelectItem = (item, index) => {
		const newSelectItems = {};
		for (let key in selectItems) {
			newSelectItems[key] = false;
		}

		setSelectItems({ ...newSelectItems, [index]: true });
	};

	return (
		<MenunContainer>
			<ButtonContainer>
				{btnNames.map((item, index) => (
					<Link key={index * 129} href={item.href}>
						<MenuButton
							onClick={() => onMenuButtonClick(index + 1)}
							active={activeBtn[index + 1]}
						>
							{item.title}
						</MenuButton>
					</Link>
				))}
			</ButtonContainer>

			<ListContainer
				onPointerEnter={() => {
					setShowSelect(true);
				}}
			>
				<ListArrow active={showSelect} />
				<ListTitle>Сортування по :</ListTitle>
				<ListValue>{listValues[0].title}</ListValue>
				<ListSelectContainer
					onPointerLeave={() => setShowSelect(false)}
					show={showSelect}
				>
					{listValues.map((item, index) => (
						<SelectValue
							onClick={() => onSelectItem(item, index + 1)}
							active={selectItems[index + 1]}
							key={index * 99}
						>
							{item.title}
						</SelectValue>
					))}
				</ListSelectContainer>
			</ListContainer>
		</MenunContainer>
	);
};

const SelectValue = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: ${({ active }) => (active ? ' rgba(254, 95, 30, 1)' : 'black')};
	background-color: ${({ active }) =>
		active ? ' rgba(254, 95, 30, 0.05)' : 'white'};
	min-width: 130px;
	padding-top: 10px;
	padding-left: 14px;
	padding-bottom: 10px;
	cursor: pointer;

	&:hover {
		color: rgba(254, 95, 30, 1);
		background-color: rgba(254, 95, 30, 0.05);
	}
`;

const ListSelectContainer = styled.div`
	display: ${({ show }) => (show ? 'flex' : 'none')};
	flex-direction: column;
	position: absolute;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
	background-color: white;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: 10px;
	top: 138.2%;
	left: 57%;
`;

const ListValue = styled.span`
	font-size: 14px;
	color: #fe5f1e;
	border-bottom: 1px dashed #fe5f1e;
`;

const ListArrow = styled.div`
	width: 0;
	height: 0;
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;

	border-bottom: 5px solid #2c2c2c;

	margin-right: 6px;

	transform: ${({ active }) => (active ? 'rotate(180deg)' : 'ratate(0deg)')};
`;

const ListTitle = styled.p`
	color: #2c2c2c;
	font-size: 14px;
	font-weight: 600;
	margin-right: 10px;
`;

const ListContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
`;

const MenuButton = styled.a`
	font-size: 16px;
	width: 100%;
	font-weight: 600;
	background-color: ${({ active }) => (active ? '#2c2c2c' : '#f9f9f9')};
	padding: 15px 30px;
	color: ${({ active }) => (active ? '#f9f9f9' : '#2c2c2c')};
	border-radius: 30px;
	margin-right: 20px;
	cursor: pointer;

	&:hover {
		color: white;
		background-color: #282828;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MenunContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
