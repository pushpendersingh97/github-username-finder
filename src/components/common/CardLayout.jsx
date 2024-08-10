import PropTypes from 'prop-types';

const CardLayout = ({ children }) => {
  return (
    <div className="rounded-lg bg-custom-secondary p-8">
      {children}
    </div>
  );
};

CardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardLayout;
