import React, { useState } from "react";
import Media  from "react-bootstrap/Media";
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

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
      await axiosRes.delete(`/comments/${id}/`);
      setReview((prevReview) => ({
        results: [
          {
            ...prevReview.results[0],
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
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={confirmDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
