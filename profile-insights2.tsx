"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Target, Edit2, CheckCircle2, XCircle, Zap, Book, Users, Calendar } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function Component() {
  const profileData = {
    name: "Anonymous",
    username: "@sudke",
    avatar: "/placeholder.svg",
    joinedDate: "4 days ago",
    rank: 47,
    coins: 1250,
    stats: {
      solvedProblems: 4.5,
      challenges: 14,
      accuracy: 0.57,
    },
    subjects: [
      { name: "Physics", completed: 1, color: "bg-blue-500" },
      { name: "Chemistry", completed: 3, color: "bg-green-500" },
      { name: "Mathematics", completed: 0, color: "bg-gray-200" },
    ],
    skills: [
      { name: "Problem Solving", level: 4 },
      { name: "Critical Thinking", level: 3 },
      { name: "Data Analysis", level: 5 },
      { name: "Logical Reasoning", level: 4 },
      { name: "Scientific Method", level: 3 },
    ],
    ratingHistory: Array.from({ length: 10 }, (_, i) => ({
      day: i + 1,
      rating: Math.floor(Math.random() * 20) + 35,
    })),
    recentAttempts: [
      { id: 1, questionName: "Newton's Laws of Motion", isCorrect: true, solvedAt: "2024-11-09T14:30:00Z" },
      { id: 2, questionName: "Periodic Table Elements", isCorrect: false, solvedAt: "2024-11-08T10:15:00Z" },
      { id: 3, questionName: "Quadratic Equations", isCorrect: true, solvedAt: "2024-11-07T16:45:00Z" },
      { id: 4, questionName: "Thermodynamics Principles", isCorrect: true, solvedAt: "2024-11-06T09:00:00Z" },
      { id: 5, questionName: "Organic Chemistry Nomenclature", isCorrect: false, solvedAt: "2024-11-05T11:20:00Z" },
    ],
    achievements: [
      { name: "Quick Learner", description: "Completed 10 challenges in a day", icon: Zap },
      { name: "Consistent Performer", description: "Maintained 80% accuracy for a week", icon: Target },
      { name: "Team Player", description: "Participated in 5 group challenges", icon: Users },
    ],
    studyStreaks: [
      { date: "2024-11-01", hours: 2 },
      { date: "2024-11-02", hours: 1.5 },
      { date: "2024-11-03", hours: 3 },
      { date: "2024-11-04", hours: 2.5 },
      { date: "2024-11-05", hours: 1 },
      { date: "2024-11-06", hours: 2 },
      { date: "2024-11-07", hours: 2.5 },
    ],
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Profile Header */}
      <Card className="border-yellow-500/20">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 border-2 border-yellow-500">
                <AvatarImage src={profileData.avatar} alt={profileData.name} />
                <AvatarFallback>{profileData.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold">{profileData.name}</h1>
                <p className="text-muted-foreground">{profileData.username}</p>
                <p className="text-sm text-muted-foreground">Joined {profileData.joinedDate}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start mt-2 gap-2">
                  <Badge variant="secondary" className="text-yellow-600 bg-yellow-100">
                    Rank {profileData.rank}
                  </Badge>
                  <Badge variant="secondary" className="text-yellow-600 bg-yellow-100">
                    {profileData.coins} Coins
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="outline" className="gap-2 mt-4 md:mt-0">
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-yellow-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Solved Problems</p>
                <h2 className="text-2xl font-bold">{profileData.stats.solvedProblems}</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Medal className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Challenges</p>
                <h2 className="text-2xl font-bold">{profileData.stats.challenges}</h2>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20 sm:col-span-2 lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Accuracy</p>
                <h2 className="text-2xl font-bold">{(profileData.stats.accuracy * 100).toFixed(2)}%</h2>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-4">
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="progress">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle>Subject Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.subjects.map((subject) => (
                  <div key={subject.name} className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{subject.name}</p>
                      <p className="text-sm text-muted-foreground">{subject.completed} Questions</p>
                    </div>
                    <Progress value={(subject.completed / 10) * 100} className="h-2" indicatorClassName={subject.color} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="text-sm py-1 px-2"
                  >
                    {skill.name}
                    <span className="ml-1 text-yellow-500">
                      {Array(skill.level).fill('★').join('')}
                    </span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {profileData.achievements.map((achievement) => (
                  <div key={achievement.name} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <achievement.icon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle>Study Streaks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] sm:h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={profileData.studyStreaks}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="hours" stroke="#EAB308" strokeWidth={2} dot={{ fill: "#EAB308", strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Attempts */}
      <Card className="border-yellow-500/20">
        <CardHeader>
          <CardTitle>Recent Attempts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {profileData.recentAttempts.map((attempt) => (
              <li key={attempt.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="space-y-1 flex-grow mr-4">
                  <p className="font-medium text-sm sm:text-base">{attempt.questionName}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {new Date(attempt.solvedAt).toLocaleDateString()}
                  </p>
                </div>
                {attempt.isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
                )}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Contribution Section */}
      <Card className="relative overflow-hidden border-yellow-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-yellow-500 opacity-10" />
        <CardContent className="relative py-8 sm:py-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Contribute to the community</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Share your knowledge and help others</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Contribute Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}