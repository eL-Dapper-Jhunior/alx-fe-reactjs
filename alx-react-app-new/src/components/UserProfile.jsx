const UserProfile = (props) => {
    return (
        <div style={{
            backgroundColor:'navy',
            color:'white',
            padding:'5px',
            border:'1px solid white',
            borderRadius: "15px"
        }}>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>

    );
}


export default UserProfile;