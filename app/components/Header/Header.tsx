"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavLink from "../NavLink/NavLink";
import style from "./Header.module.css";
import { Navigation } from "@/app/types/Header";

const navigation: Navigation = {
  "Об Удмуртии": {
    path: "about",
    children: [
      ["Туроператоры", "tour-operators"],
      ["Памятка туристу", "memo"],
      ["Сувенирная продукция", "souvenirs"],
    ],
  },
  "Где поесть": {
    path: "restaurants",
  },
  "Где остановиться": {
    path: "hotels",
  },
  "Что посмотреть": {
    path: "places",
  },
};

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}
const Header = () => {
  const pathname = usePathname();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [position, setPosition] = useState<number[]>([]);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [currentChildren, setCurrentChildren] = useState<string[][] | null>(
    null
  );
  const isMain = pathname === "/" || pathname === "/about";

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className={`${isMain ? style.headerMain : ""}`}>
      {windowSize && windowSize!.innerWidth >= 800 ? (
        <>
          <nav className={style.nav}>
            <ul className={style.ul}>
              <li>
                <NavLink path="/">
                  <Image
                    src={isMain ? "/LOGO_footer.svg":"/LOGO_1.svg"}
                    alt="logo"
                    width={174}
                    height={45}
                  />
                </NavLink>
              </li>
              {Object.entries(navigation).map(([key, value]) => (
                <>
                  <li
                    key={key}
                    id="links"
                    className={`${style.li} ${
                      !isMain ? style.active : style.links
                    }`}
                    onMouseOver={(e) => {
                      setPosition([
                        e.currentTarget.offsetLeft,
                        e.currentTarget.offsetWidth,
                      ]);
                      setCurrentChildren(value.children ?? null);
                    }}
                  >
                    <NavLink
                      path={value.path}
                      title={key}
                      isChildrenMenu={value.children ? true : false}
                    />
                  </li>
                </>
              ))}
            </ul>
          </nav>
          {!isMain && (
            <>
              <hr className={style.hr} />
              <div
                style={{
                  left: position[0],
                  width: `${position[1]}px`,
                }}
                className={style.hoverLink}
              ></div>
            </>
          )}
          {currentChildren && (
            <>
              <svg
                fill={isMain ? "black" : "whitesmoke"}
                height="20px"
                width="20px"
                id="Layer_1"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  top: 70,
                  left: `${position[0] + position[1] / 3}px`,
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1.6 -1.6 19.20 19.20"
                stroke={isMain ? "black" : "whitesmoke"}
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.576"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path className="cls-1" d="M8,2L2,14H14L8,2Z"></path>{" "}
                </g>
              </svg>
              <div
                className={style.chidrenMenu}
                style={{
                  backgroundColor: isMain ? "black" : "whitesmoke",
                }}
                onMouseLeave={() => setCurrentChildren(null)}
              >
                {currentChildren.map((e) => (
                  <NavLink title={e[0]} path={e[1]} isHover={true} />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <nav className={style.navMobile}>
          <NavLink path="/">
            <Image
              src={isMain ? "/LOGO_footer.svg":"/LOGO_1.svg"}
              alt="logo"
              width={174}
              height={45}
            />
          </NavLink>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: isOpenMobileMenu ? "rotate(90deg)" : "",
              transition: "0.1s",
            }}
            onClick={() => setIsOpenMobileMenu(true)}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {isOpenMobileMenu && (
            <div className={style.menuMobile}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setIsOpenMobileMenu(false)}
                className={style.close}
              >
                <path
                  d="M15 1L1 15M15 15L1 1"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <ul className={style.ul}>
                {Object.entries(navigation).map(([key, value]) => (
                  <>
                    <li
                      key={key}
                      className={style.li}
                      onClick={() => setIsOpenMobileMenu(false)}
                    >
                      <NavLink path={value.path} title={key} />
                    </li>
                    {value.children?.map((child) => (
                      <li
                        key={child[0]}
                        className={style.li}
                        onClick={() => setIsOpenMobileMenu(false)}
                      >
                        <NavLink path={child[1]} title={child[0]} />
                      </li>
                    ))}
                  </>
                ))}
              </ul>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
