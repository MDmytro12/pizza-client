import styled from 'styled-components';

export const PageLayout = ({ children }) => {
	return (
		<PageWrapper>
			<PageContainer>{children}</PageContainer>
		</PageWrapper>
	);
};

const PageContainer = styled.div`
	background-color: white;
	font-family: 'Proxima';
	font-weight: 500;
	border-radius: 10px;
	width: 95%;
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
	padding-top: 50px;
	padding-left: 65px;
	padding-right: 65px;
`;

const PageWrapper = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffdf8c;

	padding-top: 35px;
	padding-bottom: 35px;
`;
