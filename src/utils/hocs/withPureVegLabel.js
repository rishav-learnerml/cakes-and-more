const withPureVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 px-2 py-1 bg-green-500 text-white rounded-md">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default withPureVegLabel;
