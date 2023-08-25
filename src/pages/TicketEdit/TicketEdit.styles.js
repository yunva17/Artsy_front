import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const Container = styled.div`
    margin: 0 auto;
    padding: 0 3rem 0 2rem;

    ${({ theme }) => theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const TitleContainer = styled.div`
    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
        margin-bottom: 2rem;
    }
    ${({ theme }) => theme.media.tablet} {
        width: 50rem;
    }
`;

const CreateForm = styled.div`
    ${({ theme }) => theme.media.tablet} {
        width: 50rem;
    }
`;

const ImgContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 2rem 0;
`;

const ImgWrap = styled.div`
    overflow: hidden;
    display: block;
    position: relative;

    border: 1px solid #c5c5c5;
    border-radius: 10px;

    width: 30rem;
    height: 20rem;
    margin-right: 1rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const IconWrap = styled.div`
    cursor: pointer;

    width: 3rem;
    height: 3rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 16px;
`;

const ReviewInput = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 20rem;
    font-size: 16px;
    padding: 1.2rem 2.2rem;
    border-radius: ${(props) => (props.$rounded ? '100px' : '0')};
    border: 1px solid #c5c5c5;
    resize: none;
    overflow: hidden;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.point1};
        caret-color: ${({ theme }) => theme.colors.point1};
    }
`;

const ButtonContaienr = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem 0;
`;

const CreateButton = styled(Button)`
    font-size: 1.5rem;
`;

const MarginContainer = styled.div`
    margin-bottom: 3.5rem;
`;

export {
    Container,
    TitleContainer,
    CreateForm,
    ImgContainer,
    IconWrap,
    ImgWrap,
    ReviewContainer,
    Label,
    ReviewInput,
    ButtonContaienr,
    CreateButton,
    MarginContainer,
};
