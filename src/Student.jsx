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
export default Student;