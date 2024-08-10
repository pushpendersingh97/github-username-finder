import PropTypes from 'prop-types';

const CardLayout = ({ children }) => {
  return (
    <div className="rounded-lg bg-custom-secondary py-4 px-8 my-4">
      {children}
    </div>
  );
};

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLayout;
