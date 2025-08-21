import userInfo from "./data/user.json";
import UserCard from "./components/user-card-func";
import "./styles/main.css";

export default function App() {
    return (
        <section className="demo">
            <h1>UserCard 커스텀 컴포넌트</h1>
            <div className="user-card-container">
                {userInfo.map((userInfo) => (
                    <UserCard
                        key={userInfo.id}
                        name={userInfo.name}
                        age={userInfo.age}
                        phoneNumber={userInfo.phoneNumber}
                        address={userInfo.address}
                    />
                ))}
            </div>
        </section>
    );
}
