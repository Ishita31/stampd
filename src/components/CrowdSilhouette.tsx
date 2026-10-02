type CrowdSilhouetteProps = {
  className?: string;
};

export function CrowdSilhouette({ className }: CrowdSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 1200 420"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <g fill="#050505">
        <ellipse cx="70" cy="390" rx="90" ry="40" />
        <ellipse cx="220" cy="400" rx="120" ry="42" />
        <ellipse cx="430" cy="395" rx="140" ry="48" />
        <ellipse cx="680" cy="400" rx="170" ry="50" />
        <ellipse cx="940" cy="392" rx="150" ry="46" />
        <ellipse cx="1120" cy="398" rx="110" ry="40" />
        <path d="M40 400 C40 310 90 250 130 250 C170 250 190 310 195 400 Z" />
        <path d="M120 400 C125 280 175 210 230 205 C290 200 320 290 325 400 Z" />
        <path d="M250 400 C255 300 300 230 350 228 C410 226 445 310 450 400 Z" />
        <path d="M390 400 C400 270 460 185 530 180 C610 174 655 290 662 400 Z" />
        <path d="M560 400 C568 285 620 200 690 196 C770 192 810 300 818 400 Z" />
        <path d="M740 400 C748 260 810 170 890 168 C980 165 1025 290 1032 400 Z" />
        <path d="M960 400 C968 300 1010 225 1070 222 C1135 218 1170 310 1175 400 Z" />
        <circle cx="130" cy="236" r="28" />
        <circle cx="230" cy="188" r="34" />
        <circle cx="350" cy="212" r="30" />
        <circle cx="530" cy="164" r="40" />
        <circle cx="690" cy="178" r="36" />
        <circle cx="890" cy="150" r="42" />
        <circle cx="1070" cy="206" r="30" />
        <path d="M108 210 C70 150 40 120 28 96 C55 118 90 150 132 198 Z" />
        <path d="M248 168 C300 90 340 50 368 18 C350 70 300 120 248 168 Z" />
        <path d="M500 140 C450 70 400 30 372 4 C430 40 490 90 530 148 Z" />
        <path d="M720 150 C780 70 830 28 868 0 C830 50 770 110 718 156 Z" />
        <path d="M860 128 C820 60 790 20 770 -10 C820 20 870 80 900 140 Z" />
        <path d="M1100 190 C1150 120 1188 80 1200 50 C1160 100 1120 150 1090 198 Z" />
      </g>
    </svg>
  );
}
