import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Review from "./Review";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

function ReviewsPage({ message, filter = "", profile_id, setFilter}) {
  const [reviews, setReviews] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();


  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        console.log(filter);
        const { data } = await axiosReq.get(
          `/reviews/?${filter}search=${query}`
        );
        setReviews(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchReviews();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [filter, query, pathname]);

  return (
    <Row className="">
      <Col className="" lg={8}>
      <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search reviews"
          />
        </Form>

        {hasLoaded ? (
          <>
            {reviews.results.length ? (
              <InfiniteScroll
                children={reviews.results.map((review) => (
                  <Review key={review.id} {...review} setReviews={setReviews} />
                ))}
                dataLength={reviews.results.length}
                loader={<Asset spinner />}
                hasMore={!!reviews.next}
                next={() => fetchMoreData(reviews, setReviews)}
              />
            ) : (
              <Container className={""}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={""}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default ReviewsPage;
