import React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

interface MetadataTableProps {
  metadataType: BaseMetadataType
  metadata: BaseMetadata[]
}

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Metadata Name',
    flex: 1,
  },
];

const accordionHeaderStyle: React.CSSProperties = {
  fontWeight: 600,
};

/**
 * This component creates a single table for a metadata type and its corresponding members.
 * All members of the passed in metadata prop should belong to the metadataType prop.
 * @param props The data for the table.
 * @returns An expandable panel containing the metadata in a table.
 */
function MetadataTable(props: MetadataTableProps): React.ReactElement {
  return (
    <Accordion>
      <AccordionSummary>
        <Typography style={accordionHeaderStyle}>{props.metadataType.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <DataGrid columns={columns} rows={props.metadata} autoHeight />
      </AccordionDetails>
    </Accordion>
  );
}

export default MetadataTable;