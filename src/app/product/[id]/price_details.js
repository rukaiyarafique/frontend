export default function PriceDetails({ details }) {
  return (
    <>
      <div>
        <b>Name: </b>
        {details.name}
      </div>
      <div>
        <b>Price: </b>
        {details.price}
      </div>
      <div>
        <b>Size: </b>
        {details.size}
      </div>
      <div>
        <b>Gender: </b>
        {details.gender}
      </div>
    </>
  );
}
