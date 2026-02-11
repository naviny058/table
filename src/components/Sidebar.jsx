import { BookUser, ChartColumnBig, ChartLine, CircleUser, FileUp, Handshake, LayoutDashboard, MessageSquareWarning, SquareUser, User } from 'lucide-react';
import { ChevronDown, ChevronRight } from "lucide-react";

import React, { useState } from 'react'

function Sidebar() {

  const sidebarMenu = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard />,
      children: []
    },
    {
      label: "Account",
      icon: <CircleUser />,
      children: [
        {
          label: "Accounts",
          icon: <SquareUser />
        },
        {
          label: "Account Report",
          icon: <ChartColumnBig />
        },
        {
          label: "Account Upload",
          icon: <FileUp />
        }
      ]
    },
    {
      label: "Contact",
      icon: <BookUser />,
      children: [
        {
          label: "Contact1",
          icon: <BookUser />
        },
        {
          label: "Contact2",
          icon: <BookUser />
        },
      ]
    },
    {
      label: "Lead",
      icon: <ChartLine />,
      children: [
        {
          label: "Lead1",
          icon: <User />
        },
        {
          label: "lead2",
          icon: <ChartColumnBig />
        },
      ]
    },
    {
      label: "Deal",
      icon: <Handshake />,
      children: []
    },
    {
      label: "Feedback",
      icon: <MessageSquareWarning />,
      children: []
    }
  ];
  const [openMenu, setOpenMenu] = useState(null);

  const handleToggle = (label) => {
    setOpenMenu(openMenu === label ? null : label)
  }
  return (
    <div className='w-72 p-4'>
      {
        sidebarMenu.map(item => (
          <div key={item.label} >
            <div
              onClick={() => handleToggle(item.label)}
              className={`flex items-center gap-4 p-4`}>
              {item.icon}
              <span>{item.label}</span>
              {item.children.length > 0 && (
                openMenu === item.label
                  ? <ChevronDown size={16} />
                  : <ChevronRight size={16} />
              )}
            </div>
            {openMenu === item.label && item.children.length > 0 && (
              item.children.map(i => (
                <div key={i.label}>
                  <div className='ml-4 flex items-center gap-4 p-4'>
                    {i.icon}
                    <span>{i.label}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar