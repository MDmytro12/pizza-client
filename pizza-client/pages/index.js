import React from 'react';
import { HEADER_TITLES } from '../constants/meta';

import { Header, Menu, Assortement } from '../containers';
import HeadService from './_head';

import { Line } from '../components';

export default function Home() {
	return (
		<>
			<HeadService id={HEADER_TITLES.HOME_PAGE} />
			<Header />
			<Line />
			<Menu />
			<Assortement />
		</>
	);
}
