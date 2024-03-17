import ErrorMessage from './ErrorMessage';

const InputField = ({
    type,
    placeholder,
    name,
    value,
    onChange,
    error,
    icon,
 }) => {
    return (
       <>
          {error && <ErrorMessage text={error} />}
          <div className="bg-red px-3 py-2 flex items-center justify-center relative bg-light text-dark rounded-[8px] mb-3">
             <p className="absolute top-1/2 left-3 text-[17px] -translate-y-1/2">
                {icon}
             </p>
 
             <input
                className="pl-6 w-full placeholder:text-dark/70"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required
             />
          </div>
       </>
    );
 };

export default InputField;