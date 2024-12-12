"use client";
import { useIntl } from "react-intl";
import { useRouter } from 'next/navigation';
import { useMemo } from "react";

const lng_list = [
  {
    lng: "EN",
    name: "English",
    icon: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
  },
  {
    lng: "ZH",
    name: "Chinese",
    icon: "https://hatscripts.github.io/circle-flags/flags/cn.svg",
  },
  {
    lng: "JP",
    name: "Japanese",
    icon: "https://hatscripts.github.io/circle-flags/flags/jp.svg",
  },
  {
    lng: "ES",
    name: "Spanish",
    icon: "https://hatscripts.github.io/circle-flags/flags/es.svg",
  },
  {
    lng: "FR",
    name: "French",
    icon: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
  },
  {
    lng: "DE",
    name: "German",
    icon: "https://hatscripts.github.io/circle-flags/flags/de.svg",
  },
  {
    lng: "PT",
    name: "Portuguese",
    icon: "https://hatscripts.github.io/circle-flags/flags/pt.svg",
  },
  {
    lng: "IT",
    name: "Italian",
    icon: "https://hatscripts.github.io/circle-flags/flags/it.svg",
  },
  {
    lng: "AR",
    name: "Arabic",
    icon: "https://hatscripts.github.io/circle-flags/flags/sa.svg",
  },
  {
    lng: "KR",
    name: "Korean",
    icon: "https://hatscripts.github.io/circle-flags/flags/kr.svg",
  },
];

function LanguageSwitcher() {
  const intl = useIntl();
  const router = useRouter();
  // const currentPathname = usePathname();
  // const currentLocale = useCurrentLocale(i18nConfig);

  const selectLng = useMemo(()=>{
    return lng_list.find(i=>i.lng == intl.locale.toUpperCase())
  },[])
  

  const handleChange = (lng:string) => {
    const newLocale = lng.toLocaleLowerCase();
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    router.replace('/' + newLocale);
    router.refresh();
  };


  return (
    <div
      className="relative inline-block language-switcher dropdown"
      translate="no"
    >
      <div
        tabIndex={0}
        role="button"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium "
      >
        <span>
          <img
            src={selectLng?.icon}
            alt={selectLng?.name}
            className="w-6 h-6 rounded-full"
          />
        </span>
        <span className="font-medium">{selectLng?.lng}</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 [&>li]:bg-base-100  py-2 pb-0! pl-0 mt-0 mb-0 w-full z-10"
      >
        {lng_list.map((item, index) => {
          return (
            <li
              key={index}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 my-0"
            >
              {/* <Link href={`/${item.lng.toLocaleLowerCase()}`}> */}
              <div className="flex items-center gap-4 w-full" onClick={() => handleChange(item.lng)}>
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-gray-900 text-base">{item.name}</span>
              </div>
              {/* </Link> */}
            
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
