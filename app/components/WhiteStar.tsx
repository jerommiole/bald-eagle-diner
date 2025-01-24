import Image from "next/image";

const WhiteStar = () => {
  return (
    <Image
      src="assets/icons/white-star.svg"
      alt="White Star"
      width={24}
      height={24}
      priority
    />
  );
};

export default WhiteStar;
