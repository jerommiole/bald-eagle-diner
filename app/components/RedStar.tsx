import Image from "next/image";

const RedStar = () => {
  return (
    <Image
      src="assets/icons/red-star.svg"
      alt="Red Star"
      width={24}
      height={24}
      priority
      className="w-[24px] h-[24px]"
    />
  );
};

export default RedStar;
