export const Icon = ({ id }) => {
    console.log(id);
    switch (id) {
        case "arrow-left":
        return (
            <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="https://www.w3.org/TR/SVG2/"
            >
                <g clipPath="url(#arrow-left)">
                    <path
                        d="M4 12L20 12M4 12L10 6M4 12L10 18"
                        stroke="#54ADFF"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="arrow-left">
                        <rect
                            width="24"
                            height="24"
                            fill="#54ADFF"
                            transform="translate(0.5)"
                        />
                    </clipPath>
                </defs>
            </svg>
        );

        default:
        return <svg></svg>;
    }
};