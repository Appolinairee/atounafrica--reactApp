import { BsStar, BsStarFill } from "react-icons/bs";

const CreatorStars = ({ number }) => {
   const renderStars = () => {
      const stars = [];
      const filledStars = Math.min(number, 5);

      for (let i = 0; i < filledStars; i++) stars.push(<BsStarFill className="text-primary" />);

      for (let i = filledStars; i < 5; i++) stars.push(<BsStar className="text-dark/20" />);

      return stars;
   };

   return <div className="flex w-fit items-center gap-[3px] color-primary text-[13px] fill-primary">{renderStars()}</div>;
};

export default CreatorStars;
