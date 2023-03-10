import React from "react";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import  Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const ReviewFeed = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    keep_id,
    title,
    category,
    rating,
    image,
    updated_at,
    reviewPage,
    setReviews,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/reviews/${id}/edit`);
  };

  function useConfirm(message, onConfirm, onAbort) {
    const confirm = () => {
      if (window.confirm(message)) onConfirm();
      else onAbort();
    };
    return confirm;
  }

  const doDelete = () => handleDelete();
  const handleAbort = () => handleCancel();
  const confirmDelete = useConfirm("Do you want to delete?", doDelete, handleAbort);

  const handleCancel = () => {
    useConfirm.close();
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/reviews/${id}/`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    }
  };

  const handleKeep = async () => {
    try {
      const { data } = await axiosRes.post("/keep/", { review: id });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id ? { ...review, keep_id: data.id } : review;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnkeep = async () => {
    try {
      await axiosRes.delete(`/keep/${keep_id}/`);
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id ? { ...review, keep_id: null } : review;
        }),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Review}>
      <Card.Body>
        <Media className="align-items-center justify-content-between text-capitalize font-weight-bold">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && reviewPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={confirmDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/reviews/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {category && (
          <Card.Title className="text-center">Category: {category}</Card.Title>
        )}
        {rating && (
          <Card.Title className="text-center">
            Rating: {rating} <i className={`fas fa-star ${styles.Rating}`} />
          </Card.Title>
          
        )}
        

        <div className={styles.ReviewBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't save your own review!</Tooltip>}
            >
              <i className="fas fa-floppy-disk" />
            </OverlayTrigger>
          ) : keep_id ? (
            <span onClick={handleUnkeep}>
              <i className={`fas fa-floppy-disk ${styles.Keep}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleKeep}>
              <i className={`fas fa-floppy-disk ${styles.KeepOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to save Reviews!</Tooltip>}
            >
              <i className="fas fa-floppy-disk" />
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ReviewFeed;
