import Header from "../layouts/Header";
import StyledInner from "../layouts/StyledInner.style";
import AddProduct from "../components/addItem/AddProduct";
import Footer from "../layouts/Footer.tsx";

const AddItem = () => {
  return (
    <>
      <Header />
      <StyledInner>
        <AddProduct />
      </StyledInner>
      <Footer />
    </>
  );
};

export default AddItem;
