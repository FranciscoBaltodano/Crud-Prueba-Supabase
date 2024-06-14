import { DataGrid } from '@mui/x-data-grid';
import { useCountries } from './hooks/useCountries';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'edit', headerName: 'Edit',width: 100, renderCell: (params) => (
    <Button variant="contained" color="primary" onClick={() => {}}>Edit </Button> ),
  },
  { field: 'delete', headerName: 'Delete', width: 120, renderCell: (params) => (
    <Button variant="contained" color="secondary" onClick={() => {}}>Delete </Button> ),
  },
];

export const CountriesPage = () => {
  const { countries, country, setCountry, handleSubmit } = useCountries();

  return (
    <div style={{ height: 400, width: '100%', padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="Country" 
          label="New Country" 
          variant="outlined"
          placeholder='Enter a valid country name'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          sx={{ width: '30%', marginBottom: '10px' }}
        />
      </form>
      
      <DataGrid
        rows={countries}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};
