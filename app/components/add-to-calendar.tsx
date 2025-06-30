"use client";

import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

interface Props {
  links: {
    google: string;
    icalendar: string;
    outlook365: string;
    outlooklive: string;
  };
}
const AddToCalendar = ({ links }: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const clickOutside = useOnclickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div className="relative max-w-max">
        <button
          ref={clickOutside}
          type="button"
          onClick={() => setDropdownOpen((value) => !value)}
          className="text-indigo-800 font-semibold inline-flex items-center gap-2 border border-indigo-800 p-2 text-sm rounded hover:bg-indigo-800 hover:text-white transition-all"
        >
          <span className="material-symbols-outlined transition-all">
            calendar_today
          </span>
          Add to calendar
          <span
            className={`material-symbols-outlined transition-all ${
              isDropdownOpen ? "-rotate-180" : ""
            }`}
          >
            keyboard_arrow_down
          </span>
        </button>

        {isDropdownOpen && (
          <div
            ref={clickOutside}
            className="absolute start-0 z-10 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-xl"
            role="menu"
          >
            <div className="p-2">
              <a
                href={links.google}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-neutral-800"
                role="menuitem"
              >
                Google Calendar
              </a>
              <a
                href={links.icalendar}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-neutral-800"
                role="menuitem"
              >
                iCalendar
              </a>
              <a
                href={links.outlook365}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-neutral-800"
                role="menuitem"
              >
                Outlook 365
              </a>
              <a
                href={links.outlooklive}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-neutral-800"
                role="menuitem"
              >
                Outlook Live
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AddToCalendar;
