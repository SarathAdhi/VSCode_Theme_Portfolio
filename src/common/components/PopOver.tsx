import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  button: {
    text: string;
    className: string;
  };
  children: React.ReactNode;
};

export const PopOver: React.FC<Props> = ({ button, children }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={button.className}>
            {button.text}
          </Popover.Button>

          <div className="fixed top-5 w-full max-w-sm px-4">
            <>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative flex flex-col items-center bg-[#252526] p-3">
                      {children}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          </div>
        </>
      )}
    </Popover>
  );
};
