const UserAccount = (props) => {
    console.log(props);
    return (
        <h3>Welcome to {props.match.params.name}</h3>
    )
}

export default UserAccount;