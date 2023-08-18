import PropTypes from "prop-types";

export const infoPropType = PropTypes.shape({
  tier: PropTypes.shape({
    color: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired
  }).isRequired,
  publishedAt: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  commentTitle: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
  }).isRequired).isRequired
}).isRequired
