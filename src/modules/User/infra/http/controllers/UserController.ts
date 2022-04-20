import { container, injectable } from 'tsyringe';
import { NextFunction, Request, Response } from 'express';

import { ListUserService } from '@modules/User/services/ListUserService';
import { LoginUserService } from '@modules/User/services/LoginUserService';
import { UpdateUserService } from '@modules/User/services/UpdateUserService';
import { CreateUserService } from '@modules/User/services/CreateUserService';
import { FindUserByIdService } from '@modules/User/services/FindUserByIdService';
import { SoftDeleteUserService } from '@modules/User/services/SoftDeleteUserService';

@injectable()
export class UserController {
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(CreateUserService);

      const data = request.body;
      const img = request.file;

      response.status(201).json(await service.execute(data, img));
    } catch (err) {
      next(err);
    }
  }

  public async login(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(LoginUserService);

      const loginRequest = request.body;

      response.json(await service.execute(loginRequest));
    } catch (err) {
      next(err);
    }
  }

  public async list(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(ListUserService);

      response.json(await service.execute());
    } catch (err) {
      next(err);
    }
  }

  public async find(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(FindUserByIdService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }

  public async update(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(UpdateUserService);

      const { id } = request.params;
      const data = request.body;
      const img = request.file;

      response.json(await service.execute(Number(id), data, img));
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const service = container.resolve(SoftDeleteUserService);

      const { id } = request.params;

      response.json(await service.execute(Number(id)));
    } catch (err) {
      next(err);
    }
  }
}
