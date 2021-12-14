let colors = {
    or:     ["#F94040", "#E70101", "#DDBB02", "#FFD804", "#F3CD02", "#C4C4C4", "#BFA203"],
    argent: ["#F94040", "#E70101", "#A4B1BD", "#BECBD8", "#ACBBC9", "#C4C4C4", "#8A949E"],
    bronze: ["#F94040", "#E70101", "#FF9F46", "#FFBA7A", "#FF9F46", "#C4C4C4", "#FF7A00"]
}
 interface Props {
     materiel:"or"|"argent"|"bronze"
 }
export const Medaille = ({materiel}:Props) => {
    return <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L35 45H64L26 0H0Z" fill={colors[materiel][0]} />
        <path d="M100 0L65 45H35L70.9787 0H100Z" fill={colors[materiel][1]}/>
        <circle cx="50" cy="70" r="30" fill={colors[materiel][2]} />
        <g filter="url(#filter0_i_1_1013)">
            <circle cx="50" cy="70" r="25" fill={colors[materiel][3]} />
        </g>
        <g filter="url(#filter1_d_1_1013)">
            <circle cx="50" cy="70" r="20" fill={colors[materiel][4]} />
        </g>
        {/* <path d="M50 55L62.9904 62.5V77.5L50 85L37.0096 77.5V62.5L50 55Z" fill={colors[materiel][5]} /> */}
        <path d="M50 70V55L37 62.5V77.5C37 77.9 45.6667 72.6667 50 70Z" fill={colors[materiel][3]} />
        <path d="M50 70V55L63 62.5V77.5C63 78.3 54.3333 72.8333 50 70Z" fill={colors[materiel][6]} />
        <path d="M50 70L37 77.5L50 85L63 77.5L50 70Z" fill={colors[materiel][2]} />
        <g filter="url(#filter2_i_1_1013)">
            <path d="M36 62L50 54L64 62L36 78L50 86L64 78" stroke={colors[materiel][3]} />
        </g>
        <defs>
            <filter id="filter0_i_1_1013" x="25" y="45" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-2" dy="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_1013" />
            </filter>
            <filter id="filter1_d_1_1013" x="29.5" y="50" width="40.5" height="40.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-0.5" dy="0.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1013" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1013" result="shape" />
            </filter>
            <filter id="filter2_i_1_1013" x="34.9922" y="53.4241" width="30.0156" height="33.1517" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_1013" />
            </filter>
        </defs>
    </svg>

}
