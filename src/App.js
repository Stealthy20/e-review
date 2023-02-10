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


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <CategoryBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <h1>Home Page</h1>
              // <ReviewsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <h1>Saved Reviews</h1>
              // <ReviewsPage
              //   message="No results found. Adjust the search keyword or follow a user."
              //   filter={`owner__followed__owner__profile=${profile_id}&`}
              // />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/reviews/create" render={() => <ReviewCreateForm />} />
          <Route exact path="/reviews/:id" render={() => <ReviewPage />} />
          {/* <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} /> */}
          {/* <Route exact path="/profiles/:id" render={() => <ProfilePage />} /> */}
          {/* <Route
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
          /> */}

          <Route render={() => <p>Page not found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
