import React, { type PropsWithChildren } from "react";

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
}: PropsWithChildren<ItemListProps<T>>) {
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={keyExtractor(item)}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </>
  );
}
