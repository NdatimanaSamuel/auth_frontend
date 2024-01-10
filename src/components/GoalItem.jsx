import PropTypes from "prop-types"; // Import PropTypes

function GoalItem({ goal }) {
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
}

// Add prop type validation
GoalItem.propTypes = {
  goal: PropTypes.shape({
    createdAt: PropTypes.string.isRequired, // Ensure createdAt is a string and is required
    text: PropTypes.string.isRequired, // Ensure text is a string and is required
    // Add other properties if necessary
  }).isRequired,
};

export default GoalItem;
