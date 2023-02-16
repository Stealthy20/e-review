import React from "react";
import styles from "../../styles/Review.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Review = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    keep_id,
    title,
    category,
    rating,
    content,
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
      if(window.confirm(message))
        onConfirm();
      else
        onAbort();
    }
    return confirm
  }

  const doDelete = () => handleDelete();
  const handleAbort = () => handleCancel();
  const confirmDelete = useConfirm(
    'Sure?',
    doDelete,
    handleAbort,
  );

  const handleCancel = () =>{
    useConfirm.close();
  }

  
  const handleDelete = async () => {
  
      try {
       
        await axiosRes.delete(`/reviews/${id}/`);
        history.goBack();
        
      } catch (err) {
        console.log(err);
      }
  };
  

  const handleKeep = async () => {
    try {
      const { data } = await axiosRes.post("/keep/", { review: id });
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, keep_id: data.id }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnkeep = async () => {
    try {
      await axiosRes.delete(`/keep/${keep_id}/`);
      setReviews((prevReviews) => ({
        ...prevReviews,
        results: prevReviews.results.map((review) => {
          return review.id === id
            ? { ...review, keep_id: null }
            : review;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Review}>
      <Card.Body>
        <Media className="">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="">
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
        {title && <Card.Title className="">{title}</Card.Title>}
        {category && <Card.Title className="">{category}</Card.Title>}
        {rating && <Card.Title className="">{rating} <i className="fas fa-star "/></Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
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

export default Review;