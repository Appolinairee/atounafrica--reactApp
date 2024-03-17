const ErrorMessage = ({ text }) => {
    return (
       <div className=" bg-red-100 rounded-[4px] px-2 text-dark text-[13px]">
          {text}
       </div>
    );
 };

export default ErrorMessage;