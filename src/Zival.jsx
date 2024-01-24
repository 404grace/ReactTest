import { PreberiVec } from "./PreberiVec";

export function Zival(props) {
  console.log(props);
  const { name, desc, url, image } = props.data;
  return (
    <>
      <div className="zival">
        <img src={image} />
        <h2>{name}</h2>
        <p>{desc}</p>
        <PreberiVec href={url}>{name}</PreberiVec>
      </div>
    </>
  );
}
