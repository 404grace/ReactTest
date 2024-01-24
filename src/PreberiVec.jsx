export function PreberiVec(props) {
  return (
    <a href={props.href}>
      <button>Več o {props.children}</button>
    </a>
  );
}
