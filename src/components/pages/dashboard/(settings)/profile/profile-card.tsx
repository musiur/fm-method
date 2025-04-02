import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export default function ProfileCard({ name, email, phone, avatarUrl }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-lg border">
      <CardContent className="p-6">
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24 border-2 border-primary/10">
              <AvatarImage src={avatarUrl} alt={name} />
              <AvatarFallback>{name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{name}</h2>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
