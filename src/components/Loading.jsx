import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader';

export default function Loading() {
  return (
    <div>
       <div className="mx-auto my-auto w-full px-4 sm:px-6 xl:w-full xl:px-0">
            <div className="flex flex-col items-center justify-center mt-72 md:mt-64 md:flex-row md:items-center md:justify-center md:space-x-6">
              <div className="space-x-2 pt-6 pb-8 md:space-y-5">
                <PuffLoader
                  color="#3ABFF8"
                  loading
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          </div>
    </div>
  )
}
