export const RandomButton = ({ onAddColor }) => {
    return (
        <div className="button-div">
            <button onClick={onAddColor} className="random-button">
                Generate random color ✨
            </button>
        </div>
    );
};



