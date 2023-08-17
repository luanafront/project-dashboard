import './styles/Tag.sass'
import PropTypes from "prop-types";

const getStyles = (variant, color) => {
  const primaryStyle = {
    backgroundColor: color,
    color: '#fff',
    border: `1px solid ${color}`
  }
  const secondaryStyle = {
    backgroundColor: `${color}55`,
    color: color,
    border: `1px solid ${color}`
  }

  const styles = {
    primary: primaryStyle,
    secondary: secondaryStyle
  }

  return styles[variant] || primaryStyle
}

export const Tag = ({children, color, variant}) => {
  const styles = getStyles(variant, color)
  return (
    <div className='tag' style={styles}>
      <p className='tag__label'>{children.toUpperCase()}</p>
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary'])
}
