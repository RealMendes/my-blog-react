import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

import PropTypes from "prop-types";

const PostDetail = ({ post }) => {
    return (
        <div className={styles.post_detail}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p className={styles.createdby}>por: {post.createdBy}</p>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <Link to={`/posts/${post.id}`} className="btn btn-outline">
            Ler
          </Link>
        </div>
      );
};

PostDetail.propTypes = {
    post: PropTypes.object.isRequired,
};


export default PostDetail;