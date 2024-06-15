import { DataGrid } from '@mui/x-data-grid';
import { useCountries } from './hooks/useCountries';
import { Button, ButtonGroup, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';


export const CountriesPage = () => {
  
  const { countries, country, setCountry, isEditing, handleSubmit, editCountry, onHandleEdit, deleteCountry } = useCountries();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'actions', headerName: 'Actions',width: 200, renderCell: (params) => (
      <Grid sx={{ height:'100%'}} >
        <Button variant="text" onClick={() => onHandleEdit(params.row.id) }><EditIcon color="primary"  /> </Button>
        <Button variant="text" onClick={() => deleteCountry(params.row.id) }><DeleteIcon color="secondary"  /> </Button>
      </Grid>
    )}
  ];

  return (
    <div style={{ height: 400, width: '100%', padding: '10px'}}>
      <form onSubmit={handleSubmit} style={{ display:'flex', alignContent: 'center', justifyContent:'center', marginBottom: '10px'}} >
        <TextField 
          id="Country" 
          label="New Country" 
          variant="outlined"
          placeholder='Enter a valid country name'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          sx={{ width: '30%', width:{ sm: 450 } }}
        />
        <ButtonGroup>
          <Button type="submit" variant="contained" sx={{backgroundColor: isEditing ? 'orange': 'green' }}>{isEditing ? 'Editar':'Crear'}</Button>  
        </ButtonGroup>
      </form>
      
      <DataGrid
        rows={countries}
        columns={columns}
        pageSize={5}
        // checkboxSelection
      />
    </div>
  );
};
