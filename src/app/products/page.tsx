import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const Products = async () => {
  const url = `${process.env.TEST_API}/products`;
  const products = await fetch(url, { cache: "no-store" }).then((res) =>
    res.json()
  );
  console.log(products);

  return (
    <>
      <div>
        {products.map((product: Product) => (
          <ProductView key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

const ProductView = (product: Product) => (
  <Card key={product.id}>
    <CardHeader>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{product.price}</p>
    </CardContent>
  </Card>
);

export default Products;
