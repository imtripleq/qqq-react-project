import { LineAxisOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filter, sort }) => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, SetFilteredProduct] = useState([]);

  useEffect(() => {
    console.log(products);
  }, [cat]);

  console.log(cat, filter, sort);
  return (
    <Container>
      {products.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
