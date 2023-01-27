import image from './image.jpeg';

export const Banner = () => {
  return (
    <>
      <marquee
        scrollamount="20"
        behavior="scroll"
        direction="left"
        className="sale"
      >
        SALE - SALE - SALE - SALE - SALE - SALE - SALE - SALE
      </marquee>
      <img src={image} alt="banner" className="w-100" />
    </>
  );
};
