import { Avatar } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

const navLinks = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Users', link: '/users' },
];
const userColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 30,
    disableColumnMenu: true,
    sortable: false,
  },
  {
    field: 'image',
    headerName: 'Avatar',
    disableColumnMenu: true,
    renderCell: (params) => <Avatar alt={params.row.firstName} src={params.row.image} />,
  },
  {
    field: 'firstName',
    headerName: 'FirstName',
    disableColumnMenu: true,
  },
  {
    field: 'lastName',
    headerName: 'LastName',
    disableColumnMenu: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    disableColumnMenu: true,
    width: 30,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    disableColumnMenu: true,
    renderCell: (params) => (
      <p className={`${params.row.gender === 'male' ? 'text-blue-700' : 'text-red-700'}`}>
        {params.row.gender}
      </p>
    ),
  },
  {
    field: 'email',
    headerName: 'Email',
    disableColumnMenu: true,
    minWidth: 200,
    flex: 1,
    renderCell: (params) => (
      <a href={`mailto:${params.row.email}`} className="underline">
        {params.row.email}
      </a>
    ),
  },
  {
    field: 'phone',
    headerName: 'Phone',
    disableColumnMenu: true,
    minWidth: 200,
    renderCell: (params) => `📞 ${params.row.phone}`,
  },
  {
    field: 'birthDate',
    headerName: 'BirthDate',
    disableColumnMenu: true,
    minWidth: 150,
    renderCell: (params) => `🎂 ${params.row.birthDate}`,
  },
];
export { navLinks, userColumns };
