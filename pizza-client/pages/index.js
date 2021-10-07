import React from 'react';
import { HEADER_TITLES } from '../constants/meta';

import { Header } from '../containers/header';
import HeadService from './_head';

export default function Home() {
	return (
		<>
			<HeadService id={HEADER_TITLES.HOME_PAGE} />
			<Header />
		</>
	);
}
