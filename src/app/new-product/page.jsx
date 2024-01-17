import Container from "@/components/Container";
import ProductForm from "./componnets/ProductForm";

const NewProduct = () => {
  return (
    <div className="relative isolate z-0pb-10 md:pb-20 ">
      <main className="product-management">
        <article>
          <Container>
            <div className="flex items-center justify-center  ">
              <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md shadow-xl rounded-md">
                <ProductForm />
              </div>
            </div>
          </Container>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
