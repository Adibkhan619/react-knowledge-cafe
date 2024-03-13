import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(setBookmarks);
  };

  const handleMarkAsRead = (time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex mt-10 gap-10">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
