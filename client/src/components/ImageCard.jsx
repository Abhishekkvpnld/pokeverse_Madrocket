import { Link } from "react-router-dom";

const ImageCard = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/pokeball.png"
        alt="PokéBall"
        className="w-10 h-10 animate-spin-slow"
      />
      <h1 className="text-white hidden md:block text-sm md:text-lg font-extrabold tracking-wide">
        PokéVerse
      </h1>
    </Link>
  );
};

export default ImageCard;
