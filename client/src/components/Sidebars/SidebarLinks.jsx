import React, { useState } from 'react';

function SidebarLinks({
  children,
  activecondition,
}) {

  const [open, setOpen] = useState(activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-slate-900'}`}>
      {children(handleClick, open)}
    </li>
  );
}

export default SidebarLinks;