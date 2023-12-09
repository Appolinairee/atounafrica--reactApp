import "./button.css";

function Button({buttonClass, buttonContent, buttonIcon}) {
  return (
    <button className={buttonClass}>
        <p> {buttonContent} </p>
        { buttonIcon }
    </button>
  )
}

export default Button;