"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
