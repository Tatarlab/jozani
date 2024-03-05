import React, { useMemo } from 'react';
import {
  ListScroller, ListWrapper, StyledList, StyledListItem
} from './shared';
import { IListProps } from './types';

const List = React.forwardRef<HTMLUListElement, IListProps>(({
  isReady = false,
  isError = false,
  className,
  itemClassName,
  listClassName,
  style,
  itemStyle,
  listComponent: ListComponent = StyledList,
  itemComponent: ItemComponent = StyledListItem,
  emptyContent,
  errorContent,
  loader: Loader,
  data,
  children: _children,
  renderItem,
}, ref) => {

  const children = useMemo(() => {
    if (isError) {
      return errorContent;
    }

    if (!isReady) {
      return emptyContent;
    }

    if (!data || !data.length) {
      return emptyContent;
    }

    return (
      <ListComponent ref={ref} className={listClassName}>
        {data.map((item, index, data) => (
          <ItemComponent
            key={index + JSON.stringify(item)}
            className={itemClassName}
            style={itemStyle}
          >
            {renderItem(item, index, data)}
          </ItemComponent>
        ))}

        {_children}
      </ListComponent>
    );
  }, [
    isReady, listClassName, itemClassName, ref,
    data, renderItem, _children,
    ListComponent, ItemComponent, itemStyle,
  ]);

  return (
    <ListWrapper
      className={className}
      style={style}
    >
      <ListScroller>
        {children}
      </ListScroller>
    </ListWrapper>
  );
});

List.displayName = 'List';

export default React.memo(List);

export * from './shared';
export * from './types';
