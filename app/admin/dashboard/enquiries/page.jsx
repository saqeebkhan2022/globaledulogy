"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EnquiriesTable() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  // Dummy data (replace with API response later)
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      number: "9876543210",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      number: "8765432109",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@example.com",
      number: "7654321098",
    },
    {
      id: 4,
      name: "Priya Verma",
      email: "priya@example.com",
      number: "6543210987",
    },
    { id: 5, name: "Ali Khan", email: "ali@example.com", number: "5432109876" },
    {
      id: 6,
      name: "Ravi Sharma",
      email: "ravi@example.com",
      number: "4321098765",
    },
    {
      id: 7,
      name: "Sanya Mehra",
      email: "sanya@example.com",
      number: "3210987654",
    },
    {
      id: 8,
      name: "Arjun Patel",
      email: "arjun@example.com",
      number: "2109876543",
    },
    {
      id: 9,
      name: "Sneha Roy",
      email: "sneha@example.com",
      number: "1098765432",
    },
    {
      id: 10,
      name: "David Wilson",
      email: "david@example.com",
      number: "9988776655",
    },
    {
      id: 11,
      name: "Maya Singh",
      email: "maya@example.com",
      number: "8899776655",
    },
    {
      id: 12,
      name: "Karan Gupta",
      email: "karan@example.com",
      number: "7788665544",
    },
  ];

  // Pagination setup
  const itemsPerPage = 10;
  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header with Search */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Enquiries</h2>
        <Input
          placeholder="Search enquiries..."
          className="max-w-xs"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 hover:bg-gray-800">
            <TableHead className="text-white font-medium">ID</TableHead>
            <TableHead className="text-white font-medium">Name</TableHead>
            <TableHead className="text-white font-medium">Email</TableHead>
            <TableHead className="text-white font-medium">
              Phone Number
            </TableHead>
            <TableHead className="text-white font-medium text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.length > 0 ? (
            paginated.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50">
                <TableCell>{row.id}</TableCell>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell className="flex gap-2 justify-center">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className="text-center py-6 text-gray-500 italic"
              >
                No enquiries found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Page {page} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
