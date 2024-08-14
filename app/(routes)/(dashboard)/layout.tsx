import React from 'react'

export default function LayoutDashboard
    ({ children }: { children: React.ReactNode }) {
  return (
    <div>
    <div className="flex w-full h-full">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        Sdeoofojfjoddoj
      </div>
      <div className="w-full h-full xl:ml-80">
        Navjhjhhi
        <div className="p-6 h-max">
          {children}
        </div>
      </div>
    </div>   
    </div>
  )
}
