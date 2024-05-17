import { PrismaClient } from "@prisma/client";
import { MoviefireAppUserRole } from "@/generated/type-graphql";

export type AppContext = {
  prisma: PrismaClient;
  jwt?: JwtPayload;
};

export type JwtPayload = {
  userId: string;
  userRole: MoviefireAppUserRole;
};
