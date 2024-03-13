import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);

  const {
    id,
    cover_img,
    author,
    author_img,
    title,
    read_time,
    posting_date,
    hashtags,
  } = blog;

  return (
    <div className="space-y-5 my-20">
      <img src={cover_img} alt=""></img>

      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <img className="w-[50px] rounded-full" src={author_img} alt=""></img>
          <div>
            <h2 className="font-bold text-2xl">{author}</h2>
            <p className="text-gray-400">{posting_date}</p>
          </div>
        </div>
        <p className="text-gray-400">{read_time} Min Read</p>
      </div>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => <span key={idx} className="mr-5 text-gray-600"><a href="">{hash}</a></span>)
        
        
        }</p>
      <a href="">Mark as read</a>
      <div className="border-b-2"></div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
