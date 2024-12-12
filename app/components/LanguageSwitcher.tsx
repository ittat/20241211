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
            src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
            alt="English"
            className="w-6 h-6 rounded-full"
          />
        </span>
        <span className="font-medium">EN</span>
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
              <div className="flex items-center gap-4 w-full">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-gray-900 text-base">{item.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;
