const UnderConstructionBanner = () => {
  return (
    <div className="bg-primary py-2 [&>*]:text-white [&>*]:text-center animate-pulse">
      <div className="container">
        <p className="text-sm md:text-lg font-semibold">Under Construction</p>
      </div>
    </div>
  );
};

export default UnderConstructionBanner;
