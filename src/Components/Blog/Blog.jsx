import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {id, cover_img, author, author_img , title , read_time, posting_date, hashtags } = blog;
    return (
        <div>
            {
                <img  src={cover_img} alt="" />
            <img  src={author_img} alt="" />
            }
            

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;