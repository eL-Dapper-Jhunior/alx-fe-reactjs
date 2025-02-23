const UserProfile = (props) => {
    return (
        <div style={{
            backgroundColor:'navy',
            color:'white',
            margin:"10px",
            padding:'10px',
            border:'1px solid gray',
            borderRadius: "15px"
        }}>
            <h2 style={{
                color:'white'
            }}>{props.name}</h2>
            <p >Age: <span style={{fontWeight:'bold'}}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>

    );
}


export default UserProfile;