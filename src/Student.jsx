import PropTypes from 'prop-types'
import profilePicture from './assets/pfp.jpg'
function Student(props)
{
    return(
        <>
            <div className="student">
                <img src={profilePicture} alt="profile picture" className="student-image" />
                <p>Name:{props.name}</p>
                <p>Age:{props.age}</p>
                <p>Student:{props.isStudent ? "Yes" : "No" }</p>
            </div>
        </>
    );
}

// proptypes : to check type of prop (string, int, etc...), errors will show in console incase of  failed prop type.

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student;