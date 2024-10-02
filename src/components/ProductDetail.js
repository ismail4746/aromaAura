import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6 bg-black text-white">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover mt-4" />
      <p className="text-lg mt-4">{product.price}</p>
      <button
        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <Link to="/shop" className="block mt-4 text-gray-400">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
