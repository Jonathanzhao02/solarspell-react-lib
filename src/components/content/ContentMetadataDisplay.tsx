//Importing from outside the project
import React from 'react';
import Grid, { GridSize, GridSpacing } from '@material-ui/core/Grid';

//Importing from other files of the projects
import ContentTagger, { ContentTaggerActionProps } from './ContentTagger';
import { BaseMetadata, BaseMetadataType } from '../../types';

type ContentMetadataProps<
  T extends BaseMetadataType,
  M extends BaseMetadata<T>,
> = {
  metadataTypes: T[]
  metadata: Record<number,M[]>
  options: Record<number,M[]>
  actions: ContentTaggerActionProps<T,M>
  width?: GridSize
  spacing?: GridSpacing
  mb?: string|number
}

/**
 * This component displays all the metadata of content.
 * It also provides the ability to edit such tags.
 * @param props The context and callbacks of the component.
 * @returns A display for all content metadata.
 */
function ContentMetadata<
  T extends BaseMetadataType,
  M extends BaseMetadata<T>,
>(props: ContentMetadataProps<T,M>): React.ReactElement {
  return (
    <Grid container spacing={props.spacing} >
      {props.metadataTypes.map(metadataType => {
        return (
          <Grid
            item
            key={metadataType.id}
            xs={props.width ?? 12}
            style={{ marginBottom: props.mb ?? '10px' }}
          >
            <ContentTagger
              {...props.actions}
              metadataType={metadataType}
              selected={props.metadata[metadataType.id] ?? []}
              options={props.options[metadataType.id] ?? []}
              label={metadataType.name}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ContentMetadata;
