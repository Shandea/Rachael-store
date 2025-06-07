import React from 'react';

interface CardProps {
  title: string;
  price: string;
  description: string;
  imageUrl?: string;
  colors?: string[];
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  imageUrl,
  colors = [],
}) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow p-4 transition hover:shadow-md">
      {/* Image Section */}
      <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
      </div>

      {/* Title and Price */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-xl text-gray-800">{title}</h2>
        <span className="text-green-500 font-semibold">{price}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-3">{description}</p>

      {/* Color Options */}
      {colors.length > 0 && (
        <div className="mb-4">
          <span className="text-sm text-gray-500">Available Colors:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {colors.map((color, index) => (
              <span
                key={`${title}-color-${index}`}
                className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-xs"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Add to Cart Button */}
      <button
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg transition-colors"
        aria-label={`Add ${title} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
