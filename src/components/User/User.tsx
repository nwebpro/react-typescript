type UserProps = {
    name: string;
    email: string;
    age: number;
    isRegistered: boolean;
}

const User = (props: UserProps) => {
    return (
        <div>
            <h2>{ props.name }</h2>
            <p>{ props.email }</p>
            <p>{ props.age } years old</p>
            <p>{ props.isRegistered ? "Registered" : "Not Registered" }</p>
        </div>
    );
};

export default User;