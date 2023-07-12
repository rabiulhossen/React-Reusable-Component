
const Button = ({ name, onClick, className, style, variant }) => {
     return (
          <button
               onClick={onClick}
               className={className}
               style={style}
               variant={variant}
          >
               {name}
          </button>
     );
};

export default Button;
