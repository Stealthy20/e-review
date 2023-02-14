import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import CategoryBar from "./components/CategoryBar";
import ReviewCreateForm from "./pages/reviews/ReviewCreateForm";
import ReviewPage from "./pages/reviews/ReviewPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import ReviewEditForm from "./pages/reviews/ReviewEditForm";
import ProfilePage from "./pages/Profiles/ProfilePage";
import UsernameForm from "./pages/Profiles/UsernameForm";
import UserPasswordForm from "./pages/Profiles/UserPasswordFrom";
import ProfileEditForm from "./pages/Profiles/ProfileEditForm";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import { Fragment, useState } from "react";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const [filter, setFilter] = useState("");

  return (
    <div className={""}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <CategoryBar setFilter={setFilter} />
                <ReviewsPage
                  setFilter={setFilter}
                  filter={filter}
                  message="No results found. Adjust the search keyword."
                />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/keep/"
            render={() => (
              <ReviewsPage
                message="No results found. Adjust the search keyword or save a review."
                filter={`keep__owner__profile=${profile_id}&ordering=-keep__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/reviews/create"
            render={() => <ReviewCreateForm />}
          />
          <Route exact path="/reviews/:id" render={() => <ReviewPage />} />
          <Route
            exact
            path="/reviews/:id/edit"
            render={() => <ReviewEditForm />}
          />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
