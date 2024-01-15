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

export const NavigationBar = () => {
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
      <div className="flex max-w-7xl w-full mx-auto justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#">
            <img src="/alex-logo.png" className="w-auto h-12" />
          </a>
          <div className="hidden md:flex gap-4">
            {LINKS.map(({ href, title }) => (
              <AlexLink key={href} href={href}>
                {title}
              </AlexLink>
            ))}
          </div>
          <div className="md:hidden">
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
        <a href="#">
          <img src="/alex-name.png" className="w-auto h-12" />
        </a>
      </div>
    </div>
  );
};
