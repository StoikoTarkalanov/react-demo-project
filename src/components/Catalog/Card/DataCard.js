import { Link } from 'react-router-dom';

const DataCard = ({ cardData }) => {
  return (
    <article className="data-card">
      <h1 className="data-card-title">Name: {cardData.firstName}</h1>
      <h1 className="data-card-title">
        Company Department: {cardData.company.department}
      </h1>
      <p className="data-card-text">Age: {cardData.age}</p>
      <p className="data-card-text">Gender: {cardData.gender}</p>
      <article className="data-card-img-container">
        <img src={cardData.image} alt="Something..." />
      </article>
      <Link to={`/edit/${cardData.id}`}>Edit</Link>
    </article>
  );
};

export default DataCard;
