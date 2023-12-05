import "./button.css";

function Button({buttonClass, buttonContent, buttonIcon}) {
  return (
    <button className={buttonClass}>
        { buttonIcon }
        <p> {buttonContent} </p>
    </button>
  )
}

export default Button;