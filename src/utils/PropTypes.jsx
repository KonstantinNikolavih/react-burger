import PropTypes from "prop-types";

export const PropTypesData = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  /* data: PropTypes.arrayOf(PropTypesData).isRequired, */
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
});

export default PropTypesData;
