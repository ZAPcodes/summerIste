import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface DomainCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  weeks: number;
  progress: number;
  onStartLearning: (domainId: string) => void;
}

const DomainCard: React.FC<DomainCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  color,
  weeks,
  progress,
  onStartLearning,
}) => {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-blue-800/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
      <CardHeader className="pb-4">
        <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Duration</span>
            <Badge variant="secondary" className="bg-blue-900/50 text-blue-200">
              {weeks} weeks
            </Badge>
          </div>
          <Button
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 group"
            onClick={() => onStartLearning(id)}
          >
            Start Learning
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DomainCard;