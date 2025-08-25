import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gray-800 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome to Absaar</h1>
          <p className="text-blue-100">
            Manage your educational programs and student counseling services
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <div className="h-4 w-4 text-yellow-600">💰</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$45,231</div>
              <p className="text-xs text-muted-foreground">
                +8% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <div className="h-4 w-4 text-blue-600">👥</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">2,847</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Programs
              </CardTitle>
              <div className="h-4 w-4 text-red-500">📚</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">52</div>
              <p className="text-xs text-muted-foreground">+3 new programs</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placements</CardTitle>
              <div className="h-4 w-4 text-green-600">🎯</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">95%</div>
              <p className="text-xs text-muted-foreground">Success rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Enrollments</CardTitle>
              <CardDescription>Latest student registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah Johnson",
                    program: "MBBS Abroad",
                    date: "2 hours ago",
                  },
                  {
                    name: "Michael Chen",
                    program: "Engineering",
                    date: "4 hours ago",
                  },
                  {
                    name: "Priya Sharma",
                    program: "Medical",
                    date: "6 hours ago",
                  },
                  {
                    name: "David Wilson",
                    program: "MBBS Abroad",
                    date: "1 day ago",
                  },
                ].map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-gray-600">{student.program}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {student.date}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Performance</CardTitle>
              <CardDescription>
                Top performing programs this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { program: "MBBS Abroad", students: 156, growth: "+15%" },
                  { program: "Medical", students: 134, growth: "+12%" },
                  { program: "Engineering", students: 98, growth: "+8%" },
                  {
                    program: "Career Counseling",
                    students: 87,
                    growth: "+22%",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{item.program}</p>
                      <p className="text-sm text-gray-600">
                        {item.students} students
                      </p>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      {item.growth}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
