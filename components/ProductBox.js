import styled from "styled-components"
import { useContext } from "react";
import { CartContext } from "./CartContext";


export const ProductWrapper = styled.div`
`;

const CardButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Card = styled.div`
  border-radius: 10px;
  border: solid 2px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  width: 120px;
  margin: 10px 10px 10px 0px;
  
`;

const CardImage = styled.img`
  max-height: 70%;
  max-width: 100%;
`;

const CardTitle = styled.div`
  align-items: center; 
  justify-content: center;
  font-size: .9rem;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default function ProductBox({_id, title, description, price, images}) {
  const { addProduct } = useContext(CartContext);
  
  return (
      <ProductWrapper>
        <CardButton onClick={() => addProduct(_id)}>
          <Card className="bg-highlight p-1">
            <CardImage src={images?.[0]} alt="" />
            <CardTitle>{title}</CardTitle>
          </Card>
        </CardButton>
      </ProductWrapper>   
  );
}
