import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Radio } from 'antd'
import { useNavigate } from 'react-router-dom';

function DashboardLayout() {
  const options = [
    { label: 'Account', value: 'Account', link: '/account' },
    { label: 'Create', value: 'Create', link: '/create' },
  ];
  const onChange = () => {

  }
  return (
    <div className='flex h-screen  container mx-auto'>

      <aside className='w-52 bg-white'>
        <Sidebar />
      </aside>

      <main className='flex-1 p-4'>
        <div className='w-60 my-4'>
          <Radio.Group
            block
            options={options}
            onChange={onchange}
            defaultValue="Apple"
            optionType="button"
            buttonStyle="solid"
          />

        </div>
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout