import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-size: 1.4rem;
    background: White;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius:0.5rem;
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    padding: 0.1rem 0.3rem;
    cursor: pointer;
    margin: 0.1rem 0.5rem 0.1rem 0.5rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;