import './button.styles.scss'

 export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
};

const Button = ({ childern, buttonType, ...otherProps }) => {
  return (
    <input
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps} value = {otherProps.label}
    >
      {childern}
    </input>
  );
};

export default Button;
