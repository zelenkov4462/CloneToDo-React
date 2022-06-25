export default class PostChangeService {
  static changeStatus(posts, post) {
    const newPosts = posts.map((p) => {
      if (post.id === p.id) {
        return {
          ...post,
          status: !post.status,
        };
      }
      return p;
    });
    return newPosts;
  }

  static changeLike(posts, post) {
    const newPosts = posts.map((p) => {
      if (post.id === p.id) {
        return {
          ...post,
          like: !post.like,
        };
      }
      return p;
    });
    return newPosts;
  }
}
