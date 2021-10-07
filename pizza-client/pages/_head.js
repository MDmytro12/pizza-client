import Head from 'next/head';

const HeadService = ({ id }) => {
	return (
		<Head>
			<title>{id}</title>
		</Head>
	);
};

export default HeadService;
