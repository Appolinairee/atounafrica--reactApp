import { ImSpinner6 } from "react-icons/im";

const LoadingButton = ({ text, loading }) => {
   return (
      <button
         type="submit"
         className="!text-center flex gap-2 w-fit font-semibold  text-light mx-auto"
         disabled={loading}
      >
         {loading ? <ImSpinner6 className="animate-spin" /> : null}
         {loading ? "En cours..." : text}
      </button>
   );
};

export default LoadingButton;
