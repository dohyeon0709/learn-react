export const UPLOAD_STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

export const UPLOAD_LABEL = {
    [UPLOAD_STATUS.IDLE]: "업로드",
    [UPLOAD_STATUS.LOADING]: "업로드중",
    [UPLOAD_STATUS.RESOLVED]: "완료",
    [UPLOAD_STATUS.REJECTED]: "실패",
};
