import { HttpException, Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "../Data/prisma.service";
import { createUserDTO } from "./createUserDTO";
import { userRO } from "./userRO";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<userRO> {
    const predicate: Prisma.UserWhereUniqueInput = {
      email: email,
    };

    const user = await this.prisma.user.findUnique({
      where: predicate,
    });

    if (user == null) {
      throw new HttpException('User not found', 400);
    }

    return new userRO(user.id, user.email, user.name);
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: createUserDTO): Promise<User> {
    const user_inf: Prisma.UserCreateInput = {
      email: data.email,
      name: data.name,
    };

    return await this.saveUser(user_inf);
  }
saveUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}