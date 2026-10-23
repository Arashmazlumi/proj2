import ProductCard from "./ProductCard";

function Products() {

  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      description: "Powerful laptop for developers",
      price: 1999,
      image: "https://picsum.photos/500/300?random=1"
    },

    {
      id: 2,
      name: "iPhone 17",
      description: "Powerful smartphone",
      price: 999,
      image: "https://picsum.photos/500/300?random=2"
    },

    {
      id: 3,
      name: "AirPods Pro",
      description: "Wireless headphones",
      price: 249,
      image: "https://picsum.photos/500/300?random=3"
    },

    {
      id: 4,
      name: "Apple Watch",
      description: "Smart watch for everyday life",
      price: 399,
      image: "https://picsum.photos/500/300?random=4"
    }
  ];

  return (
    <section className="products">

      <div className="section-header">

        <div>
          <p>Store</p>
          <h2>Latest Products</h2>
        </div>

        <button>
          View All
        </button>

      </div>

      <div className="products-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}

export default Products;