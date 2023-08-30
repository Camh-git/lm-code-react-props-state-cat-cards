interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

const CatCard: React.FC<CatCardProps> = (prop) => {
  /*console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    prop
  );*/
  return (
    <div className="card">
      <h3 className="card__text card__header">{prop.name}</h3>
      <p className="card__text">Species: {prop.species}</p>
      <p className="card__text">Favourite Food(s): {prop.favFoods}</p>
      <p className="card__text">Birth Year: {prop.birthYear}</p>
    </div>
  );
};
export default CatCard;
