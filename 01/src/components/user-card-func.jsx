import "../styles/main.css";

export default function UserCard(props) {
    const { id, name, age, phoneNumber, address } = props;

    return (
        <article className="user-card" aria-labelledby={id}>
            <h2 id={id} className="user-name">
                {name}
            </h2>
            <dl className="user-info">
                <div>
                    <dt>나이</dt>
                    <dd>{age}</dd>
                </div>
                <div>
                    <dt>전화번호</dt>
                    <dd>{phoneNumber}</dd>
                </div>
                <div>
                    <dt>주소</dt>
                    <dd>{address}</dd>
                </div>
            </dl>
        </article>
    );
}
