import React from 'react'
import { Link } from 'react-router-dom'

function ContestList() {
    return (
        <>
            <div className="max-w-sm rounded-b-2xl	mx-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <img className='rounded-t-2xl' src="./../../public/image1.jpg" alt="This is an image" />
                <div className="p-5 bg-slate-300 rounded-b-2xl">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 1 v 1</h5>
                    <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit quo laboriosam quibusdam eos hic obcaecati amet fugiat repellat. Pariatur!</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Play Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="max-w-sm   rounded-b-2xl	mx-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <img className='rounded-t-2xl' src="./../../public/image1.jpg" alt="This is an image" />

                <div className="p-5 bg-slate-300 rounded-b-2xl">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Self Assesment</h5>
                    <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit quo laboriosam quibusdam eos hic obcaecati amet fugiat repellat. Pariatur!</p>
                    <Link to="/dbms/practice/attempt">
                        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Play Now
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="max-w-sm rounded-b-2xl	mx-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <img className='rounded-t-2xl' src="./../../public/image1.jpg" alt="This is an image" />

                <div className="p-5 bg-slate-300 rounded-b-2xl">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> 1 vs All </h5>
                    <p className="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit quo laboriosam quibusdam eos hic obcaecati amet fugiat repellat. Pariatur!</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Play Now
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </>
    )
}

export default ContestList
