import { SearchButtonContainer, StyledBiSearch } from '../../styles/Button';

interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <SearchButtonContainer>
      <StyledBiSearch onClick={onClick} />
    </SearchButtonContainer>
  );
}
export default Button;
