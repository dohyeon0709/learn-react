import { ICON_PATHS, ICON_TYPES } from "./const";

export default function SvgIcon({
    type = ICON_TYPES.UP_ARROW,
    label = "",
    size = 24,
    color = "#525577",
}) {
    if (type === ICON_TYPES.SPINNER) {
        return <SpinnerIcon label={label} size={size} color={color} />;
    }

    const path = ICON_PATHS[type] || ICON_PATHS[ICON_TYPES.UP_ARROW];
    const arialabel = label
        ? { "aria-label": label }
        : { "aria-hidden": "true" };

    return (
        <svg
            role="img"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 12 12"
            {...arialabel}>
            <path fill={color} fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    );
}

function SpinnerIcon(label, size = 24, color = "#525577") {
    const arialabel = label
        ? { "aria-label": label }
        : { "aria-hidden": "true" };

    return (
        <svg
            role="img"
            width={size}
            height={size}
            stroke={color}
            viewBox="0 0 24 24"
            {...arialabel}>
            <g className="spinner_V8m1">
                <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
            </g>
        </svg>
    );
}

export { ICON_TYPES, SpinnerIcon };
