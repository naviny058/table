import React from 'react'
import { Table } from 'antd';
import './custom.css'
function UserTable() {
  const dataSource = [
    {
      accountName: "Freda",
      email: "twinger0@t.co",
      phone: "5967957999",
      website: null,
      industry: null,
      accountStatus: true,
      remark: null,
    },
    {
      accountName: "Aloysius",
      email: "amellanby1@lycos.com",
      phone: "4988111631",
      website: "http://sun.com",
      industry: "Real Estate Investment Trusts",
      accountStatus: false,
      remark: "nulla nisl nunc nisl duis",
    },
    {
      accountName: "Dalli",
      email: "dturnell2@reference.com",
      phone: "9919131652",
      website: "http://51.la",
      industry: "Hospital/Nursing Management",
      accountStatus: false,
      remark: null,
    },
    {
      accountName: "Kort",
      email: "ktrittam3@sakura.ne.jp",
      phone: "4928500329",
      website: "http://walmart.com",
      industry: "EDP Services",
      accountStatus: false,
      remark: "id ornare imperdiet",
    },
    {
      accountName: "Heall",
      email: "hsilson4@pinterest.com",
      phone: "3862338325",
      website: "http://si.edu",
      industry: "n/a",
      accountStatus: false,
      remark: "auctor gravida sem",
    },
    {
      accountName: "Sheeree",
      email: "sjeannin5@bigcartel.com",
      phone: "4335616798",
      website: "https://amazon.com",
      industry: "Automotive Aftermarket",
      accountStatus: false,
      remark: "quis turpis",
    },
    {
      accountName: "Hildegarde",
      email: "hdurdy6@mysql.com",
      phone: "8059908180",
      website: "https://huffingtonpost.com",
      industry: "Industrial Specialties",
      accountStatus: true,
      remark: null,
    },
    {
      accountName: "Hulda",
      email: "hcruickshanks7@answers.com",
      phone: "8705495500",
      website: "https://yandex.ru",
      industry: "Package Goods/Cosmetics",
      accountStatus: true,
      remark: "platea dictumst aliquam",
    },
    {
      accountName: "Shae",
      email: "stales8@google.pl",
      phone: "4628674456",
      website: "http://mayoclinic.com",
      industry: "Industrial Machinery/Components",
      accountStatus: true,
      remark: "eget orci vehicula",
    },
    {
      accountName: "Jana",
      email: "jhugk9@wikispaces.com",
      phone: "4222905888",
      website: "https://jugem.jp",
      industry: "n/a",
      accountStatus: true,
      remark: "eu est",
    },
  ];


  const columns = [
    {
      title: 'Account Name',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone no',
      dataIndex: 'phone',
      key: 'phoneNo',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
    },
    {
      title: 'Account Status',
      dataIndex: 'accountStatus',
      key: 'accountStatus',
      render: (value) => String(value)
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
    },
  ];

  return (
    <div className='custom-table'>
      <Table
        rowKey="email"
        dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default UserTable