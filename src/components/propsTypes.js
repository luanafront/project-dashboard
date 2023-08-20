import PropTypes from "prop-types";

export const infoPropType = PropTypes.shape({
  tier: PropTypes.shape({
    color: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    tier: PropTypes.string.isRequired
  }).isRequired,
  publishedAt: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  valuation: PropTypes.number.isRequired,
  centimeter: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  font: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  newsTitle: PropTypes.string.isRequired,
  news: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  additionalTags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
  }).isRequired).isRequired
}).isRequired
