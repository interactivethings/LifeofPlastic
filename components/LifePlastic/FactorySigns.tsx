import React from "react";

import { ToggleProps } from "./Interfaces/Interfaces";

const FactorySigns: React.FC<Partial<ToggleProps>> = ({ systems }) => {
  return (
    <svg
      width="1050"
      height="4028"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute" }}
    >
      <g data-name="Labels">
        <g
          data-name="Label-PETHandSorting"
          display={systems?.PETHandSorting ? "block" : "none"}
        >
          <g data-name="Component 692">
            <path
              data-name="Rectangle 168"
              d="M208.263 1900.86v-.25l-.216-.12-4.633-2.68-.002-29.07 44.464 25.67.002 29.07-7.471-4.31-.217-.13v.25l.001 9.38-2.561-1.48v-9.62l-.217-.13-26.373-15.22-.216-.13v.25l.001 9.38-2.561-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort"
              transform="matrix(.866 .50003 .00004 1 203.197 1870.36)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_0">
            <text
              data-name="PET_2"
              transform="matrix(.86603 -.5 -.00008 1 229.334 1969.98)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="15.943" y="21.2">
                PET
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PSHandSorting"
          display={systems?.PSHandSorting ? "block" : "none"}
        >
          <g data-name="PET_3">
            <text
              data-name="PS"
              transform="matrix(.86603 -.5 -.00008 1 495.467 1928.89)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="21.137" y="21.2">
                PS
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PVCHandSorting"
          display={systems?.PVCHandSorting ? "block" : "none"}
        >
          <g data-name="PET_4">
            <text
              data-name="PVC"
              transform="matrix(.86603 -.5 -.00008 1 692.379 1924.93)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="14.449" y="21.2">
                PVC
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETMachineSorting"
          display={systems?.PETMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 696">
            <path
              data-name="Rectangle 169"
              d="M267.797 2132.45v-.25l.217-.13 4.633-2.67.002-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.13v9.63l2.56-1.48.001-9.38v-.25l.217-.12 26.372-15.23.217-.12v.25l-.001 9.37 2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_2"
              transform="matrix(.866 -.50003 -.00004 1 227.969 2127.88)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.351" y="20.445">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_5">
            <text
              data-name="PET_6"
              transform="matrix(.86603 -.5 -.00008 1 240.443 2162.93)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="15.943" y="21.2">
                PET
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEHandSorting"
          display={systems?.HDPEHandSorting ? "block" : "none"}
        >
          <g data-name="Component 690">
            <path
              data-name="Rectangle 169_2"
              d="M365.825 1885.9v-.25l.216-.12 4.633-2.68.002-29.07-44.464 25.67-.003 29.07 7.472-4.31.217-.13v.25l-.001 9.38 2.561-1.48v-9.62l.217-.13 26.373-15.23.216-.12v.25l-.001 9.37 2.561-1.47.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_3"
              transform="matrix(.866 -.50003 -.00004 1 325.996 1881.33)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.351" y="20.445">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_7">
            <text
              data-name="HDPE_0"
              transform="matrix(.86603 .5 .08308 .99654 272.52 1907)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="9.642" y="22.123">
                HDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEMachineSorting"
          display={systems?.HDPEMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 697">
            <path
              data-name="Rectangle 168_2"
              d="M291.009 2099.5v-.25l-.216-.13-4.633-2.67-.002-29.07 44.464 25.67.003 29.07-7.472-4.31-.217-.13v.25l.001 9.38-2.561-1.48v-9.63l-.217-.12-26.373-15.23-.216-.12v.25l.001 9.37-2.561-1.48-.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_4"
              transform="matrix(.866 .50003 .00004 1 285.943 2069)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_8">
            <text
              data-name="HDPE_2"
              transform="matrix(.86603 .5 .08308 .99654 271.578 2102)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="9.642" y="22.123">
                HDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PPHandSorting"
          display={systems?.PPHandSorting ? "block" : "none"}
        >
          <g data-name="Component 693">
            <path
              data-name="Rectangle 168_3"
              d="M386.261 1922.52v-.25l-.216-.12-4.633-2.68-.002-29.07 44.464 25.67.002 29.07-7.471-4.31-.217-.13v.25l.001 9.38-2.561-1.48v-9.62l-.217-.13-26.373-15.22-.216-.13v.25l.001 9.38-2.561-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_5"
              transform="matrix(.866 .50003 .00004 1 381.195 1892.02)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_9">
            <text
              data-name="PP"
              transform="matrix(.86603 .5 .08308 .99654 366.641 1934.1)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="22.914" y="22.123">
                PP
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PPMachineSorting"
          display={systems?.PPMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 698">
            <path
              data-name="Rectangle 168_4"
              d="M385.044 2122.46v-.25l-.216-.12-4.633-2.68-.002-29.07 44.465 25.67.002 29.08-7.472-4.32-.217-.12v.25l.001 9.37-2.561-1.48v-9.62l-.217-.13-26.372-15.22-.217-.13v.25l.001 9.38-2.561-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_6"
              transform="matrix(.866 .50003 .00004 1 379.979 2091.96)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_10">
            <text
              data-name="PP_2"
              transform="matrix(.86603 .5 .08308 .99654 366.641 2124.06)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="22.914" y="22.123">
                PP
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-LDPEHandSorting"
          display={systems?.LDPEHandSorting ? "block" : "none"}
        >
          <g data-name="Component 695">
            <path
              data-name="Rectangle 169_3"
              d="M654.018 1935.56v-.25l.217-.12 4.632-2.67.002-29.08-44.464 25.67-.002 29.08 7.472-4.32.216-.12v.25l-.001 9.37 2.561-1.47.001-9.38v-.25l.216-.13 26.373-15.22.216-.13v9.63l2.56-1.48.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_7"
              transform="matrix(.866 -.50003 -.00004 1 614.189 1930.99)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.351" y="20.445">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_11">
            <text
              data-name="LDPE"
              transform="matrix(.86603 .5 .08308 .99654 560.594 1936.05)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="11.532" y="22.123">
                LDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-LDPEMachineSorting"
          display={systems?.LDPEMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 700">
            <path
              data-name="Rectangle 169_4"
              d="M650.926 2093.44v-.25l.217-.13 4.632-2.67.003-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.13v9.63l2.56-1.48.001-9.38v-.25l.216-.12 26.373-15.23.217-.12v.25l-.001 9.37 2.561-1.47v-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_8"
              transform="matrix(.866 -.50003 -.00004 1 611.098 2088.87)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.351" y="20.445">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_12">
            <text
              data-name="LDPE_2"
              transform="matrix(.86603 .5 .08308 .99654 560.594 2092.02)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="11.532" y="22.123">
                LDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-OtherHandSorting"
          display={systems?.OTHERHandSorting ? "block" : "none"}
        >
          <g data-name="Component 694">
            <path
              data-name="Rectangle 168_5"
              d="M768.263 1921.52v-.25l-.216-.13-4.633-2.67-.002-29.07 44.464 25.67.002 29.07-7.471-4.31-.217-.13v.25l.001 9.38-2.561-1.48v-9.63l-.217-.12-26.373-15.23-.216-.12v.25l.001 9.37-2.561-1.48-.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_9"
              transform="matrix(.866 .50003 .00004 1 763.197 1891.02)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_13">
            <text
              data-name="Other"
              transform="matrix(.86603 .5 .08308 .99654 749.752 1932.98)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-OtherMachineSorting"
          display={systems?.OTHERMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 701">
            <path
              data-name="Rectangle 168_6"
              d="M770.167 2097.4v-.25l-.216-.12-4.633-2.68-.002-29.07 44.465 25.67.002 29.08-7.472-4.32-.217-.12v.25l.001 9.37-2.56-1.47-.001-9.38v-.25l-.217-.13-26.372-15.22-.217-.13v.25l.001 9.38-2.561-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_10"
              transform="matrix(.866 .50003 .00004 1 765.102 2066.91)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.35" y="20.581">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_14">
            <text
              data-name="Other_2"
              transform="matrix(.86603 .5 .08308 .99654 749.752 2097.77)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PSMachineSorting"
          display={systems?.PSMachineSorting ? "block" : "none"}
        >
          <g data-name="Component 699">
            <path
              data-name="Rectangle 169_5"
              d="M554.792 2133.5v-.25l.216-.13 4.633-2.67.002-29.07-44.465 25.67-.002 29.07 7.472-4.31.217-.13-.001.25v9.38l2.56-1.48.001-9.38v-.25l.217-.12 26.372-15.23.217-.12v.25l-.001 9.37 2.561-1.48.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sort_11"
              transform="matrix(.866 -.50003 -.00004 1 514.963 2128.93)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".1em"
            >
              <tspan x="8.351" y="20.445">
                Sort
              </tspan>
            </text>
          </g>
          <g data-name="PET_15">
            <text
              data-name="PS_2"
              transform="matrix(.86603 .5 .08308 .99654 455.615 2129.15)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="23.072" y="22.123">
                PS
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETMixedGrinder"
          display={systems?.PETMixedGrinder ? "block" : "none"}
        >
          <g data-name="PET_16">
            <text
              data-name="mPET"
              transform="matrix(.86603 .5 .08308 .99654 191.592 2335.99)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="9.678" y="22.123">
                mPET
              </tspan>
            </text>
          </g>
          <g data-name="Component 702">
            <path
              data-name="Rectangle 168_7"
              d="M227.988 2282.55v-.25l-.217-.13-4.632-2.67-.003-29.08 44.465 25.68.002 29.07-7.472-4.32-.216-.12v.25l.001 9.37-2.561-1.47-.001-9.38v-.25l-.216-.13-26.373-15.22-.217-.13v.25l.001 9.38-2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind"
              transform="matrix(.866 .50003 .00004 1 222.922 2252.05)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.876" y="20.581">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PSSmelter"
          display={systems?.EPSSmelter ? "block" : "none"}
        >
          <g data-name="PET_17">
            <text
              data-name="EPS"
              transform="matrix(.86603 .5 .08308 .99654 493.551 2369.13)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="17.684" y="22.123">
                EPS
              </tspan>
            </text>
          </g>
          <g data-name="Component 703">
            <path
              data-name="Rectangle 168_8"
              d="M517.08 2364.49v-.25l-.217-.13-4.633-2.67-.002-29.08 44.465 25.68.002 29.07-7.472-4.32-.216-.12v9.63l-2.56-1.48-.001-9.38v-.25l-.217-.12-26.372-15.23-.217-.12v.25l.001 9.37-2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Smelt"
              transform="matrix(.866 .50003 .00004 1 512.014 2333.99)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="3.923" y="20.581">
                Smelt
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PPGrinder"
          display={systems?.PPGrinder ? "block" : "none"}
        >
          <g data-name="PET_18">
            <text
              data-name="PP_3"
              transform="matrix(.86603 -.5 -.03442 .9994 427.26 2610.96)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="23.661" y="21.5">
                PP
              </tspan>
            </text>
          </g>
          <g data-name="Component 706">
            <path
              data-name="Rectangle 168_9"
              d="M403.191 2566.35v-.25l-.217-.12-4.632-2.68-.002-29.07 44.464 25.67.002 29.08-7.472-4.32-.216-.12v.25l.001 9.37-2.561-1.48-.001-9.37v-.25l-.216-.13-26.373-15.22-.216-.13v9.63l-2.56-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_2"
              transform="matrix(.866 .50003 .00004 1 398.125 2535.86)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.876" y="20.581">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEMixedGrinder"
          display={systems?.HDPEMixedGrinder ? "block" : "none"}
        >
          <g data-name="PET_19">
            <text
              data-name="mHDPE"
              transform="matrix(.86603 -.5 -.03442 .9994 356.457 2338.91)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              letterSpacing="0em"
            >
              <tspan x="3.138" y="21.5">
                mHDPE
              </tspan>
            </text>
          </g>
          <g data-name="Component 691">
            <path
              data-name="Rectangle 169_6"
              d="M392.487 2251.31v-.25l.216-.12 4.633-2.67.002-29.08-44.464 25.67-.002 29.08 7.471-4.32.217-.12v.25l-.001 9.37 2.561-1.47v-9.63l.217-.13 26.373-15.22.216-.13v.25l-.001 9.38 2.561-1.48.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_3"
              transform="matrix(.866 -.50003 -.00004 1 352.658 2246.74)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.877" y="20.445">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETSeperateGrinder"
          display={systems?.PETSeperateGrinder ? "block" : "none"}
        >
          <g data-name="PET_20">
            <text
              data-name="sPET"
              transform="matrix(.86603 .5 .08308 .99654 140.555 2557.04)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="13.351" y="22.123">
                sPET
              </tspan>
            </text>
          </g>
          <g data-name="Component 704">
            <path
              data-name="Rectangle 169_7"
              d="M235.834 2537.41v-.25l.217-.13 4.633-2.67.002-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.13v9.63l2.56-1.48.001-9.38v-.25l.217-.12 26.372-15.23.217-.12v.25l-.001 9.37 2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_4"
              transform="matrix(.866 -.50003 -.00004 1 196.006 2532.84)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.877" y="20.445">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPESeperateGrinder"
          display={systems?.HDPESeperateGrinder ? "block" : "none"}
        >
          <g data-name="PET_21">
            <text
              data-name="sHDPE"
              transform="matrix(.86603 -.5 -.03442 .9994 315.516 2538.95)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="5.863" y="21.5">
                sHDPE
              </tspan>
            </text>
          </g>
          <g data-name="Component 705">
            <path
              data-name="Rectangle 169_8"
              d="M337.7 2453.53v-.25l.216-.13 4.633-2.67.002-29.08-44.464 25.68-.003 29.07 7.472-4.32.217-.12v.25l-.001 9.37 2.561-1.47v-9.63l.217-.12 26.373-15.23.216-.13v.25l-.001 9.38 2.561-1.48.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_5"
              transform="matrix(.866 -.50003 -.00004 1 297.871 2448.95)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.877" y="20.445">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PVCGrinder"
          display={systems?.PVCGrinder ? "block" : "none"}
        >
          <g data-name="PET_22">
            <text
              data-name="PVC_2"
              transform="matrix(.86603 -.5 -.03442 .9994 693.242 2607.07)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="17.131" y="21.5">
                PVC
              </tspan>
            </text>
          </g>
          <g data-name="Component 707">
            <path
              data-name="Rectangle 169_9"
              d="M718.928 2518.65v-.25l.217-.13 4.632-2.67.003-29.07-44.465 25.67-.002 29.07 7.472-4.32.216-.12v9.63l2.56-1.48.001-9.38v-.25l.216-.12 26.373-15.23.217-.12v.25l-.001 9.37 2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_6"
              transform="matrix(.866 -.50003 -.00004 1 679.1 2514.07)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="4.877" y="20.445">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PSRefiner"
          display={systems?.rPSRefiner ? "block" : "none"}
        >
          <g data-name="PET_23">
            <text
              data-name="rPS"
              transform="matrix(.86603 .5 .08308 .99654 479.652 2962.02)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="19.381" y="22.123">
                rPS
              </tspan>
            </text>
          </g>
          <g data-name="Component 689">
            <path
              data-name="Rectangle 168_10"
              d="M494.144 2955.55v-.25l-.216-.13-4.633-2.67-.002-29.08 44.464 25.68.002 29.07-7.471-4.32-.217-.12v.25l.001 9.37-2.561-1.47-.001-9.38v-.25l-.216-.13-26.373-15.22-.216-.13v9.63l-2.56-1.48-.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine"
              transform="matrix(.866 .50003 .00004 1 489.078 2925.05)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.581">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETMixedRefiner"
          display={systems?.rPETMixedRefiner ? "block" : "none"}
        >
          <g data-name="PET_24">
            <text
              data-name="rPET"
              transform="matrix(.86603 .5 .08308 .99654 205.594 2664.98)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="14.186" y="22.123">
                rPET
              </tspan>
            </text>
          </g>
          <g data-name="Component 709">
            <path
              data-name="Rectangle 168_11"
              d="M224.068 2659.44v-.25l-.217-.13-4.632-2.67-.003-29.07 44.465 25.67.002 29.07-7.472-4.31-.216-.13v.25l.001 9.38-2.561-1.48-.001-9.38v-.25l-.216-.12-26.373-15.23-.216-.12v9.62l-2.56-1.47-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_2"
              transform="matrix(.866 .50003 .00004 1 219.002 2628.94)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.581">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEMixedRefiner"
          display={systems?.rHDPEMixedRefiner ? "block" : "none"}
        >
          <g data-name="PET_25">
            <text
              data-name="rHDPE_0"
              transform="matrix(.86603 .5 .08308 .99654 318.588 2665.96)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="5.951" y="22.123">
                rHDPE
              </tspan>
            </text>
          </g>
          <g data-name="Component 710">
            <path
              data-name="Rectangle 168_12"
              d="M356.193 2645.51v-.25l-.217-.12-4.632-2.68-.003-29.07 44.465 25.67.002 29.08-7.472-4.32-.216-.12v.25l.001 9.37-2.561-1.48-.001-9.37v-.25l-.216-.13-26.373-15.22-.216-.13v9.63l-2.56-1.48-.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_3"
              transform="matrix(.866 .50003 .00004 1 351.127 2615.02)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.581">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETSeperateRefiner"
          display={systems?.rPETSeperateRefiner ? "block" : "none"}
        >
          <g data-name="PET_26">
            <text
              data-name="rPET_2"
              transform="matrix(.86603 -.5 -.03442 .9994 182.396 2858.87)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="14.933" y="21.5">
                rPET
              </tspan>
            </text>
          </g>
          <g data-name="Component 688">
            <path
              data-name="Rectangle 169_10"
              d="M222.899 2821.33v-.25l.216-.12 4.633-2.68.002-29.07-44.464 25.67-.002 29.08 7.471-4.32.217-.12v.25l-.001 9.37 2.561-1.48.001-9.37v-.25l.216-.13 26.373-15.22.216-.13v9.63l2.56-1.48.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_4"
              transform="matrix(.866 -.50003 -.00004 1 183.07 2816.76)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPESeperateRefiner"
          display={systems?.rHDPESeperateRefiner ? "block" : "none"}
        >
          <g data-name="PET_27">
            <text
              data-name="rHDPE_2"
              transform="matrix(.86603 -.5 -.03442 .9994 327.488 2849.17)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="6.698" y="21.5">
                rHDPE
              </tspan>
            </text>
          </g>
          <g data-name="Component 708">
            <path
              data-name="Rectangle 169_11"
              d="M364.75 2799.44l.001-.25.216-.12 4.633-2.68.002-29.07-44.465 25.67-.002 29.08 7.472-4.32.216-.12v9.62l2.56-1.48.001-9.37v-.25l.217-.13 26.372-15.22.217-.13v.25l-.001 9.38 2.561-1.48v-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_5"
              transform="matrix(.866 -.50003 -.00004 1 324.922 2794.87)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PSGrinder"
          display={systems?.PSGrinder ? "block" : "none"}
        >
          <g data-name="PET_28">
            <text
              data-name="PS_3"
              transform="matrix(.86603 -.5 -.03442 .9994 509.488 2792)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="23.819" y="21.5">
                PS
              </tspan>
            </text>
          </g>
          <g data-name="Component 711">
            <path
              data-name="Rectangle 169_12"
              d="M533.682 2736.42v-.25l.217-.12 4.632-2.68.003-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.13v.25l-.001 9.38 2.561-1.48.001-9.38v-.25l.216-.12 26.373-15.23.216-.12v9.62l2.56-1.47.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Grind_7"
              transform="matrix(.866 -.50003 -.00004 1 493.854 2731.85)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="6.157" y="20.445">
                Grind
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-LDPERefiner"
          display={systems?.rLDPERefiner ? "block" : "none"}
        >
          <g data-name="PET_29">
            <text
              data-name="rLDPE"
              transform="matrix(.86603 .5 .08308 .99654 572.516 2703.02)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="7.841" y="22.123">
                rLDPE
              </tspan>
            </text>
          </g>
          <g data-name="Component 713">
            <path
              data-name="Rectangle 169_13"
              d="M670.899 2699.66v-.25l.216-.12 4.633-2.68.002-29.07-44.464 25.67-.002 29.07 7.471-4.31.217-.12v.25l-.001 9.37 2.561-1.48.001-9.37v-.25l.216-.13 26.373-15.22.216-.13v9.63l2.56-1.48.001-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_6"
              transform="matrix(.866 -.50003 -.00004 1 631.07 2695.09)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-OtherRefiner"
          display={systems?.OtherRefiner ? "block" : "none"}
        >
          <g data-name="PET_30">
            <text
              data-name="Other_3"
              transform="matrix(.86603 .5 .08308 .99654 763.459 2333.07)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
          <g data-name="Component 715">
            <path
              data-name="Rectangle 169_14"
              d="M858.694 2305.64v-.25l.216-.13 4.633-2.67.002-29.08-44.464 25.67-.002 29.08 7.471-4.32.217-.12v.25l-.001 9.37 2.561-1.47.001-9.38v-.25l.216-.13 26.373-15.22.216-.13v.25l-.001 9.38 2.561-1.48.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_7"
              transform="matrix(.866 -.50003 -.00004 1 818.865 2301.06)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PVCRefiner"
          display={systems?.rPVCRefiner ? "block" : "none"}
        >
          <g data-name="PET_31">
            <text
              data-name="rPVC"
              transform="matrix(.86603 .5 .08308 .99654 656.594 2827.16)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="12.692" y="22.123">
                rPVC
              </tspan>
            </text>
          </g>
          <g data-name="Component 714">
            <path
              data-name="Rectangle 169_15"
              d="M743.76 2799.68v-.25l.217-.13 4.632-2.67.003-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.13v9.63l2.56-1.48.001-9.38v-.25l.216-.12 26.373-15.23.217-.12v.25l-.001 9.37 2.561-1.48v-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_8"
              transform="matrix(.866 -.50003 -.00004 1 703.932 2795.11)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PPRefiner"
          display={systems?.rPPRefiner ? "block" : "none"}
        >
          <g data-name="PET_32">
            <text
              data-name="rPP"
              transform="matrix(.86603 -.5 -.03442 .9994 421.586 3011.85)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="19.969" y="21.5">
                rPP
              </tspan>
            </text>
          </g>
          <g data-name="Component 712">
            <path
              data-name="Rectangle 169_16"
              d="M464.084 2972.34v-.25l.217-.12 4.633-2.68.002-29.07-44.465 25.67-.002 29.07 7.472-4.31.216-.12v9.62l2.56-1.48.001-9.37v-.25l.217-.13 26.372-15.22.217-.13v.25l-.001 9.38 2.561-1.48v-9.38z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Refine_9"
              transform="matrix(.866 -.50003 -.00004 1 424.256 2967.77)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing="0em"
            >
              <tspan x="2.719" y="20.445">
                Refine
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-ConstructionInfill"
          display={systems?.ProductConstructionInfill ? "block" : "none"}
        >
          <g data-name="Component 716">
            <path
              data-name="Rectangle 169_17"
              d="M198.088 985.311v-.25l.217-.125 4.633-2.675.002-29.072-44.465 25.672-.002 29.069 7.472-4.31.216-.13v9.63l2.56-1.48.001-9.37v-.25l.217-.13 26.372-15.226.217-.125v.25l-.001 9.376 2.561-1.478v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Fill"
              transform="matrix(.866 -.50003 -.00004 1 158.26 980.738)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="15.041" y="20.445">
                Fill
              </tspan>
            </text>
          </g>
          <g data-name="PET_33">
            <text
              data-name="Trash"
              transform="matrix(.86603 .5 .08308 .99654 126.797 1023.09)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.82" y="22.123">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEBottles"
          display={systems?.ProductHDPEBottles ? "block" : "none"}
        >
          <g data-name="Component 721">
            <path
              data-name="Rectangle 169_18"
              d="M297.565 557.354v-.25l.216-.125 4.633-2.675.002-29.072-44.464 25.672-.002 29.072 7.471-4.314.217-.125v.25l-.001 9.376 2.561-1.479.001-9.376v-.25l.216-.125 26.373-15.226.216-.125v9.626l2.56-1.478.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Blow"
              transform="matrix(.866 -.50003 -.00004 1 257.736 552.781)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.377" y="20.445">
                Blow
              </tspan>
            </text>
          </g>
          <g data-name="PET_34">
            <text
              data-name="rHDPE_3"
              transform="matrix(.86603 .5 .08308 .99654 203.627 586.941)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="5.951" y="22.123">
                rHDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-Insulation"
          display={systems?.ProductInsulation ? "block" : "none"}
        >
          <g data-name="Component 687">
            <path
              data-name="Rectangle 168_13"
              d="M208.957 886.323v-.25l-.217-.125-4.633-2.675-.002-29.072 44.465 25.671.002 29.072-7.472-4.313-.216-.125v9.625l-2.56-1.478-.001-9.376v-.25l-.217-.125-26.372-15.226-.217-.125v.25l.001 9.376-2.561-1.479v-9.375z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Make"
              transform="matrix(.866 .50003 .00004 1 203.891 855.824)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="5.204" y="20.581">
                Make
              </tspan>
            </text>
          </g>
          <g data-name="PET_35">
            <text
              data-name="rPS_2"
              transform="matrix(.86603 .5 .08308 .99654 189.639 889.02)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="19.381" y="22.123">
                rPS
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PictureFrames"
          display={systems?.ProductPictureFrames ? "block" : "none"}
        >
          <g data-name="Component 717">
            <path
              data-name="Rectangle 168_14"
              d="M371.949 886.323v-.25l-.217-.125-4.632-2.675-.003-29.072 44.465 25.671.002 29.072-7.472-4.313-.216-.125v9.625l-2.56-1.478-.001-9.376v-.25l-.216-.125-26.373-15.226-.217-.125v.25l.001 9.376-2.561-1.479v-9.375z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form"
              transform="matrix(.866 .50003 .00004 1 366.883 855.824)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_36">
            <text
              data-name="Other_4"
              transform="matrix(.86603 .5 .08308 .99654 350.633 888.09)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PlasticBags"
          display={systems?.ProductPlasticBags ? "block" : "none"}
        >
          <g data-name="Component 718">
            <path
              data-name="Rectangle 168_15"
              d="M512.419 957.592v-.25l-.216-.125-4.633-2.675-.002-29.072 44.465 25.672.002 29.072-7.472-4.314-.217-.125v.25l.001 9.376-2.561-1.478v-9.626l-.217-.125-26.372-15.227-.217-.125v.25l.001 9.376-2.561-1.478-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Spin"
              transform="matrix(.866 .50003 .00004 1 507.354 927.094)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="8.884" y="20.581">
                Spin
              </tspan>
            </text>
          </g>
          <g data-name="PET_37">
            <text
              data-name="rLDPE_2"
              transform="matrix(.86603 .5 .08308 .99654 490.545 960.176)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="7.841" y="22.123">
                rLDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-LandscapeFabric"
          display={systems?.ProductLandscapeFabric ? "block" : "none"}
        >
          <g data-name="Component 719">
            <path
              data-name="Rectangle 168_16"
              d="M432.708 764.94v-.25l-.216-.125-4.633-2.675-.002-29.072 44.465 25.672.002 29.072-7.472-4.314-.217-.125.001.25v9.376l-2.56-1.479-.001-9.376v-.25l-.217-.125-26.372-15.226-.217-.125v.25l.001 9.376-2.561-1.478-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Make_2"
              transform="matrix(.866 .50003 .00004 1 427.643 734.441)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="5.204" y="20.581">
                Make
              </tspan>
            </text>
          </g>
          <g data-name="PET_38">
            <text
              data-name="Trash_2"
              transform="matrix(.86603 .5 .08308 .99654 413.555 768.777)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.82" y="22.123">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-Buckets"
          display={systems?.ProductBuckets ? "block" : "none"}
        >
          <g data-name="Component 723">
            <path
              data-name="Rectangle 168_17"
              d="M583.085 641.627v-.25l-.216-.125-4.633-2.674-.002-29.072 44.465 25.671.002 29.072-7.472-4.314-.217-.125v.25l.001 9.376-2.56-1.478-.001-9.376v-.25l-.217-.125-26.372-15.226-.217-.125v.25l.001 9.375-2.561-1.478-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_2"
              transform="matrix(.866 .50003 .00004 1 578.02 611.129)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_39">
            <text
              data-name="Other_5"
              transform="matrix(.86603 .5 .08308 .99654 540.646 679.887)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-Toys"
          display={systems?.ProductToys ? "block" : "none"}
        >
          <g data-name="Component 729">
            <path
              data-name="Rectangle 168_18"
              d="M399.085 339.545v-.25l-.216-.125-4.633-2.674-.002-29.072 44.465 25.671.002 29.072-7.472-4.314-.217-.125v.25l.001 9.376-2.56-1.478-.001-9.376v-.25l-.217-.125-26.372-15.226-.217-.125v.25l.001 9.375-2.561-1.478-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Stuff"
              transform="matrix(.866 .50003 .00004 1 394.02 309.047)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="7.275" y="20.581">
                Stuff
              </tspan>
            </text>
          </g>
          <g data-name="PET_40">
            <text
              data-name="Trash_3"
              transform="matrix(.86603 .5 .08308 .99654 366.639 368.949)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.82" y="22.123">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETFibre"
          display={systems?.ProductPETBottles ? "block" : "none"}
        >
          <g data-name="Component 728">
            <path
              data-name="Rectangle 168_19"
              d="M545.843 405.573v-.25l-.216-.125-4.633-2.675-.002-29.072 44.464 25.671.003 29.072-7.472-4.313-.217-.125v.25l.001 9.375-2.561-1.478v-9.626l-.217-.125-26.373-15.226-.216-.125v.25l.001 9.376-2.561-1.479-.001-9.375z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Spin_2"
              transform="matrix(.866 .50003 .00004 1 540.777 375.074)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="8.884" y="20.581">
                Spin
              </tspan>
            </text>
          </g>
          <g data-name="PET_41">
            <text
              data-name="rPET_3"
              transform="matrix(.86603 .5 .08308 .99654 521.564 405.938)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="14.186" y="22.123">
                rPET
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-Cloths"
          display={systems?.ProductrPETCloths ? "block" : "none"}
        >
          <g data-name="Component 733">
            <path
              data-name="Rectangle 168_20"
              d="M658.105 293.416v-.25l-.217-.125-4.632-2.674-.002-29.072 44.464 25.671.002 29.072-7.472-4.314-.216-.125v.25l.001 9.376-2.561-1.478-.001-9.376v-.25l-.216-.125-26.373-15.226-.216-.125v9.626l-2.56-1.479-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Sew"
              transform="matrix(.866 .50003 .00004 1 653.039 262.918)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="9.165" y="20.581">
                Sew
              </tspan>
            </text>
          </g>
          <g data-name="PET_42">
            <text
              data-name="Trash_4"
              transform="matrix(.86603 .5 .08308 .99654 636.564 297.008)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.82" y="22.123">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-OfficeSupplies"
          display={systems?.ProductOfficeSupplies ? "block" : "none"}
        >
          <g data-name="Component 724">
            <path
              data-name="Rectangle 168_21"
              d="M664.117 701.342v-.25l-.217-.125-4.633-2.675-.002-29.072 44.465 25.672.002 29.072-7.472-4.314-.216-.125v9.626l-2.56-1.478-.001-9.376v-.25l-.216-.125-26.373-15.227-.217-.125v.25l.001 9.376-2.561-1.478v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_3"
              transform="matrix(.866 .50003 .00004 1 659.051 670.844)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_43">
            <text
              data-name="rPS_3"
              transform="matrix(.86603 .5 .08308 .99654 634.84 719.902)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="19.381" y="22.123">
                rPS
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-HDPEPipes"
          display={systems?.ProductHDPEPipes ? "block" : "none"}
        >
          <g data-name="Component 727">
            <path
              data-name="Rectangle 168_22"
              d="M742.031 594.416v-.25l-.217-.125-4.632-2.674-.003-29.072 44.465 25.671.002 29.072-7.472-4.314-.216-.125v9.626l-2.56-1.478-.001-9.376v-.25l-.216-.125-26.373-15.226-.217-.125v.25l.001 9.376-2.561-1.479v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_4"
              transform="matrix(.866 .50003 .00004 1 736.965 563.918)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_44">
            <text
              data-name="rHDPE_4"
              transform="matrix(.86603 .5 .08308 .99654 714.578 638.723)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="5.951" y="22.123">
                rHDPE
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETFurniture"
          display={systems?.ProductPETFurniture ? "block" : "none"}
        >
          <g data-name="Component 730">
            <path
              data-name="Rectangle 168_23"
              d="M327.052 274.42v-.25l-.216-.125-4.633-2.674-.002-29.072 44.464 25.671.003 29.072-7.472-4.314-.217-.125v.25l.001 9.376-2.561-1.478v-9.626l-.217-.125-26.373-15.226-.216-.125v.25l.001 9.375-2.561-1.478-.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_5"
              transform="matrix(.866 .50003 .00004 1 321.986 243.922)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_45">
            <text
              data-name="Other_6"
              transform="matrix(.86603 .5 .08308 .99654 279.52 313.008)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.178" y="22.123">
                Other
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PETBottles"
          display={systems?.ProductPETBottles ? "block" : "none"}
        >
          <g data-name="Component 720">
            <path
              data-name="Rectangle 169_19"
              d="M390.881 609.553v-.25l.217-.125 4.633-2.675.002-29.072-44.465 25.672-.002 29.072 7.472-4.314.216-.125v9.626l2.56-1.478.001-9.376v-.25l.217-.125 26.372-15.227.217-.125v.25l-.001 9.376 2.561-1.478v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Blow_2"
              transform="matrix(.866 -.50003 -.00004 1 351.053 604.98)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.377" y="20.445">
                Blow
              </tspan>
            </text>
          </g>
          <g data-name="PET_46">
            <text
              data-name="rPET_4"
              transform="matrix(.86603 -.5 -.00008 1 378.512 682.367)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="12.251" y="21.2">
                rPET
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-WindowFrames"
          display={systems?.ProductWindowFrames ? "block" : "none"}
        >
          <g data-name="Component 731">
            <path
              data-name="Rectangle 169_20"
              d="M531.499 226.498v-.25l.216-.125 4.633-2.674.002-29.072-44.465 25.671-.002 29.072 7.472-4.314.217-.125v.25l-.001 9.376 2.56-1.478.001-9.376v-.25l.217-.125 26.372-15.226.217-.125v.25l-.001 9.376 2.561-1.479.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_6"
              transform="matrix(.866 -.50003 -.00004 1 491.67 221.926)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.445">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_47">
            <text
              data-name="rPVC_2"
              transform="matrix(.86603 -.5 -.00008 1 507.404 290.828)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.757" y="21.2">
                rPVC
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-PVCPipes"
          display={systems?.ProductPVCPipes ? "block" : "none"}
        >
          <g data-name="Component 722">
            <path
              data-name="Rectangle 169_21"
              d="M548.463 550.592v-.25l.217-.125 4.633-2.675.002-29.072-44.465 25.672-.002 29.072 7.472-4.314.216-.125v9.626l2.56-1.478.001-9.376v-.25l.217-.125 26.372-15.227.217-.125v.25l-.001 9.376 2.561-1.478v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_7"
              transform="matrix(.866 -.50003 -.00004 1 508.635 546.02)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.445">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_48">
            <text
              data-name="rPVC_3"
              transform="matrix(.86603 -.5 -.00008 1 521.311 619.84)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="10.757" y="21.2">
                rPVC
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-GardenFurniture"
          display={systems?.ProductGardenFurniture ? "block" : "none"}
        >
          <g data-name="Component 725">
            <path
              data-name="Rectangle 169_22"
              d="M740.893 893.811v-.25l.217-.125 4.632-2.675.002-29.072-44.464 25.672-.002 29.072 7.472-4.314.216-.125v.25l-.001 9.376 2.561-1.479.001-9.376v-.25l.216-.125 26.373-15.226.216-.125v9.626l2.56-1.478.001-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_8"
              transform="matrix(.866 -.50003 -.00004 1 701.064 889.238)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.445">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_49">
            <text
              data-name="Trash_5"
              transform="matrix(.86603 -.5 -.00008 1 730.471 961.969)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="8.885" y="21.2">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-Concrete"
          display={systems?.ProductConcrete ? "block" : "none"}
        >
          <g data-name="Component 726">
            <path
              data-name="Rectangle 169_23"
              d="M819.764 1027.56v-.25l.217-.13 4.632-2.67.003-29.075-44.465 25.675-.002 29.07 7.472-4.32.216-.12v.25l-.001 9.38 2.561-1.48.001-9.38v-.25l.216-.12 26.373-15.23.217-.12-.001.25v9.37l2.56-1.48.001-9.37z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Fill_2"
              transform="matrix(.866 -.50003 -.00004 1 779.936 1022.98)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="15.041" y="20.445">
                Fill
              </tspan>
            </text>
          </g>
          <g data-name="PET_50">
            <text
              data-name="Trash_6"
              transform="matrix(.86603 -.5 -.00008 1 790.416 1085.79)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="8.885" y="21.2">
                Trash
              </tspan>
            </text>
          </g>
        </g>
        <g
          data-name="Label-BottleCaps"
          display={systems?.ProductBottleCaps ? "block" : "none"}
        >
          <g data-name="Component 732">
            <path
              data-name="Rectangle 168_24"
              d="M107.988 494.44v-.25l-.217-.125-4.632-2.675-.003-29.072 44.465 25.672.002 29.072-7.472-4.314-.216-.125v.25l.001 9.376-2.561-1.479-.001-9.376v-.25l-.216-.125-26.373-15.226-.217-.125v.25l.001 9.376-2.561-1.478v-9.376z"
              fill="#C4C4C4"
              stroke="#000"
              strokeWidth=".5"
            />
            <text
              data-name="Form_9"
              transform="matrix(.866 .50003 .00004 1 102.922 463.941)"
              fill="#000"
              fontFamily="Muli"
              fontSize="16"
              fontWeight="300"
              letterSpacing=".04em"
            >
              <tspan x="6.345" y="20.581">
                Form
              </tspan>
            </text>
          </g>
          <g data-name="PET_51">
            <text
              data-name="rPP_2"
              transform="matrix(.86603 -.5 -.00008 1 135.504 563.871)"
              fill="#C4C4C4"
              strokeWidth=".5"
              fontFamily="Muli"
              fontSize="18"
              fontWeight="800"
              letterSpacing="0em"
            >
              <tspan x="17.288" y="21.2">
                rPP
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default FactorySigns;
