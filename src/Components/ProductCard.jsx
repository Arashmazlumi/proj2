function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="product-bottom">

          <strong>
            ${product.price}
          </strong>

          <button>
            View
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;