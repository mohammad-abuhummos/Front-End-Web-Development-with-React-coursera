import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm"
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
function RenderComments({comments}) {
  // function formatDate(string) {
  //   var options = { year: "numeric", month: "long", day: "numeric" };
  //   return new Date(string).toLocaleDateString([], options);
  // }
  if (!!comments && !!comments.length)
    return (
      <div>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return(
            <ul key={comment.id} className="list-unstyled">
              <li>{comment.comment}</li>
              <li className="my-3">
                --{comment.author} <span>, 
                  {/* {formatDate(comment.date)} */}
                  </span>
              </li>
            </ul>
          );
       })} 
       <CommentForm/>
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
          <RenderComments comments={props.comments} />
        </div>
      </div>
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3> {props.dish.name}</h3>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default DishDetail;
