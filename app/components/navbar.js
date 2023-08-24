
"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="data:image/jpeg;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
