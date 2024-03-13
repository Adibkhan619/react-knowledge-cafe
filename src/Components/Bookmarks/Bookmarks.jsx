import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {


    return (
        <div className="w-1/3">
            <h1 className="text-2xl">Bookmarks: {bookmarks.length}</h1>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;