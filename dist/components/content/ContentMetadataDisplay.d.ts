import React from 'react';
import { ContentTaggerActionProps } from './ContentTagger';
import { BaseMetadata, BaseMetadataType } from '../../types';
declare type ContentMetadataProps<T extends BaseMetadataType, M extends BaseMetadata<T>> = {
    metadataTypes: T[];
    metadata: Record<number, M[]>;
    options: Record<number, M[]>;
    actions: ContentTaggerActionProps<T, M>;
};
/**
 * This component displays all the metadata of content.
 * It also provides the ability to edit such tags.
 * @param props The context and callbacks of the component.
 * @returns A display for all content metadata.
 */
declare function ContentMetadata<T extends BaseMetadataType, M extends BaseMetadata<T>>(props: ContentMetadataProps<T, M>): React.ReactElement;
export default ContentMetadata;