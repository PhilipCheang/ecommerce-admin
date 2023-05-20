import styled from "styled-components";

const StyledDiv= styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

// how to center the nav using children props
export default function Center({children}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}