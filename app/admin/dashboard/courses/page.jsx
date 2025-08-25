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

export default function CoursesTable() {
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  // Dummy course data (replace with API later)
  const data = [
    { id: 1, name: "MBBS", duration: "5.5 years", fees: "₹10,00,000" },
    { id: 2, name: "BDS", duration: "5 years", fees: "₹6,00,000" },
    { id: 3, name: "BAMS", duration: "5.5 years", fees: "₹3,50,000" },
    { id: 4, name: "BHMS", duration: "5.5 years", fees: "₹3,00,000" },
    { id: 5, name: "BUMS", duration: "5.5 years", fees: "₹2,50,000" },
    { id: 6, name: "Veterinary", duration: "5 years", fees: "₹4,50,000" },
    { id: 7, name: "Pharmacy", duration: "4 years", fees: "₹2,20,000" },
    { id: 8, name: "Physiotherapy", duration: "4.5 years", fees: "₹3,10,000" },
    { id: 9, name: "Nursing", duration: "4 years", fees: "₹1,80,000" },
    { id: 10, name: "Paramedical", duration: "3 years", fees: "₹1,50,000" },
    { id: 11, name: "Ayurveda", duration: "5 years", fees: "₹2,80,000" },
    { id: 12, name: "Homeopathy", duration: "5 years", fees: "₹2,60,000" },
  ];

  // Pagination setup
  const itemsPerPage = 10;
  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.duration.toLowerCase().includes(search.toLowerCase()) ||
      item.fees.toLowerCase().includes(search.toLowerCase())
  );
  const paginated = filtered.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      {/* Header with Search */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Courses</h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56"
          />
          <Button className="bg-gray-800 text-white">+ Add Course</Button>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800 hover:bg-gray-800">
            <TableHead className="text-white font-medium">ID</TableHead>
            <TableHead className="text-white font-medium">
              Course Name
            </TableHead>
            <TableHead className="text-white font-medium">Duration</TableHead>
            <TableHead className="text-white font-medium">Fees</TableHead>
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
                <TableCell>{row.duration}</TableCell>
                <TableCell>{row.fees}</TableCell>
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
                No courses found
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
