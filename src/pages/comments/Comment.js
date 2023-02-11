import React, { useState } from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

const Comment = (props) => {
    const {
      profile_id,
      profile_image,
      owner,
      updated_at,
      content,
      id,
      setReview,
      setComments,
    } = props;
  
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  
    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/comments/${id}/`);
        setReview((prevReview) => ({
          results: [
            {
              ...prevReview.results[0],
              comments_count: prevReview.results[0].comments_count - 1,
            },
          ],
        }));
  
        setComments((prevComments) => ({
          ...prevComments,
          results: prevComments.results.filter((comment) => comment.id !== id),
        }));
      } catch (err) {}
    };

    return (
        <div>
          <hr />
          <Media>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} />
            </Link>
            <Media.Body className="align-self-center ml-2">
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
              <p>{content}</p>
            </Media.Body>
            {is_owner && (
              <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
            )}
          </Media>
        </div>
      );
    };
    

export default Comment;
