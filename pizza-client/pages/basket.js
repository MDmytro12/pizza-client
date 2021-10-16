import { HEADER_TITLES } from '../constants/meta';
import { Header, Basket } from '../containers';
import { Line } from '../components';
import HeadService from './_head';

export default function BasketPage() {
	return (
		<>
			<HeadService id={HEADER_TITLES.BASKET_PAGE} />
			<Header noBasket />
			<Line />
			<Basket />
		</>
	);
}
