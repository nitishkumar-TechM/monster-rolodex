import Card from "../card/card";
import "./cardList.style.css";

const CardList = ({ monsters, loader }) => {
  return (
    <>
      {monsters.length > 0 && (
        <div className="card-list">
          {monsters.map(({ name, email, id }, idx) => {
            return (
              <Card key={`${name}-${idx}`} name={name} email={email} id={id} />
            );
          })}
        </div>
      )}

      <div className="error-message">
        {monsters.length === 0 && !loader && (
          <h2>Zero monsters detected. Change the frequency and try again!</h2>
        )}
      </div>
    </>
  );
};

export default CardList;
