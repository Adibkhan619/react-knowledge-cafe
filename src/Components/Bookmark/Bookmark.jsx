import PropTypes from 'prop-types';

const Bookmark = ({bookmark }) => {
    const {title} = bookmark;

    return (
        <div>
         
            {<div className='rounded-lg p-5 m-5 bg-white'>
                 <h2 className='text-xl font-semibold '>{title}</h2>
            </div>
               }
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    
}
export default Bookmark;
