import PropTypes from "prop-types";
import { PiBookmarksDuotone } from "react-icons/pi";


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
//   console.log(blog);

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
        <div className="flex items-center gap-2">
          <p className="text-gray-400">{read_time} Min Read</p>
          <button 
          onClick={() => handleAddToBookmark(blog)}
          className="text-3xl text-gray-500">
            <PiBookmarksDuotone />
          </button>
        </div>
      </div>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-5 text-gray-600">
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={() => handleMarkAsRead(read_time)}>Mark As read</button>
      <div className="border-b-2"></div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};
export default Blog;
