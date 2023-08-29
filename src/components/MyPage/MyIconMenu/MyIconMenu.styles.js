import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const IconButton = styled(Link)`
    /* 초기화 */
    outline: none;
    border: 0px;
    margin: 0px;
    appearance: none;
    cursor: pointer;
    text-decoration: none;

    /* 공통 스타일 */
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 0.8rem;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: 1px 1px 10px 10px rgba(0, 0, 0, 0.02);
    background-color: #fff;

    /* 아이콘 */
    &:before {
        content: '';
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        box-sizing: border-box;
        background-color: #eee;
        background-image: url(${({ $imgUrl }) => $imgUrl});
        background-repeat: no-repeat;
        background-size: 60%;
        background-position: center;
    }

    /* 버튼명 */
    > span {
        margin-top: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.text};
        color: ${({ theme }) => theme.colors.black};
    }
`;

const IconMenu = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 4rem;
`;

export { IconButton, IconMenu };
