import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div>
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div></div>;
}
function RenderComments({ dish }) {
  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
  if (dish != null)
    return (
      <div>
        <h4>Comments</h4>
        {dish.comments.map((comment) => {
          if (comment != null)
            return (
              <ul key={comment.id} className="list-unstyled">
                <li>{comment.comment}</li>
                <li className="my-3">
                  --{comment.author} <span>, {formatDate(comment.date)}</span>
                </li>
              </ul>
            );
          else return <div></div>;
        })}
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};
export default DishDetail;
