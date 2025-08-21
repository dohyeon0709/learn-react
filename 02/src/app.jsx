import SvgIcon from "./components/svg-icon/svg-icon";
import UploadButton from "./components/upload-button/upload-button";
import "./components/svg-icon/style.css";
import "./components/upload-button/style.css";

export default function App() {
    return (
        <section>
            <h1>상태가 없는 컴포넌트</h1>
            <br />
            <hr />
            <br />
            <SvgIcon type="up-arrow" />
            <SvgIcon type="spinner" />
            <SvgIcon type="check-mark" />
            <SvgIcon type="cross" />
            <SvgIcon type="not-allowed" />
            <br />
            <hr />
            <br />
            <UploadButton />
            <UploadButton status="loading" />
            <UploadButton status="resolved" />
            <UploadButton status="rejected" />
            <UploadButton disabled />
        </section>
    );
}
