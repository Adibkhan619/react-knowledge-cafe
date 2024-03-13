import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

function Bookmarks({ bookmarks, readingTime }) {

    return (
        <div className="w-1/3 rounded-lg p-5 bg-gray-100">
            <div className='bg-green-200 p-5 mb-5 rounded-lg'><h3 className="text-3xl">Reading Time: {readingTime}</h3></div>
               
            <h1 className="text-2xl font-bold px-5">Bookmarks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;