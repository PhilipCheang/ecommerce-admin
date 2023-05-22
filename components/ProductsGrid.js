import styled from "styled-components";
import ProductBox from "@/components/ProductBox";
import Center from "./Center";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img{
    max-width: 100%;
    display: grid;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order:2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
      height: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function ProductsGrid({products}) {
  return (
    <Center>
      <ColumnsWrapper>
        <Column>
          <div>
            <StyledProductsGrid>
              {products?.length > 0 && products.map(product => (
                <ProductBox key={product._id} {...product} />
              ))}
            </StyledProductsGrid>
          </div>         
        </Column>       
      </ColumnsWrapper>
    </Center>
    
  );
}