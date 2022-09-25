import { loadGetInitialProps } from "next/dist/shared/lib/utils";

function Card(props) {
  return(
    <div class="card">
      <div class="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
