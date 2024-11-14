import styled from "styled-components";

type TypeProps = {
  type: string;
};

const StyleProduct = styled.li<TypeProps>`
  width: ${(props) => {
    switch (props.type) {
      case "BEST":
        return "282px";
      case "ALL":
        return "221px";
    }
  }};

  @media (max-width: 1200px) {
    width: ${(props) => {
      switch (props.type) {
        case "BEST":
          return "49.2%";
        case "ALL":
          return "31.75%";
      }
    }};
  }

  @media (max-width: 744px) {
    width: ${(props) => {
      switch (props.type) {
        case "BEST":
          return "100%";
        case "ALL":
          return "48.8%";
      }
    }};
  }
`;

export default StyleProduct;
