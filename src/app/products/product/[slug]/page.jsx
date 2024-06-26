import Container from "@/components/Container";
import { fetchDataFromApi } from "../../../../../utils/api";
import Applications from "./components/Applications";
import Payload from "./components/Payload";
import ProductDetails from "./components/ProductDetails";

const fetchProductsDetails = async (slug) => {
  try {
    // noStore();
    const product = await fetchDataFromApi(
      `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );

    if (!product) {
      throw new Error("Products Not Found");
    }

    return product;
  } catch (error) {
    // Handle the error here or re-throw it to be handled by the component using this function
    throw new Error("Error fetching products: " + error.message);
  }
};

const Product = async ({ params }) => {
  const res = await fetchProductsDetails(params.slug);
  const product = res?.data[0];

  return (
    <div className="relative isolate z-0 pb-10 md:pb-20  mt-10 ">
      <>
        <Container>
          <ProductDetails data={product} />
        </Container>
      </>

      {/* VTOL */}

      {product?.attributes?.payload_image?.data && (
        <div className="content md:w-9/12 md:mx-auto mt-10">
          {/* Payload */}
          <Payload data={product} />
        </div>
      )}

      <Container>
        <Applications data={product} />
      </Container>
    </div>
  );
};

export default Product;
