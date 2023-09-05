import React from "react";
import style from "./page.module.css";

const page = () => {
  return (
    <>
      <div className={style.img}>
        <h1 className={style.title}>Открой Удмуртию</h1>
        <p className={style.subtitle}>
          Многовековая история многонациональной республики
        </p>
      </div>
      <div className={style.about}>
        <h2 className={style.titleAbout}>Удмуртия в цифрах</h2>

        <div className={style.info}>
          <div className={style.itemInfo}>
            <h4 className={style.itemTitle}>Площадь 42 000 кв.км</h4>
            <p className={style.description}>
              Удмуртия расположена на востоке Русской равнины, в междуречье Камы
              и ее правого притока Вятки. Площадь республики на тысячу
              квадратных километров больше территории Швейцарии.
            </p>
          </div>

          <div className={style.itemInfo}>
            <h4 className={style.itemTitle}>136 народов</h4>
            <p className={style.description}>
              Удмуртия — многонациональная республика. Здесь живут 136 народов:
              удмурты, русские, татары, чуваши, марийцы и многие другие.
            </p>
          </div>

          <div className={style.itemInfo}>
            <h4 className={style.itemTitle}>1 366 учреждений культуры</h4>
            <p className={style.description}>
              В республике работают 32 музея, 56 детских школ искусств, а также
              множество домов ремёсел, библиотек, театров и концертных залов.
              Многие народы Удмуртии сохраняют свои обряды и языки. Самобытность
              — важная черта местной культуры.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
