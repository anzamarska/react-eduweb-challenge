import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: yellow;
  padding: ${({ padding }) => padding || '13px'};
  border: none;
  border-radius: 5rem;
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
      font-size: 1.2rem;
    `}
`;

export default Button;

//it is possible do it without import css and that second part:
// background-color: ${(props) => (props.secondary ? 'grey' : 'yellow')};
// could be only secondary if we have one props

//if we wanna add props with value we could give it like nameOfWhatWeWannaChange="value" and in component:
//${({ padding }) => padding || '13px'}
