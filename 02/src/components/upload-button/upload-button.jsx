import SvgIcon, { ICON_TYPES } from "../svg-icon/svg-icon";
import { UPLOAD_STATUS, UPLOAD_LABEL } from "./const";

export default function UploadButton({
    status = UPLOAD_STATUS.IDLE,
    disabled = false,
}) {
    const label = UPLOAD_LABEL[status] ?? UPLOAD_LABEL.IDLE;
    const type = disabled
        ? ICON_TYPES.NOT_ALLOWED
        : getIconTypeByStatus(status); // 아니면 타입 결정 함수 실행;

    return (
        <button type="button" className="upload-icon" disabled={disabled}>
            <span className="upload-button__label">{label}</span>
            <SvgIcon type={type} label="" />
        </button>
    );
}

export { UPLOAD_STATUS };

function getIconTypeByStatus(status) {
    const getIcon = {
        [UPLOAD_STATUS.IDLE]: ICON_TYPES.UP_ARROW,
        [UPLOAD_STATUS.LOADING]: ICON_TYPES.SPINNER,
        [UPLOAD_STATUS.RESOLVED]: ICON_TYPES.CHECK_MARK,
        [UPLOAD_STATUS.REJECTED]: ICON_TYPES.CROSS,
    };

    return getIcon[status] || ICON_TYPES.UP_ARROW;
}
