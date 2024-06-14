// UsersPage.jsx
import { DataGrid } from '@mui/x-data-grid';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useUsers } from './hooks/useUsers';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'country', headerName: 'Country ID', width: 130 },
  { field: 'edit', headerName: 'Edit',width: 100, renderCell: (params) => (
      <Button variant="contained" color="primary" onClick={() => {}}>Edit</Button> ),
  },
  { field: 'delete', headerName: 'Delete', width: 120, renderCell: (params) => (
      <Button variant="contained" color="secondary" onClick={() => {}}>Delete</Button> ),
  },
];

export const UsersPage = () => {

  const {
    user,
    countries,
    users,
    setUser,
    handleChange,
    handleSubmit,
  } = useUsers();

  return (
    <div style={{ height: 400, width: '100%', padding: '10px' }}>
      <form onSubmit={handleSubmit} style={{width: '500px', margin: 'auto', marginBottom: '20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Name'
              type="text"
              placeholder="Enter a valid user name"
              value={user.name}
              onChange={(e) => setUser(user => ({ ...user, name: e.target.value }))}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label='Email'
              type="email"
              placeholder="Enter a valid email address"
              value={user.email}
              onChange={(e) => setUser(user => ({ ...user, email: e.target.value }))}
              fullWidth
            />
          </Grid>

          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                value={user.country}
                onChange={handleChange}
                label="Country"
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>{country.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button type="submit" variant="contained" fullWidth>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>

      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
  );
};

export default UsersPage;
