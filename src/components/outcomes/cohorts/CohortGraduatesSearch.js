import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import * as Unicons from '@iconscout/react-unicons';

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

function CohortGraduatesSearch({activeCohortGraduates}) {
    
    const [selected, setSelected] = useState({ id: 1, name: 'Wade Cooper' })
    const [query, setQuery] = useState('')

    useEffect(() => {
        setSelected({ id: 1, first_name: 'Search for', last_name: 'Graduate...' })
    }, [activeCohortGraduates])

    const filteredActiveCohortGraduates =
        query === ''
        ? activeCohortGraduates
        : activeCohortGraduates.filter((graduate) =>
            graduate.first_name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, '')) ||
            graduate.last_name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

        console.log(selected)
    return (
        <div>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-4">
                    <div className="relative w-full cursor-default overflow-hidden rounded-sm bg-white text-left shadow-sm ">
                        <Combobox.Input
                        className="w-full border-none py-1 pl-3 pr-10 text-xs leading-5 text-primary focus:outline-none"
                        displayValue={(person) => person.first_name + ' ' + person.last_name}
                        onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 hover:text-secondary">
                            <Unicons.UilDirection size="18" />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-xs shadow-lg focus:outline-none sm:text-sm">
                        {filteredActiveCohortGraduates.length === 0 && query !== '' ? (
                            <div className="relative cursor-default select-none py-2 px-4 text-primary text-sm text-alert-danger-dark">
                            Graduate Not Found.
                            </div>
                        ) : (
                            filteredActiveCohortGraduates.map((graduate) => (
                            <Combobox.Option
                                key={graduate.id}
                                className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                    active ? 'bg-primary/5 text-secondary' : 'text-primary'
                                }`
                                }
                                value={graduate}
                                onClick={() => setSelected(graduate)}
                            >
                                {({ selected, active }) => (
                                <>
                                    <span
                                    className={`block truncate ${
                                        selected ? 'text-nunito-semiBold text-secondary' : 'text-nunito-light'
                                    }`}
                                    >
                                    {graduate.first_name + ' ' + graduate.last_name}
                                    </span>
                                    {selected ? (
                                    <span
                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 text-secondary ${
                                        active ? 'text-secondary' : 'text-primary'
                                        }`}
                                    >
                                        <Unicons.UilCheck size="18" />
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Combobox.Option>
                            ))
                        )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default CohortGraduatesSearch;