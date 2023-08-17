import './styles/Text.sass'
import PropTypes from "prop-types";
import {Icon} from "../atoms/Icon.jsx";

export const Text = ({isBold, collapse, children, icon, className}) => {
  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
  }

  if (collapse) {
    let newChildren = children.slice(0, collapse)

    if (newChildren.length < children.length) {
      newChildren += '...'
    }
    children = newChildren
  }

  return (
		<div className='textBox' >
			{
				icon && (
					<div className='text__icon'>
						<Icon icon={icon}/>
					</div>
				)
			}
			<p className={`text ${className}`} style={style}>
				{children}
			</p>
		</div>
  )
}

Text.propTypes = {
  isBold: PropTypes.bool,
  collapse: PropTypes.number,
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
}
