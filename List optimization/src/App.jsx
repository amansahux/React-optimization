import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const users = Array.from({ length: 50000 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
}));

export default function UserList() {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    // overscan: 5,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  console.log("Total users:", users.length);
  console.log("Currently rendered:", virtualItems.length);

  return (
    <div
      ref={parentRef}
      style={{
        height: "500px",
        overflow: "auto",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {virtualItems.map((virtualItem) => {
          const user = users[virtualItem.index];

          return (
            <div
              key={user.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
                padding: "15px",
                borderBottom: "1px solid #ddd",
                boxSizing: "border-box",
              }}
            >
              {user.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}