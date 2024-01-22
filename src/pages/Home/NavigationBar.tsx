import { AnchorHTMLAttributes, useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

const LINKS = [
  {
    href: '#use-case',
    title: 'Use Case',
  },
  {
    href: '#our-tool',
    title: 'Our Tool',
  },
  {
    href: '#technology',
    title: 'Technology',
  },
  {
    href: '#data-privacy',
    title: 'Data Privacy',
  },
  {
    href: '#comparison',
    title: 'Comparison',
  },
  {
    href: '#about-us',
    title: 'About Us',
  },
];

type AlexLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const AlexLink = ({ className, children, ...props }: AlexLinkProps) => {
  return (
    <a
      className={clsx(
        'no-underline font-semibold transition duration-200 ease-in-out hover:underline whitespace-nowrap overflow-hidden max-w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

type NavigationBarProps = {
  isJudge: boolean;
  onIsJudgeClick: () => void;
};

export const NavigationBar = ({
  isJudge,
  onIsJudgeClick,
}: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef(null);

  const handleClick = (event: MouseEvent) => {
    setIsOpen((state) => !state);

    if (event.target instanceof HTMLElement) {
      if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');

        if (href) {
          window.location.href = href;
        }
      }
    }
  };

  useEffect(() => {
    // Add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      // Remove the event listener when the dropdown is closed
      document.removeEventListener('mousedown', handleClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  return (
    <div
      className="p-4 flex sticky top-0 bg-white bg-opacity-80 backdrop-blur-md z-10"
      ref={node}
    >
      <div className="flex max-w-7xl w-full mx-auto justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="#">
            <img src="/alex-logo.png" className="w-auto h-12" />
          </a>
          <div className="hidden lg:flex gap-4">
            {LINKS.map(({ href, title }) => (
              <AlexLink key={href} href={href}>
                {title}
              </AlexLink>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              className="font-semibold"
              onClick={() => setIsOpen((state) => !state)}
            >
              Menu
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {LINKS.map(({ href, title }) => (
                    <AlexLink
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {title}
                    </AlexLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
              checked={isJudge}
              onChange={onIsJudgeClick}
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <p className="ml-2">Are you a Judge?</p>
        </label>
        <a href="#" className="flex">
          <img src="/alex-name.png" className="w-auto h-12" />
        </a>
      </div>
    </div>
  );
};
