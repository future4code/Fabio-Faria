export const goToSignup = (history) => {
  history.push("/signup");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToPost = (history, post) => {
  history.push(`/posts/${post}/comments`);
};
