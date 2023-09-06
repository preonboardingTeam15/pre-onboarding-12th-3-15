import styled from 'styled-components';

export const StyledRecommendedSearch = styled.div`
	padding: 20px;

	span {
		font-weight: bold;
		color: #ffb6c1;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		margin: 5px 0;
		padding: 5px;
		cursor: pointer;
		transition: background-color 0.2s;

		&:hover {
			background-color: gray;
		}

		&.selected {
			background-color: lightblue; // 선택한 항목의 배경색을 원하는 색상으로 변경하세요.
		}
	}

	p {
		font-size: 20px;
		color: rgb(220, 220, 220);
	}
`;